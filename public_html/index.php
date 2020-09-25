<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Calculator</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
</head>

<body>
  <div class="mainContainer">
    <!-- Header -->
    <?php include('../ressources/templates/_header.php'); ?>

    <!-- Main -->

    <main class="bg0a">
      <div class="selectPanel">
        <div class="choiceBox t2">Choose your feature :</div>
        <div class="buttonBox">
          <button class="button borderRB" id="calculatorBtn">
            Calculator
          </button>
          <button class="button borderRB" id="priceIsRightBtn">
            The price is right
          </button>
        </div>
      </div>

      <!-- Simple Calculator -->

      <article class="hidden bg33" id="calculator">
        <h1 class="t2">Simple Calculator</h1>
        <div class="formContainer">
          <form id="calcForm">
            <div class="formBox">
              <label for="num1" class="t3">Chiffre 1</label>
              <input class="borderRB" type="text" name="num1" id="num1" />
            </div>
            <div class="formBox">
              <label for="operator" class="t3">Opérateur</label>
              <select class="borderRB" name="operator" id="operator">
                <option value="plus">+</option>
                <option value="minus">-</option>
                <option value="division">/</option>
                <option value="multiplication">*</option>
                <option value="modulo">%</option>
              </select>
            </div>
            <div class="formBox">
              <label for="num2" class="t3">Chiffre 2</label>
              <input class="borderRB" type="text" name="num2" id="num2" />
            </div>
            <div class="formBox">
              <button class="btn btn-primary submitBtn borderRB" id="calcSubmit">
                Calculer
              </button>
            </div>
            <div class="formBox borderRB resultDisplay" id="resultDisplay"></div>
          </form>
        </div>
      </article>

      <!-- The Price is Right -->

      <article class="hidden bg66" id="priceRight">
        <h1 class="t2">The Price is Right</h1>
        <div class="formContainer">
          <form id="priceForm">
            <div class="formBox">
              <label for="nameEntry" class="t3">Votre nom</label>
              <input class="borderRB" type="text" name="nameEntry" id="nameEntry" />
            </div>
            <div class="formBox">
              <label for="priceEntry" class="t3">Votre prix</label>
              <input class="borderRB" type="number" name="priceEntry" id="priceEntry" />
            </div>
            <div class="formBox">
              <button class="btn btn-primary submitBtn borderRB" id="priceSubmit">
                Essayer
              </button>
            </div>
            <div class="formBox borderRB resultDisplay" id="priceDisplay"></div>
          </form>
        </div>
      </article>
    </main>

    <!-- Footer -->
    <?php include('../ressources/templates/_footer.php'); ?>

  </div>
  <script src="js/script.js"></script>
</body>

</html>