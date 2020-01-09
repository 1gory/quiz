<?php

class AmoCrmConnector
{
    const SUBDOMAIN = 'suvstudio';

    private $cookiePath;

    public function __construct()
    {
        $this->cookiePath = dirname(__FILE__) . '/cookie.txt';
    }

    public function authentication()
    {
        $user = [
            'USER_LOGIN' => 'suvstudio@yandex.ru',
            'USER_HASH' => 'a3ba395fb36811406a9b46e9ecc2d6bd0ebed3b1',
        ];

        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/private/api/auth.php?type=json';
        $out = $this->sendCurlRequest($user, $url);

        $response = json_decode($out, true);
        $response = $response['response'];
        if (isset($response['auth']) && $response['auth'] === true) {
            return true;
        }

        return false;
    }

    public function createLead($data)
    {
        $leads['request']['leads']['add'] = [
            [
                'name' => $data['name'] . ' ' . $data['phone'],
                'date_create' => (new \DateTime())->format('U'),
                'custom_fields' => [
                    [
                        'id' => 407191, // источник
                        'values' => [
                            [
                                'value' => '953589', // case.souvenirstudio.ru
                            ],
                        ],
                    ],
                    [
                        'id' => 407189, // utm_source
                        'values' => [
                            [
                                'value' => $data['utm_source'],
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/private/api/v2/json/leads/set';
        $out = $this->sendCurlRequest($leads, $url);

        $response = json_decode($out, true);
        $response = $response['response'];

        return $response['leads']['add'][0]['id'] ?? 'undefined';
    }

    public function createContact($orderId, $data)
    {
        $contacts['add'] = [
            [
                'name' => $data['name'] ?? 'Контакт',
                'created_at' => (new \DateTime())->format('U'),
                'leads_id' => [
                    (string)$orderId,
                ],
                'custom_fields' => [
                    [
                        'id' => 407103, //телефон
                        'values' => [
                            [
                                'value' => $data['phone'],
                                'enum' => 'WORK',
                            ],
                        ],
                    ],
                    [
                        'id' => 407105, //Email
                        'values' => [
                            [
                                'value' => $data['email'],
                                'enum' => 'WORK',
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/api/v2/contacts';

        $out = $this->sendCurlRequest($contacts, $url);

        $response = json_decode($out, true);
        $response = $response['response'];

        return $response;
    }

    public function createNote($orderId, $data)
    {
        $notes = ['add' => []];

        $data['subject'] && $notes['add'][] = [
            'element_id' => $orderId,
            'element_type' => '2',
            'text' => $data['subject'],
            'note_type' => '4',
            'created_at' => (new \DateTime())->format('U'),
        ];

        $data['message'] && $notes['add'][] = [
            'element_id' => $orderId,
            'element_type' => '2',
            'text' => $data['message'],
            'note_type' => '4',
            'created_at' => (new \DateTime())->format('U'),
        ];

        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/api/v2/notes';

        if (empty($notes)) {
            return null;
        }

        $out = $this->sendCurlRequest($notes, $url);
        $response = json_decode($out, true);
        $response = $response['response'];

        return $response;
    }

    private function sendCurlRequest($data, $url)
    {
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_COOKIEFILE, $this->cookiePath);
        curl_setopt($curl, CURLOPT_COOKIEJAR, $this->cookiePath);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);

        $out = curl_exec($curl);
        curl_close($curl);

        return $out;
    }
}
