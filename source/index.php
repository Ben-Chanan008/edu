<?php
include './session.php';
$message = NULL;
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
if (isset($_POST['submit'])) {
    if (!empty($_POST['email'])) {
        // $conn->query("SELECT * FROM user_info LEFT JOIN news_subscribers ON news_subscribers.user_id=user_info.id");
        $conn->query("INSERT INTO news_subscribers(email) VALUES($email)");
    } else {
        $message = '<span class="bg-red">Fill input please</span>';
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>School Platform</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <link rel="stylesheet" type="text/css" href="./plugins/css/all.css">
</head>

<body id="index-page">
    <div class="spinner">
        <div>
            <i class="fa fa-spin fa-spinner-third fa-5x"></i>
        </div>
    </div>
    <nav class="first-nav">
        <div class="socials">
            <span>schoolplatformedu@gmail.com</span>
            <span>08023408691</span>
            <span>09063305880</span>
        </div>
        <div>
            <span>Techskol</span>
            <button class="btn">APPLY NOW</button>
        </div>
    </nav>
    <section class="section">
        <nav class="second-nav">
            <div class="whole">
                <i class="fa-brands fa-slack fa-3x"></i>
                <!-- <img src="./OIP.jfif" alt="logo"> -->
                <div class="text">
                    <span class="twice">SCHOOL PLATFORM</span><br />
                    <span>The greatest education center</span>
                </div>
            </div>
            <ul>
                <li><a href="./index.php">HOME</a></li>
                <li><a class="drop">ABOUT<i class="fa-regular fa-plus"></i></a></li>
                <li>EXPLORE</li>
                <li>FAQ</li>
                <li>ATTRIBUTES<i class="fa-regular fa-plus"></i></li>
                <li>CONTACT</li>
            </ul>
            <div>
                <button type="menu" class="menu"><i class="fas fa-grip-lines fa-2x"></i></button>
            </div>
        </nav>
        <div class="inner-text">
            <div>
                <p>Experiencing Management</p>
                <span>Our Family</span><br />
                <button class="book">Book a session</button>
            </div>
            <div class="images">
                <div class="icons">
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="image-container">
                    <img name="slider" src="" alt="img">
                </div>
                <div></div>
            </div>
        </div>
    </section>
    <section class="grid">
        <div class="display-flex"><i class="fad fa-book-blank fa-2x mb-10"></i>Academics</div>
        <div class="display-flex"><i class="fa-solid fa-user-graduate fa-2x mb-10"></i>Graduation</div>
        <div class="display-flex"><i class="fas fa-users-class fa-2x mb-10"></i>Learning</div>
        <div class="display-flex"><i class="fas fa-user-gear mb-10 fa-2x"></i>Trade</div>
    </section>
    <section class="section-three">
        <div class="span-two">
            <p style="color: #fff; font-weight: bold;" class="p">ABOUT EDU</p>
            <p class="fs-1">Welcome to EDU School Platform</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, id fugit praesentifffum ea dolor magnam iure veniam enim, perferendis delectus aliquam autem, ipsum nulla esse tempora excepturi consequuntur inventore ipsa. Expedita quia explicabo similique ut
            dignissimos consectetur nam illo ipsam.
            <button class="btn btn-primary">Read More</button>
        </div>
        <div class="stats">
            <div>2K+<br />Students</div>
            <div>95%<br />Success Rate</div>
            <div>20%<br />Teaching Errors</div>
        </div>
        <div style='background: url("head.jpg") no-repeat; padding: 90px'>n
        </div>
        <div style='background: url("head.jpg") no-repeat; padding: 90px;'></div>
    </section>
    <section class="section-four">
        <div class="s-grid">
            <div>
                <span class="grid-span">OUR TEACHING</span>
                <p>Successfully Gain Knowledge and Skills To Help You Out In Future at EDU</p>
            </div>
            <div>
                <p>Nursing</p>
            </div>
            <div>
                <p>Software Engineering</p>
            </div>
            <div>
                <p>Catering</p>
            </div>
            <div>
                <p>Physics in Tech</p>
            </div>
            <div>
                <p>Home Management</p>
            </div>
        </div>
    </section>
    <section class="section-five">
        <div style="background-image: url('./cafer.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover;">
            <div class="overlays">
                <h2>Register Now for 2023</h2>
                <p>Education is the gateway to a fufillment to a world of dreams,<br /> You can learn online and get certificated; Here at EDU</p>
                <button class="btn btn-primary rounded-1">Apply Now</button>
            </div>
        </div>
        <div class="div-1" style="background-image: url('./cafer.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover;">
            <div class="div-2">
                <span>PRACTICAL LEARNING</span>
                <h2>HERE WE TEACH TO EQUIP YOU FOR THE OUTSIDE WORLD</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos ex doloremque omnis vitae soluta dicta mollitia quia aliquam ullam assumenda ut dolorem delectus voluptatibus aperiam ipsa sed enim, ipsum vel tempore, aspernatur iusto. Libero quaerat neque
                    illum harum amet!</p>
                <button class="btn rounded-1 mb-10">LEARN MORE</button>
            </div>
        </div>
    </section>
    <section class="reviews">
        <h2>What the Graduants are saying</h2>
        <span>Parent's Review</span>
    </section>
    <footer>
        <div class="news">
            <div>
                <span>NEWSLETTER</span>
                <p>Subscribe to join The EDU Community</p>
            </div>
            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
                <div class="input">
                    <input type="email" name="email">
                    <?php if ($message) : ?>
                    <div><?php echo $message; ?></div>
                    <?php endif; ?>
                    <input type="submit" value="Submit" name="submit">
                </div>
            </form>
        </div>
        <div class="links">
            <div class="w-25">
                <a href="#">ABOUT</a>
                <p>We EDU is a platform for schooling were you as a student can come and learn all that you can learn but here's the catch online!!! So rush now and buy your courses from various verified vendors. You will earn a certificate at the end of a certain
                    course. The
                    best part is that you can actually learn anything at all. Don't waste time learning at a fast pace just learn it at your own pace online. <button class="book">Read More</button></p>
            </div>
            <div>
                <div class="d-flex">
                    <a href="#">USEFUL LINK</a>
                </div>
                <ul class="links-child align-items-center">
                    <li>HOME<i class="text-center fa-regular fa-plus"></i></li>
                    <li>ABOUT<i class="text-center fa-regular fa-plus"></i></li>
                    <li>EXPLORE<i class="text-center fa-regular fa-plus"></i></li>
                    <li>FAQ<i class="text-center fa-regular fa-plus"></i></li>
                    <li>ATTRIBUTES<i class="text-center fa-regular fa-plus"></i></li>
                    <li>CONTACT<i class="text-center fa-regular fa-plus"></i></li>
                </ul>
            </div>
            <div>
                <a href="#">LATEST</a>
                <div>
                    <p>The best platform for learning today! </p>
                    <button class="book">Read More</button>
                </div>
            </div>
            <div class="flex-column jusify-content-center align-items-center logo">
                <i class="fa fa-brands fa-slack fa-10x"></i>
                <p>EDU</p>
            </div>
        </div>
    </footer>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
    <script src="./plugins/js/main.js"></script>
</body>

</html>