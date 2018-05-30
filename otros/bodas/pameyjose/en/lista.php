<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>

<!-- Basic Page Needs
  ================================================== -->
<meta charset="utf-8">
<title>Pamela &amp; Jose Pablo</title>
<meta name="description" content="">
<meta name="author" content="">

<!-- Mobile Specific Metas
  ================================================== -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- CSS
  ================================================== -->
<link rel="stylesheet" href="../stylesheets/base.css">
<link rel="stylesheet" href="../stylesheets/skeleton.css">
<link rel="stylesheet" href="../stylesheets/layout.css">
<link rel="stylesheet" href="../stylesheets/lista.css">

<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

<!-- Favicons
	================================================== -->
<link rel="shortcut icon" href="images/favicon.ico">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

<!-- Fonts -->
<link href='http://fonts.googleapis.com/css?family=Great+Vibes&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Libre+Baskerville' rel='stylesheet' type='text/css'>
</head>
<body>

<?php
	include ('../php/config.php');
	include ('../php/consultas.php');
?>
<!-- Primary Page Layout
	================================================== --> 

<!-- Delete everything in this .container and get started on your own site! -->
<div class="headercontainer">
  <div class="container">
    <div class="ten columns">
      <div class="logo"><a href="index.html"><img src="images/P-J_card.png"/></a></div>
    </div>
    <div class="six columns">
      <div class="info-lang"> <a href="/en"><img src="images/english.png"/><span>English</span></a> <a href="/"><img src="images/spanish.png"/><span>Spanish</span></a> </div>
      <div class="giftsHoneym"><span><a href="#"><img src="images/iconGift.jpg"/></a></span><span>Honeymoon</span></div>
    </div>
  </div>
</div>
<div class="menucontainer">
  <div class="container">
    <div class=" sixteen columns">
      <ul class="menu">
    <li><a href="index.html">Home</a></li>
        <li><a href="nuestro_viaje.html">Our Honeymoon</a></li>
        <li><a class="selected" href="lista.php">Gift List</a></li>
        <!--<li><a href="#">Fotos</a></li>-->
        <li><a href="contactos.html">Contact / Help</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="contentContainer">
  <div class="container">
    <div class="sixteen columns">
      <div class="listContainer">

        <?php
			$paises = getPaises(2);
			
			while($rowPaises = mysql_fetch_array($paises)) {
				$idPais = $rowPaises['idPais'];
				$nombrePais = $rowPaises['nombrePais'];
				echo '<h2>'.$nombrePais.'</h2>';
				
				$regalos = getRegalosByPais($idPais);
				
				while ($rowRegalos = mysql_fetch_array($regalos)) {
					$idRegalo = $rowRegalos['idRegalo'];
					$idCategoria = $rowRegalos['fk_idCategoria'];
					$nombreRegalo = $rowRegalos['nombreRegalo'];
					$precioRegalo = $rowRegalos['precioRegalo'];
					$estadoRegalo = $rowRegalos['estadoRegalo'];
					$claseCategoria = getClaseCategoria($idCategoria);
					$claseEstadoRegalo = getClaseEstadoRegalo($estadoRegalo);
					
					$stringListItem = '<div class="listItem '.$claseEstadoRegalo.'">'."\n".'<p>';
					$stringListItem .= '<span class="category ';
					$stringListItem .= $claseCategoria;
					$stringListItem .= '">';
					$stringListItem .= $nombreCategoria;
					$stringListItem .= '</span><span class="desc">';
					$stringListItem .= $nombreRegalo;
					$stringListItem .= '</span><span class="price">$';
					$stringListItem .= $precioRegalo;
					$stringListItem .= '</span><span class="button"><a id="'.$idRegalo.'" href="#">Gift</a></span></p>'."\n".'</div>'."\n";
					echo $stringListItem;
				}
			}		
		?>
		
		<div id="formularioWrapper">
			<div id="formularioInnerWrapper">
				<div class="close">X</div>
				<form id="formulario" name="formulario" action="../php/mail.php"method="POST">
					<div id="formularioInnerContainer">
						<div class="formularioColumnaIzquierda">
							Name:
						</div>
						<div class="formularioColumnaDerecha">
							<input type="text" name="name" required="true" />
						</div>
						<div class="clear"></div>
						<div class="formularioColumnaIzquierda">
							E-mail:
						</div>
						<div class="formularioColumnaDerecha">
							<input type="email" name="email" required="true" />
						</div>
						<div class="clear"></div>
						<p>
							Selected gift: <span id="regaloSeleccionado"></span><br />Please deposit <span id="montoADepositar"></span> to the following bank account.
							<br/><br />BANCO DE COSTA RICA<br />Account number #001-0465776-4, currency US dollars<br />Registered to Jos&eacute; Pablo Gonz&aacute;lez Espinoza<br />Identification number 1-1091-0509<br />
							SINPE 15202001046577646<br /><br />SWIFT code for international transfers: <b>BCRICRSJ</b><br />Address: Forum 1, Santa Ana, San José. Edificio E, 2do piso, AFC.
						</p>
						<p>
							Once the deposit has been confirmed, the bride and groom will receive a gift certificate and a confirmation message will be sent to your e-mail account.
							<br />
							<br />
							Please write a message for Pamela and Jos&eacute; Pablo
						</p>
						<textarea name="message" id="mensajeParaNovios" rows="6" ></textarea>
						
						<input type="hidden" name="idioma" value="eng">
						<input type="hidden" name="idRegalo">
						<input type="hidden" name="monto">
						<input type="hidden" name="descripcionRegalo">
						<input type="submit" value="Submit" />
						<div class="clear"></div>
					</div><!-- formularioInnerContainer -->
					<br />
					<br />
					<br />
				</form>
			</div><!-- fomrularioInnerWrapper -->
		</div><!-- #formularioWrapper -->

	<div id="sentWrapper">
		<div id="formularioInnerWrapper">
			<div class="close">X</div>
			THANK YOU VERY MUCH!
			<br />
			<br />
			You will receive an e-mail confirmation message.
		</div><!-- End forumlarioInnerWrapper -->
	</div><!-- End sentWrapper -->
	
     </div><!-- .listContainer -->
    </div>
  </div>
  <div class="roses"><img src="images/roses.png"/> <img src="images/roses2.png"/> </div>
</div>
<br>
<div class="footerContainer">
  <div class="container">
    <div class=" sixteen columns">
      <div class="footer"> <small>Copyright © 2013 All Rights Reserved</small> </div>
    </div>
  </div>
</div>
<!-- container --> 

<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>
	window.jQuery || document.write('<script src="../js/jquery-1.8.3.min.js"><\/script>')
</script>
<script type="text/javascript" src="../js/lista_de_regalos.js"></script>
<script type="text/javascript" src="../js/jquery.lightbox_me.js"></script>
<!-- End Document
================================================== -->
</body>
</html>