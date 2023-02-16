<?php

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

<body>
    <div class="contain d-flex flex-row">
        <div class="d-flex justify-content-center align-items-center bg-dark text-white flex-column vh-100 w-50">
            <i class="fas fa-brands fa-slack fa-10x"></i>
            <p class="lead text-white p-4 mt-4">Welcome to EDU please sign up.</p>
        </div>
        <div class="d-flex justify-content-center align-items-center mx-auto">
            <form action="./request.php" class="d-flex flex-column align-items-center justify-content-center" method="POST" id="register-form">
                <h2 class="">SIGN UP</h2>

                <div class="form-group">
                    <div class="input-group align-items-stretch">
                        <div class="form-field-group w-100">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Name" class="mw-100" data-fb-validate="1">
                        </div>
                    </div>
                    <div id="nameValid" class="valid-text"></div>
                </div>

                <div class="form-group">
                    <div class="input-group align-items-stretch">
                        <div class="form-field-group w-100">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email">
                        </div>
                    </div>
                    <div id="emailValid" class="valid-text"></div>
                </div>

                <div class="form-group">
                    <div class="input-group align-items-stretch">
                        <div class="form-field-group w-100">
                            <label for="password">Password</label>
                            <input minlength="8" maxlength="32" type="password" id="password" name="password" placeholder="Password">
                        </div>
                    </div>
                    <div id="passwordValid" class="valid-text"></div>
                </div>
                <div class="form-group">
                    <div class="input-group align-items-stretch">
                        <div class="form-field-group w-100">
                            <label for="phone-number">Phone Number</label>
                            <input type="tel" id="phone-number" placeholder="Phone No" name="phone-number">
                        </div>
                    </div>
                </div>
                <input type="submit" value="Submit" class="mt-4">
            </form>
        </div>
    </div>
    <script src="./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/js/bootstrap.bundle.js"></script>
    <script src="./plugins/fusion_validator/js/fusion.form.util.js"></script>
    <script src="./plugins/fusion_validator/js/fusion.form.validator.js"></script>

    <script>
    $el()
    </script>
</body>

</html>