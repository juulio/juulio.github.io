<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Boda Jennifer y Alvaro - Lista de Regalos</title>
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="stylesheet" href="css/styles.css">
		<script type="text/javascript" src="js/libs/modernizr.custom.65420.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	</head>
	<body>
		<?php
			include ('php/config.php');
			include ('php/utils.php');
		?>
		<section>
			<header>
				<h1>Jennifer <span>&</span> &Aacute;lvaro</h1>
				<h2>NUESTRA BODA</h2>
			</header>
			<ul id="menu">
				<li><a href="index.html">Inicio</a></li>
				<li><a href="boda.html">La Boda</a></li>
				<li><a href="viaje.html">El Viaje</a></li>
				<li><a href="lista.php" class="active">Los Regalos</a></li>
				<li class="last"><a href="ayuda.html">Ayuda</a></li>
			</ul>
			
			<div id="content">
				<div class="foto fotoListaRegalos"></div>
				<div id="accordion">
					<?php
						$categorias = getCategorias();
						
						while($rowCategorias = mysql_fetch_array($categorias)) {
							$idCategoria = $rowCategorias['idCategoria'];
							$nombreCategoria = $rowCategorias['nombreCategoria'];
							echo '<h3>'.$nombreCategoria.'</h3>';
						
						
							$regalos = getRegalosByCategoria($idCategoria);
							
							$stringRegalos = '<div>';
							$stringRegalos .= '<table class="tablaListaRegalos">';

							while ($rowRegalos = mysql_fetch_array($regalos)) {
								$idRegalo = $rowRegalos['idRegalo'];
								$nombreRegalo = $rowRegalos['nombreRegalo'];
								$precioRegalo = $rowRegalos['precioRegalo'];
								$estadoRegalo = $rowRegalos['estadoRegalo'];

								$stringRegalos .= '<tr>';
								$stringRegalos .= '<td class="nombreRegalo">'.$nombreRegalo.'</td>';
								$stringRegalos .= '<td class="precioRegalo">'.$precioRegalo.'</td>';
								$stringRegalos .= '<td><span id="'.$idRegalo.'">REGALAR</span></td>';
								$stringRegalos .= '</tr>';
							}
							
							$stringRegalos .= '</table>';
							$stringRegalos .= '</div>';
							
							echo $stringRegalos;
						}
					?>
					
				</div><!-- #accordion -->
			</div><!-- #content -->
			<div id="formularioInnerWrapper" class="formularioDeRegalo formulario">
				<form id="formulario" name="formulario" action="php/mail.php" method="POST">
					<div id="formularioInnerContainer">
						<h3>Para Jennifer y &Aacute;lvaro</h3>
						<div class="formularioColumnaIzquierda">
							De:
						</div>
						<div class="formularioColumnaDerecha">
							<input type="text" name="name" required="true" />
						</div>
						<div class="clear"></div>
						
						<div class="formularioColumnaIzquierda">
							Correo electr&oacute;nico:
						</div>
						<div class="formularioColumnaDerecha">
							<input type="email" name="email" required="true" />
						</div>
						<div class="clear"></div>
						
						<div class="formularioColumnaIzquierda">
							<p>Escriba un mensaje a Jennifer y &Aacute;lvaro</p>
						</div>
						<div class="formularioColumnaDerecha">
							<textarea name="message" id="mensajeParaNovios" rows="6" ></textarea>
						</div>
						<div class="clear"></div>
						
						<div id="regaloSeleccionado"></div>
						
						<p>Por favor deposite el monto del obsequio de acuerdo con la siguiente informaci&oacute;n bancaria.</p>
						<p>BAC San Jos&eacute; Cuenta # 916441413<br />Cuenta cliente SINPE 10200009164414130<br />Jennifer Campos Ulate</p>
						<p>Una vez confirmado el dep&oacute;sito, recibir&aacute; un comprobante en su correo electr&oacute;nico.</p>
						
						<input type="hidden" name="idioma" value="esp">
						<input type="hidden" name="idRegalo">
						<input type="hidden" name="monto">
						<input type="hidden" name="descripcionRegalo">
						<div id="botonesContainer">
							<input type="submit" value="Enviar" class="botones enviar" />
							<span class="close botones">Cancelar</span>
						</div>
						<div class="clear"></div>
					</div><!-- formularioInnerContainer -->
				</form>
			</div><!-- fomrularioInnerWrapper -->
			<div id="sentWrapper" class="formulario">
				<div id="formularioInnerWrapper">
					&iexcl;MUCHAS GRACIAS!
					<br />
					<br />
					Recibir&aacute; una confirmaci&oacute;n
					<br />
					en su correo electr&oacute;nico.
					<br />
					<br />
					<span class="close botones">Cerrar</span>
				</div><!-- End forumlarioInnerWrapper -->
			</div><!-- End sentWrapper -->
		</section>
		<footer><a href="http://www.listadebodas.de" target="_blank">listadebodas.de</a></footer>
		
		<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script>
			window.jQuery || document.write('<script src="js/libs/jquery.min.js"><\/script>')
		</script>
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js"></script>
		<script src="js/libs/jquery.lightbox_me.js"></script>
		<script src="js/lista_de_regalos.js"></script>
	</body>
</html>