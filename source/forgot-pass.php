<?php
$data = [];
include './session.php';
// print_r($_POST);
if (!empty(($_POST))) {
    if (!empty($_POST['email'])) {
        http_response_code(200);
        $data['message'] = 'not empty';
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
</head>

<body id="fpass">
    <div class="d-flex flex-column justify-content-center vw-100 vh-100 align-items-center">
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="my-form d-flex flex-column justify-content-center vw-100 vh-100 align-items-center" method="POST" name="form">
            <input type="email" name="email" placeholder="Your email..." />
            <input type="submit" name="submit" value="Next >">
            <div class="emailVal"></div>
        </form>
    </div>
</body>
<script src="./plugins/js/main.js"></script>

</html>