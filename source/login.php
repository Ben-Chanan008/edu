<?php
include './session.php';
// $emailErr = $passErr = ''; 
$hasErr = true;
$data = [];
if ($user)
    header('Location: ./edu.php');
if (!empty($_POST)) {
    // http_response_code(200);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    if (empty($email) && empty($password)) {
        $data['message'] = 'Please fill in fields';
        http_response_code(422);
    } else {
        // http_response_code(200);
        // $data['message'] = 'Login successful <br> Please Wait...';
        $query = $conn->query("SELECT * FROM user_info WHERE email = '$email'");
        $user = $query->fetch_object();

        if ($query->num_rows && password_verify($password, $user->password)) {
            $_SESSION['edu'] = $user->id;
            $data['message'] = 'Login Successful Please wait...';
            $data['redirect'] = './edu.php';
            http_response_code(200);
        } else {
            http_response_code(400);
            $data['message'] = 'Invalid Credentials';
        }
    }
    echo json_encode($data);
    exit();
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css'>
    <link rel="stylesheet" href="register.css">
    <link rel="stylesheet" href="./plugins/css/all.css">
</head>

<body id="login">
    <div class="d-flex justify-content-center align-items-center vh-100 mx-auto">
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="d-flex flex-column align-items-center justify-content-center" method="POST" name="form">
            <h2 class="lead fs-1">Login</h2>
            <input type="email" id="email" name="email" placeholder="Email">
            <div class="emailErr"></div>
            <div class="position-relative">
                <input minlength="8" maxlength="32" type="password" name="password" id="password" name="password" placeholder="Password">
                <i class="fas fa-eye position-absolute end-0 bottom-0 my-3"></i>
            </div>
            <div class="passErr"></div>
            <input type="submit" value="Submit" name="submit" class="mt-4">
            <div class="d-flex">
            </div>
            <div class="sign-up">
                <p class="text-primary f-pass" role="button">Forgot password?</p>
                <p>Already have an account</p>
                <a href="./register.php"><span style="color: #ff7f50; text-decoration: underline;">Sign up</span></a>
            </div>
            <div class="message"></div>
        </form>
    </div>
    <script src='./plugins/js/main.js'></script>
</body>

</html>