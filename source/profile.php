<?php
include './session.php';
if (!$user)
    header('Location: ./relocate.php');
$about = filter_input(INPUT_POST, 'about', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
if (isset($_POST['save'])) {
    // print_r($user);
    // exit();

    // $q = $conn->query("SELECT * FROM user_about_info WHERE user_id = '$user->id'");
    if ($user_about_count !== 0)
        $conn->query("UPDATE user_about_info SET about = '$about' WHERE user_id = '$user->id'");
    else
        $conn->query("INSERT INTO user_about_info(about, user_id) VALUES('$about', '$user->id')");
    echo '<b style="color:#000;">submited</b>';
    print_r($_POST);
    exit();
}
if (!empty($_GET) && isset($_GET['u'])) {
    $other_user_id = $_GET['u'];
    $q = $conn->query("SELECT * FROM user_info WHERE id = '$other_user_id'");

    if ($q->num_rows) {
        $user = $q->fetch_object();
        $q = $conn->query("SELECT * FROM user_about_info WHERE user_id = '$user->id'");
        $user_about_count = $q->num_rows;
        if ($user_about_count)
            $user_about = $q->fetch_object();
    }
}
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
                        <div class="textarea">
                            <form action="#" method="POST" class="d-flex flex-column mb-2">
                                <input type="text" class="p-4 w-75 mb-3" name="about" />
                                <input type="submit" class="bg-dark w-75 text-white save p-2 rounded" value="Save" name="save">
                            </form>
                        </div>
                    </div>
                    <?php if ($user_id === $other_user_id) : ?>
                    <div class="btn-btn">
                        <button class="rounded-3 m-1 p-2 w-75 edit"><i class="fa-solid fa-pen mx-2"></i>Edit Profile</button>
                    </div>
                    <?php endif; ?>
                    <div class="d-flex flex-row w-100 operation-buttons"></div>
                    <div>
                        <i class="fa-light my-3 fa-user-group"></i>
                        <span><small class="mx-1">0</small>followers</span>
                        <i class="fa-light fa-user-group mx-2"></i>
                        <span><small class="mx-1">0</small>following</span>
                    </div>
                </div>
            </div>
            <div class="w-100 ">
                <?= $user_about_count ? $user_about->about : NULL ?>
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