<?php

require 'app/AmoCrmConnector.php';

if(!empty($_POST['file_name']) && !empty($_POST['file'])) {
    $fileExt = explode('.', $_POST['file_name']);
    $extension = end($fileName);
    $filename = 'upload/'. (new DateTime())->format("U").md5(rand(0, 10000)) .'.' . $fileExt[1];
    $message = $_SERVER['SERVER_NAME'].'/'.$filename;
    $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST['file']));
    file_put_contents($filename, $data);
}

$amoConnector = new AmoCrmConnector();

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
