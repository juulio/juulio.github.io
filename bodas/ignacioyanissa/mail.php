<?php
/* array $HTTP_POST_VARS. */
$email=$HTTP_POST_VARS['email'];
$name=$HTTP_POST_VARS['name'];
$message=$HTTP_POST_VARS['message'];
$montoTotal=$HTTP_POST_VARS['monto'];
$emailContent="Email: ".$email."\nNombre(s): ".$name."\nMensaje: ".$message."\nTotal ".$montoTotal;
if(mail("info@ignacioyanissa.com","ignacioyanissa.com nuevo regalo",$emailContent)) {
header('Location: http://www.ignacioyanissa.com/lista_de_regalos.html?sent');
}
