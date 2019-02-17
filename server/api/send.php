<?php

require 'app/AmoCrmConnector.php';

const MATERIALS = [
    'silicone' => 'Силикон',
    'plastic' => 'Пластик',
    'softtouch' => 'Soft-Touch',
];

const PRINTING = [
    'DDD' => '3D печать',
    'volumetric' => 'Объемная печать',
    'lacquer' => 'Печать лаком',
    'color' => 'Цветная печать',
    'white' => 'Печать белым',
];

const PACKAGING = [
    'free' => 'Бесплатная упаковка',
    'paper' => 'Подарочная бумага',
    'souvenirstudio' => 'Коробка с европодвесом С дизайном souvenirstudio',
    'custom' => 'Коробка с европодвесом Со своим дизайном',
];

$attachedFile = '';
if(!empty($_POST['file_name']) && !empty($_POST['file'])) {
    $fileExt = explode('.', $_POST['file_name']);
    $extension = end($fileExt);
    $filename = 'upload/'. (new DateTime())->format("U").md5(rand(0, 10000)) .'.' . $extension;
    $attachedFile = $_SERVER['SERVER_NAME'].'/'.$filename;
    $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST['file']));
    file_put_contents('../'.$filename, $data);
}

$amoConnector = new AmoCrmConnector();
$timeDate = date('d.m.Y H:i:s');
$Name = $_POST['name'];
$Phone = $_POST['phone'];
$Email = $_POST['email'];

$message[] = 'Дата и время подачи заявки: ' . $timeDate;
$Name && $message[] = 'Имя: ' . $Name;
$Phone && $message[] = 'Телефон: ' . $Phone;
$Email && $message[] = 'Email: ' . $Email;
$_POST['brand'] && $message[] = 'Бренды: ' . $_POST['brand'];
$_POST['material'] && $message[] = 'Материал: ' . MATERIALS[$_POST['material']];
$_POST['printing'] && $message[] = 'Тип печати: ' . PRINTING[$_POST['printing']];
$_POST['count'] && $message[] = 'Количество: ' . $_POST['count'];
$_POST['color'] && $message[] = 'Цвет(а): ' . $_POST['color'];
$_POST['date'] && $message[] = 'Cроки изготовления: ' . $_POST['date'];
$attachedFile && $message[] = 'Макет: ' . $attachedFile;
$_POST['packaging'] && $message[] = 'Упаковка: ' . PACKAGING[$_POST['packaging']];
$_POST['callback'] && $message[] = 'Обратный звонок';

$message = join("\r\n", $message);

$data = [
    'name' => $_POST['name'] ?? null,
    'email' => $_POST['email'] ?? null,
    'phone' => $_POST['phone'] ?? null,
    'message' => $message ?? null,
];

if ($amoConnector->authentication()) {
    $orderId = $amoConnector->createLead($data);
    $amoConnector->createContact($orderId, $data);
    $amoConnector->createNote($orderId, $data);
}

$template = file_get_contents("ordermail.html");

if($_POST['email']) {
    require 'vendors/phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;

    $mail->isSMTP();

    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'zakaz24@souvenirstudio.ru'; // логин от вашей почты
    $mail->Password = 'YkWJ9GJdr'; // пароль от почтового ящика
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->CharSet = 'UTF-8';
    $mail->From = 'zakaz24@souvenirstudio.ru'; // адрес почты, с которой идет отправка
    $mail->FromName = 'souvenirstudio.ru'; // имя отправителя
    $mail->addAddress($_POST['email'], $_POST['email'] ?? ''); // адрес почты, куда идет отправка
    $mail->isHTML(true);

    $mail->Subject = "Заявка с сайта";
    $mail->Body = $template;

    $mail->AddAttachment('./Каталог.pdf', $name = 'Каталог',  $encoding = 'base64', $type = 'application/pdf');

    $mail->send();
}

