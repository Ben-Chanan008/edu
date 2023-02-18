<?php
define('DB_NAME', 'edu');
define('DB_PASS', '.boss008');
define('DB_HOST', 'localhost');
define('DB_USER', 'bench');

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);