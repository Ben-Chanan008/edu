<?php
include './db/database.php';
session_start();

$user = NULL;
$user_about = NULL;
$user_about_count = 0;
$user_id = NULL;
$other_user_id = NULL;

if (isset($_SESSION['edu'])) {
    $user_id = $_SESSION['edu'];

    $q = $conn->query("SELECT * FROM user_info WHERE id = '$user_id'");

    if ($q->num_rows) {
        $user = $q->fetch_object();
        $other_user_id = $user_id;
        $q = $conn->query("SELECT * FROM user_about_info WHERE user_id = '$user->id'");
        $user_about_count = $q->num_rows;
        if ($user_about_count)
            $user_about = $q->fetch_object();
    }
}