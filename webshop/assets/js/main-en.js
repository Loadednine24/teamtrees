document.write(`
<div class="index" id="index">
<div class="row-top">
    <div class="dropdown">
        <button class="button-top">Switch Dark/Light Mode<i class="bi bi-caret-down-fill"></i></button>
        <div class="dropdown-content">
            <input class="switch" type="checkbox" id="switch" name="theme"/><label for="switch"></label>
        </div>
    </div>
    <div class="dropdown">
        <button class="button-top">Language<i class="bi bi-caret-down-fill"></i></button>
        <div class="dropdown-content">
            <a href="../nl/index">Nederlands</a>
            <a href="../en/index">English</a>
            <a href="../meow/index">Meow Meow</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="button-top">login<i class="bi bi-caret-down-fill"></i></button>
        <div class="dropdown-content">
            <a href="#">Login To Existing Account</a>
            <a href="#">Create New Account</a>
        </div>
    </div>
</div>
    <div class="sub-top">
            <div style="position: absolute;">
            <picture>
                <a href="index">
                <img class="logo" src="../assets/logo/logo.png">
                </a>
            </picture>
            </div>
        <div class="sub-row">
            <div style="margin-left: 150px;" class="sub-text">
                <a href="index">Home</a>
            </div>
            <div class="sub-text">
                <a href="sale">Sale</a>
            </div>
            <div class="sub-text">
                <a href="pages">Pages</a>
            </div>
            <div class="sub-text">
                <a href="contact">Contact</a>
            </div>
            <div class="sub-icon">
                <a href="index"><i class="bi bi-search"></i>
            </div>
            <div class="sub-icon">
                <a href="user"><i class="bi bi-person-circle"></i>
            </div>
            <div class="sub-icon">
                <a href="checkout"><i class="bi bi-cart"></i></a>
            </div>
        </div>
    </div>
    </div>
    </div>
`);