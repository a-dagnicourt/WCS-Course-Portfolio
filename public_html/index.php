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
          <button class="button borderRB t3" id="calculatorBtn">
            Calculator
          </button>
          <button class="button borderRB t3" id="priceIsRightBtn">
            The price is right
          </button>
        </div>
      </div>

      <!-- Simple Calculator -->
      <?php include('../ressources/workshops/simple-calc.php'); ?>

      <!-- The Price is Right -->
      <?php include('../ressources/workshops/price-right.php'); ?>

    <!-- Footer -->
    <?php include('../ressources/templates/_footer.php'); ?>

  </div>
  <script src="js/script.js"></script>
</body>

</html>