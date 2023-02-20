<?php
include './db/database.php';
session_start();

$user = NULL;
$user_id = NULL;

if (isset($_SESSION['edu'])) {
    $user_id = $_SESSION['edu'];

    $q = $conn->query("SELECT * FROM user_info WHERE id = '$user_id'");

    if ($q->num_rows)
        $user = $q->fetch_object();
}