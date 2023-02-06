<?php 

$to = "b.malika.b@gmail.com";
$tema = "Сообщение из формы";
$messages = "Имя: " . $_POST['name'] . PHP_EOL ;
$messages .= "Телефон: " . $_POST['phone'] . PHP_EOL;
$messages .= "Сообшение: " . $_POST['message'] . PHP_EOL;

mail($to,$tema,$messages);