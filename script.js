window.addEventListener("load", function () {
  // elements
  const inputCardholderName = document.getElementById("input-cardholder-name");
  const inputCardNumber = document.getElementById("input-card-number");
  const inputMonth = document.getElementById("input-month");
  const inputYear = document.getElementById("input-year");
  const inputCVC = document.getElementById("input-cvc");

  const buttonConfirm = document.getElementById("btn-confirm");
  const buttonContinue = document.getElementById("btn-continue");

  const cardNumber = document.getElementById("card-number");
  const cardName = document.getElementById("card-name");
  const cardDate = document.getElementById("card-date");
  const cardCVC = document.getElementById("card-cvc");

  // error messages
  const errorBlankName = document.getElementById("error-blank-name");
  const errorBlankNumber = document.getElementById("error-blank-number");
  const errorWrongNumber = document.getElementById("error-wrong-number");
  const errorBlankDate = document.getElementById("error-blank-date");
  const errorBlankCVC = document.getElementById("error-blank-cvc");
  const errorWrongCVC = document.getElementById("error-wrong-cvc");

  inputCardholderName.addEventListener("change", (e) => {});

  inputCardNumber.addEventListener("change", (e) => {});

  inputMonth.addEventListener("change", (e) => {});

  inputYear.addEventListener("change", (e) => {});

  inputCVC.addEventListener("change", (e) => {});

  buttonConfirm.addEventListener("click", (e) => {});

  buttonContinue.addEventListener("click", (e) => {});

  function setDisplayToElement(elementDOM, typeOfDisplay) {
    elementDOM.style.display = typeOfDisplay;
  }

  function validationCardholderName() {
    inputCardholderName.removeAttribute("invalid");
    setDisplayToElement(errorBlankName, "none");
  }

  // checking - valid fields

  function validValueFromCardNumber(value) {
    return value.length > 0 && value.length <= 9;
  }

  function validValueFromMonth(value) {
    return value > 0 && value <= 31;
  }

  function validValueFromYear(value) {
    return value.length === 2;
  }

  function validValueFromCVC(value) {
    return value.length === 3;
  }


  // checking - empty fields

  function isCardholerNameNotEmpty() {
    if (!inputCardholderName.value) {
        setDisplayToElement(errorBlankName, "block");
        return false;
      } else {
        setDisplayToElement(errorBlankName, "none");
        return true;
      }
  }

  function isCardNumberNotEmpty() {
    if (!inputCardNumber.value) {
        setDisplayToElement(errorBlankNumber, "block");
        return false;
      } else {
        setDisplayToElement(errorBlankNumber, "none");
        return true;
      }
  }

  function isMonthNotEmpty() {
    if (!inputMonth.value) {
        setDisplayToElement(errorBlankDate, "block");
        return false;
      } else {
        setDisplayToElement(errorBlankDate, "none");
        return true;
      }
  }

  function isCVCNotEmpty() {
    if (!inputCVC.value) {
        setDisplayToElement(errorBlankCVC, "block");
        return false;
      } else {
        setDisplayToElement(errorBlankCVC, "none");
        return true;
      }
  }



});
