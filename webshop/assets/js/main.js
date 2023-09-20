document.write(`
<div class="index">
<div class="row-top">
    <div class="dropdown">
        <button class="button-top">Switch Dark/Light Mode<i class="bi bi-caret-down-fill"></i></button>
        <div class="dropdown-content">
            <a href="#">Dark</a>
            <a href="#">Light</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="button-top">Language<i class="bi bi-caret-down-fill"></i></button>
        <div class="dropdown-content">
            <a href="#">Nederlands</a>
            <a href="#">English</a>
            <a href="#">Meow Meow</a>
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
                <a href="/">
                <img class="logo" src="assets/logo/logo.png">
                </a>
            </picture>
            </div>
        <div class="sub-row">
    
    
            <div class="sub-text">
                <a href="/">Home</a>
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
    <div class="sub-bottom">
        <div class="center">
            <div class="pre-absolute" style="margin-left: 60%;">
                <form action="clothing.html" method="get">
                    <button class="absolute button-bottom">
                        Clothing
                    </button>
                </form>
                <a href="clothes.html">
                <img class="index-pic" src="assets/pics/clothes.webp" style="width:auto;">
                </a>
            </div>
            <div  class="pre-absolute">
                <form action="hardware.html" method="get">
                    <button class="absolute button-bottom">
                        Hardware
                    </button>
                </form>
                <a href="equipment.html">
                <img class="index-pic" src="assets/pics/equipment.webp" style="width:auto;">
                </a>
            </div>
            <div  class="pre-absolute"  style="margin-right: 60%;">
                <form action="checkout.html" method="get">
                    <button class="absolute button-bottom">
                        Cloud Services
                    </button>
                </form>
                <a href="cloud.html">
                <img class="index-pic" src="assets/pics/cloud.webp" style="width:auto;">
                </a>
            </div>
        </div>
    </div>
    </div>
`);