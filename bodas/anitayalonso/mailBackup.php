<?php
/* array $HTTP_POST_VARS. */
$email=$HTTP_POST_VARS['email'];
$name=$HTTP_POST_VARS['name'];
$message=$HTTP_POST_VARS['message'];
$montoTotal=$HTTP_POST_VARS['monto'];
$regalosSelecionados=$HTTP_POST_VARS['regalos'];
$emailContent="Nombre(s): ".$name."\n\nEmail: ".$email."\n\nRegalos:\n".$regalosSelecionados."\n\nMensaje: ".$message."\n\nTotal $".$montoTotal;
if(mail("juulio@gmail.com","juulio@gmail.com nuevo regalo",$emailContent)) {
header('Location: http://www.anitayalonso.com/opciones-de-regalo.html?sent');
}
