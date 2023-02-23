<?php
include './session.php';
if (!$user)
    header('Location: ./relocate.php');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="./plugins/BOOSTRAP V5.30/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css">
    <link rel="stylesheet" href="./profile.css">
    <link rel="stylesheet" href="./plugins/css/all.css">
</head>

<body id="profile" class="bg-dark">
    <main class="bg-dark text-white text-align-left">
        <div class="d-flex flex-row m-4">
            <div class="w-50">
                <i class="fa-solid user fa-10x fa-user rounded-circle bg-white text-dark p-4"></i>
                <div>
                    <span class="fs-2"><?= $user->user_name; ?></span>
                    <div>
                        <div class="textarea"></div>
                    </div>
                    <button class="rounded-3 m-1 p-2 w-75 edit"><i class="fa-solid fa-pen mx-2"></i>Edit Profile</button>
                    <div>
                        <i class="fa-light my-3 fa-user-group"></i>
                        <span><small class="mx-1">0</small>followers</span>
                        <i class="fa-light fa-user-group mx-2"></i>
                        <span><small class="mx-1">0</small>following</span>
                    </div>
                </div>
            </div>
            <div class="w-100 ">
                <?= $user->about ?>
            </div>
        </div>
    </main>
    <!-- <footer>
        <div>
            <a>
        </div>
    </footer> -->
    <script src="./plugins/js/main.js"></script>
</body>

</html>