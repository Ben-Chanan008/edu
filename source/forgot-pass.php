<?php require './fpassVerify.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css">
	<link rel="stylesheet" href="./register.css">
	<link rel="stylesheet" href="./plugins/css/all.css">
</head>

<body id="fpass" class="" style="opacity: 0;">
	<div class="d-flex flex-column justify-content-center vw-100 vh-100 align-items-center first-verify">
		<form action="./fpassVerify.php" class="my-form d-flex flex-column justify-content-center vw-100 vh-100 align-items-center" method="POST" name="form">
			<h2 class="mb-4">Verify your account</h2>
			<input type="email" id="email" name="email" placeholder="Your email..."/>
			<input type="submit" name="submit" value="Next >">
			<div class="justify-content-center d-flex flex-column">
				<div class="d-flex flex-column align-items-center justify-content-center">
					<div class="d-flex">
						<p class="m-2 text-primary">OTP</p>
						<input type="radio" class="m-auto otp" name="radio" value="otp"/>
					</div>
					<div class="d-flex">
						<p class="m-2 text-primary">Email</p>
						<input type="radio" class="m-auto" name="radio" value="email"/>
					</div>
				</div>
			</div>
			<div class="emailVal"></div>
			<div id="emailVal"></div>
		</form>
	</div>
</body>
<script src="./plugins/js/main.js"></script>

</html>
