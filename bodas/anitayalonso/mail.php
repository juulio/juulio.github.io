<?php
/* Admin E-mail */
/* array $HTTP_POST_VARS. */
$email=$HTTP_POST_VARS['email'];
$name=$HTTP_POST_VARS['name'];
$message=$HTTP_POST_VARS['message'];
$montoTotal=$HTTP_POST_VARS['monto'];
$regalosSelecionados=$HTTP_POST_VARS['regalos'];

$emailContent="Nombre(s): ".$name."\n\nEmail: ".$email."\n\nRegalos:\n".$regalosSelecionados."\n\nTotal $".$montoTotal."\n\nMensaje:\n".$message;

/* Guests E-mail 
mail($to, $subject, $message, $headers);

$message = "<html><head></head><body>";
$message .= "<img src='link-image.jpg' alt='' /></body></html>";

$headers = "From: $from_email";
$headers .= "Content-type: text/html";*/

$guestEmail="Hola ".$name."\n\n\nEsta es la confirmación del regalo de bodas de Anita y Alonso.\n\nSu regalo es\n".$regalosSelecionados."\n\nMonto Total: $".$montoTotal."\n\nLe recordamos que el número de cuenta en dólares para depositar su regalo es 913777686, BAC San José, a nombre de Julio A. Del Valle Gamboa cédula 1-1114-0269 Cuenta cliente 10200009137776861.\n\nMuchas gracias.";

if(mail("juulio@gmail.com","juulio@gmail.com nuevo regalo",$emailContent)) {
  mail($email, "Boda Anita y Alonso", $guestEmail);
  header('Location: http://www.anitayalonso.com/opciones-de-regalo.html?sent');
}