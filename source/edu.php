<?php
include 'session.php';
if (!$user)
	echo '<meta http-eqiuv="refresh" content="0; login.php/>';
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css">
	<link rel="stylesheet" href="edu.css">
	<link rel="stylesheet" href="./plugins/css/all.css">
</head>

<body id="choose">
	<div class="nav-b">
		<a href="edu.php">
			<div class="d-flex align-items-center p-1">
				<i class="fa-brands fa-slack fa-3x mx-1"></i>
				<span>EDU</span>
			</div>
		</a>
		<nav>
			<ul>
				<li><a href="#">Courses</a></li>
				<li><a href="#">Online</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</nav>
		<div class="last">
			<a href="./profile.php">
				<i class="fa-regular fa-user fa-2x"></i>
			</a>
		</div>
	</div>
	<section class="buy">
		<h1>Learn Anything.</h1>
		<p class="lead fs-1 text-center">Choose a course</p>
		<nav>
			<ul class="course-list">
				<li>Web Development</li>
				<li>Home Management</li>
				<li>Physics</li>
				<li>AI DEvelopment</li>
				<li>Economics</li>
				<li>Physics</li>
				<li>Business Management</li>
				<li>First Aid</li>
				<li>Mathematics</li>
				<li>Religion</li>
				<li>Agricultural Development with Tech</li>
				<li>Computer Engineering</li>
				<li>Graphics Design</li>
				<li>Social Media Handling</li>
				<li>Video Editing</li>
			</ul>
		</nav>
	</section>
</body>

</html>
