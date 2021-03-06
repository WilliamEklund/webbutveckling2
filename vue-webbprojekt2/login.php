<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width initial-scale=1.0">
  <title></title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://unpkg.com/vue@3"></script>
  <script defer src="./app.js"> </script>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <header v-show="showHeader">
      <div class="header-logo">
        <a href="./ikea.html">
          <img class="header-img" src="./bilder/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg" alt="ikea logo" />
        </a>
      </div>

      <div class="header-navlinks">
        <ul>
          <li><a class="anchor" href="#">Nytt i sortimentet</a></li>
          <li><a class="anchor" href="#">Produkter</a></li>
          <li><a class="anchor" href="#">Rum</a></li>
        </ul>
      </div>

      <div class="search-input">
        <a href="#"></a>
        <input type="text" placeholder="Vad letar du efter?" />
      </div>
      <div class="login-links">
        <li><a class="anchor" href="#">Logga in</a></li>
        <li><a class="anchor" href="#">Registrera dig</a></li>
      </div>
      <!-- cart icon -->
      <div class="shopping-cart" :class="{bounce: isBouncing}" @click="isHidden = !isHidden">
        <!-- hide -->
        <i class="bi bi-cart"></i>
        <span class="cart-amount" v-text="cartAmount">{{cartAmount}}</span>
        <!-- show -->
      </div>
    </header>
    <h1>Logga in</h1>
    <form action="" method="post">
      <label for="">Epost</label>
      <input type="email">
      <label for="">Lösenord</label>
      <input type="password">
    </form>
    <p>Har du inte ett konto? <a href="./register.html">Klicka här</a></p>
  </div>
</body>

</html>