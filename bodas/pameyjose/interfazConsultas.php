<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Pamela y Jose - Interfaz de Consultas</title>
		<link rel="stylesheet" media="screen" type="text/css" href="stylesheets/styles.css" />
	</head>

	<body>
		<?php
			include ('php/config.php');
			include ('php/consultas.php');
	
			//print_r($_POST);

			$selfUrl = $_SERVER['PHP_SELF'];
			
			if(isset($_POST['rehabilitar'])){
				$idRegaloModificar = $_POST['idRegalo'];
				modificarEstadoRegalo($idRegaloModificar, 0);
			}
	
			if(isset($_POST['confirmar'])) {
				$idRegaloModificar = $_POST['idRegalo'];
				modificarEstadoRegalo($idRegaloModificar, 2);
			}
			
		?>
		
		<div id="wrapper">

			<h1>REGALOS RESERVADOS</h1>

			<table border="1" id="tableInterfazConsultas">

				<tr class="tableHeaders">
					<th>DESCRIPCI&Oacute;N REGALO</th>
					<th>PRECIO</th>
					<th>FECHA</th>
					<th>RE-HABILITAR</th>
					<th>CONFIRMAR DEP&Oacute;SITO)</th>
				</tr>
				
				<?php
					$regalosReservados = getRegalosParaConsulta(1);

					while ($rowRegalosReservados = mysql_fetch_array($regalosReservados)) {
						$idRegalo = $rowRegalosReservados['idRegalo'];
						$nombreRegalo = $rowRegalosReservados['nombreRegalo'];
						$precioRegalo = $rowRegalosReservados['precioRegalo'];
						$estadoRegalo = getEstadoRegalo($rowRegalosReservados['estadoRegalo']);
						$fecha = $rowRegalosReservados['fechaReservacion'];
						
						echo '<tr>';
						echo '<td><form method="post" action="'.$selfUrl.'">'.$nombreRegalo.'</td>';
						echo '<td>'.$precioRegalo.'</td>';
						echo '<td>'.$fecha.'</td>';
						echo '<input type="hidden" name="idRegalo" value="'.$idRegalo.'">';
						echo '<td><input type="submit" name="rehabilitar" value="rehabilitar"></td>';
						echo '<td><input type="submit" name="confirmar" value="confirmar"></form></td>';
						echo '</tr>';
					}
					
				?>

			</table>
			
			<h1>REGALOS CON DEP&Oacute;SITO CONFIRMADO</h1>

			<table border="1" id="tableInterfazConsultas">

				<tr class="tableHeaders">
					<th>DESCRIPCI&Oacute;N REGALO</th>
					<th>PRECIO</th>
				</tr>
				
				<?php
					$regalosConfirmados = getRegalosParaConsulta(2);

					while ($rowRegalosConfirmados = mysql_fetch_array($regalosConfirmados)) {
						$idRegalo = $rowRegalosReservados['idRegalo'];
						$nombreRegalo = $rowRegalosConfirmados['nombreRegalo'];
						$precioRegalo = $rowRegalosConfirmados['precioRegalo'];
				
						echo '<tr>';
						echo '<td>'.$nombreRegalo.'</td>';
						echo '<td>'.$precioRegalo.'</td>';
						echo '</tr>';
					}
					
				?>

			</table>
		</div><!-- wrapper -->
		<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script>
			window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')
		</script>
	</body>
</html>

