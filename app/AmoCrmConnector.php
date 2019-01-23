<?php

class AmoCrmConnector
{
    const SUBDOMAIN = 'b2bsouvenir';

    private $cookiePath;

    public function __construct()
    {
        $this->cookiePath = dirname(__FILE__) . '/cookie.txt';
    }

    public function authentication()
    {
        $user = [
            'USER_LOGIN' => 'sharikisfoto@yandex.ru',
            'USER_HASH' => 'd853d4c0115c7c1c30e0238179d3d4cf42a3d4b6',
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
                'status_id' => 21185296,
                'custom_fields' => [
                    [
                        'id' => 511361, // источник
                        'values' => [
                            [
                                'value' => '1077691',
                            ],
                        ],
                    ],
//                    [
//                        'id' => 629489, // utm_source
//                        'values' => [
//                            [
//                                'value' => $data['utm_source'],
//                            ],
//                        ],
//                    ],
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
                        'id' => 511033, //телефон
                        'values' => [
                            [
                                'value' => $data['phone'],
                                'enum' => 'WORK',
                            ],
                        ],
                    ],
                    [
                        'id' => 511035, //Email
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
            'responsible_user_id' => 1435408,
            'created_by' => 1435408,
        ];

        $data['message'] && $notes['add'][] = [
            'element_id' => $orderId,
            'element_type' => '2',
            'text' => $data['message'],
            'note_type' => '4',
            'created_at' => (new \DateTime())->format('U'),
            'responsible_user_id' => 1435408,
            'created_by' => 1435408,
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

    public function updateLead($orderId, $data)
    {
        $leads['request']['leads']['update'] = [
            [
                'id' => $orderId,
                'last_modified' => ((int)(new \DateTime())->format('U') + 10),
                'custom_fields' => [
                    [
                        'id' => 520743, // send sms
                        'values' => [
                            [
                                'value' => 'https://gostprint.ru/sendtracksms?crmid=' . $orderId,
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/private/api/v2/json/leads/set';
        $this->sendCurlRequest($leads, $url);
    }

    public function getLeadInfo($id)
    {
        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/private/api/v2/json/leads/list?id[]=' . $id;
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_COOKIEFILE, dirname(__FILE__) . '/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
        curl_setopt($curl, CURLOPT_COOKIEJAR, dirname(__FILE__) . '/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);

        $out = curl_exec($curl);
        curl_close($curl);

        return $out;
    }

    public function updateLeads($leads)
    {
        $request['request']['leads']['update'] = $leads;

        $url = 'https://' . self::SUBDOMAIN . '.amocrm.ru/private/api/v2/json/leads/set';
        return $this->sendCurlRequest($request, $url);
    }
}