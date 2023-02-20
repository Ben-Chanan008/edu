<?php
// if (!empty($_POST)) {
//     echo json_encode($_REQUEST);
//     exit();
// }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css">
    <link rel="stylesheet" href="register.css">
    <link rel="stylesheet" href="./plugins/fusion_validator/css/fusion.form.validator.css">
    <link rel="stylesheet" href="./plugins/css/all.css">
    <title>Register</title>
</head>

<body id="register-page">
    <div class="contain d-flex flex-row">
        <div class="d-flex justify-content-center align-items-center bg-dark text-white flex-column vh-100 w-50">
            <i class="fas fa-brands fa-slack fa-10x"></i>
            <p class="lead text-white p-4 mt-4">Welcome to EDU please sign up.</p>
        </div>
        <div class="d-flex justify-content-center align-items-center mx-auto">
            <form action="./http/request.php" class="d-flex flex-column align-items-center justify-content-center" method="POST" id="register-form">
                <h2 class="">SIGN UP</h2>
                <input type="text" id="name" name="name" placeholder="Username" class="mw-100">
                <div id="nameValid" class="valid-text"></div>
                <input type="email" id="email" name="email" placeholder="Email">
                <div id="emailValid" class="valid-text"></div>
                <div class="position-relative">
                    <input class="position-relative" minlength="8" maxlength="32" type="password" name="password" id="password" name="password" placeholder="Password">
                    <i class="fa-solid fa-eye position-absolute end-0 bottom-0 my-3"></i>
                </div>
                <div id="passwordValid" class="valid-text"></div>
                <label for="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" placeholder="Phone No" name="phone_number">
                <div id="phoneValid" class="valid-text"></div>
                <input type="submit" value="Submit" class="mt-4">
                <div class="login">
                    <p>Already have an account</p>
                    <a href="./login.php"><span style="color: #ff7f50; text-decoration: underline;">Login</span></a>
                </div>
                <div class="message"></div>
        </div>
        </form>
    </div>
    <script src="./plugins/js/main.js"></script>
    <script src="./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/js/bootstrap.bundle.js"></script>
    <script src="./plugins/fusion_validator/js/fusion.form.util.js"></script>
    <script src="./plugins/fusion_validator/js/fusion.form.validator.js"></script>
</body>

</html>