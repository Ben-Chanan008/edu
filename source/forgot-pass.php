<?php
$data = [];
include './session.php';
// print_r($_POST);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
if (!empty(($_POST))) {
    if (!empty($_POST['email'])) {
        $q = $conn->query("SELECT * FROM user_info WHERE email = '$email'");
        if ($q->num_rows) {
            http_response_code(200);
            $data['redirect'] = './next-verify.php';
        } else {
            http_response_code(422);
            $data['error'] = 'Not a valid email';
        }
        $data['message'] = 'Processing <i class="fa fa-spin fa-spinner-third"></i>';
    } else {
        if (empty($_POST['email'])) {
            http_response_code(422);
            $data['error'] = 'Please put in a mail';
        }
    }
    echo json_encode($data);
    exit();
}
?>

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
    <div class="d-flex flex-column justify-content-center vw-100 vh-100 align-items-center">
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="my-form d-flex flex-column justify-content-center vw-100 vh-100 align-items-center" method="POST" name="form">
            <h2 class="mb-4">Verify your account</h2>
            <input type="email" name="email" placeholder="Your email..." />
            <input type="submit" name="submit" value="Next >">
            <div class="justify-content-center d-flex flex-column">
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <div class="d-flex">
                        <p class="m-2 text-primary">OTP</p>
                        <input type="radio" class="m-auto" name="radio" />
                    </div>
                    <div class="d-flex">
                        <p class="m-2 text-primary">Email</p>
                        <input type="radio" class="m-auto" name="radio" />
                    </div>
                </div>
            </div>
            <div class="emailVal"></div>
        </form>
    </div>
</body>
<script src="./plugins/js/main.js"></script>

</html>