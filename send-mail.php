<?php
session_start();



header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *, Authorization');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json; charset=UTF-8");

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

file_put_contents('query.txt', date("d.m.y H:i:s  ") . "1" . "\r\n", FILE_APPEND);

// Получение данных из формы регистрации (ваш HTML-формат)
$project_name = $data['project_name'];
$admin_email= $data['admin_email'];
$form_subject  = $data['form_subject'];
$user_email  = $data['email'];
$kapcha = $data['kapcha'];
$validator = $data[':'];
$message = "";


if ($validator !=''){
  die('No bots!');
}

if($kapcha != $_SESSION['rand_code']) {
   echo json_encode(["success" => false, "message" => "Капча введена неверно: "]);
   exit;
}else{




foreach ( $data as $key => $value ) {
file_put_contents('query1.txt', date("d.m.y H:i:s  ") .$key ." ". $value . "\r\n", FILE_APPEND);
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) { return '=?UTF-8?B?'.Base64_encode($text).'?='; };

$adminHeaders = "MIME-Version: 1.0" . "\r\n" .
"Content-Type: text/html; charset=utf-8" . "\r\n" .
"From: " . $project_name . "\r\n" .
"Reply-To: " . $user_email . "" . "\r\n";

$userHeaders = "MIME-Version: 1.0" . "\r\n" .
"Content-Type: text/html; charset=utf-8" . "\r\n" .
"From: " . $project_name . "\r\n" .
"Reply-To: " . $admin_email . "" . "\r\n";


if($user_email) {
   mail($user_email, adopt("Підтвердження відправки листа"), "Ви відправили повідомлення на сайт " . $project_name, $userHeaders);
}



if (mail($admin_email, adopt($form_subject) , $message, $adminHeaders )) {
 echo json_encode(["success" => true, "message" => "Письмо успешно отправлено: "]);
           exit;
} else {
 echo json_encode(["success" => false, "message" => "Ошибка при отправке письма: "]);
           exit;
}

}
?>