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
  const cardMonth = document.getElementById("card-month");
  const cardYear = document.getElementById("card-year");
  const cardCVC = document.getElementById("card-cvc");

  const cardForm = document.getElementById("card-form");
  const cardConfirmation = document.getElementById("card-confirmation");

  // error messages
  const errorBlankName = document.getElementById("error-blank-name");
  const errorBlankNumber = document.getElementById("error-blank-number");
  const errorWrongNumber = document.getElementById("error-wrong-number");
  const errorBlankDate = document.getElementById("error-blank-date");
  const errorWrongDate = document.getElementById("error-wrong-date");
  const errorBlankCVC = document.getElementById("error-blank-cvc");
  const errorWrongCVC = document.getElementById("error-wrong-cvc");

  inputCardholderName.addEventListener("keyup", (e) => {
    cardName.textContent = inputCardholderName.value;
  });

  inputCardNumber.addEventListener("keyup", (e) => {
    cardNumber.textContent = inputCardNumber.value;
  });

  inputMonth.addEventListener("keyup", (e) => {
    cardMonth.textContent = inputMonth.value;
  });

  inputYear.addEventListener("keyup", (e) => {
    cardYear.textContent = inputYear.value;
  });

  inputCVC.addEventListener("keyup", (e) => {
    cardCVC.textContent = inputCVC.value;
  });

  buttonConfirm.addEventListener("click", (e) => {
    validationCardholderName();
    validationCardNumber();
    validationDate();
    validationCVC();

    if (validationCardholderName() && validationCardNumber() && validationDate() && validationCVC()) {
      setDisplayToElement(cardForm, "none");
      setDisplayToElement(cardConfirmation, "flex");
    }
  });

  buttonContinue.addEventListener("click", (e) => {});

  function setDisplayToElement(elementDOM, typeOfDisplay) {
    elementDOM.style.display = typeOfDisplay;
  }

  function validationCardholderName() {
    inputCardholderName.removeAttribute("invalid");
    setDisplayToElement(errorBlankName, "none");
    if (isCardholerNameNotEmpty()) {
      return true;
    } else {
      return false;
    }
  }

  function validationCardNumber() {
    inputCardNumber.removeAttribute("invalid");
    setDisplayToElement(errorBlankNumber, "none");
    setDisplayToElement(errorWrongNumber, "none");
    if (isCardNumberNotEmpty()) {
      const isValid = checkLengthCardNumber(inputCardNumber.value);
      if (isValid) {
        inputCardNumber.removeAttribute("invalid");
        setDisplayToElement(errorWrongNumber, "none");
        return true;
      } else {
        inputCardNumber.removeAttribute("invalid", !isValid);
        setDisplayToElement(errorWrongNumber, "block");
        return false;
      }
    }
  }

  // ta funkcja mi nie działa! 

  function validationDate() {
    inputMonth.removeAttribute("invalid");
    inputYear.removeAttribute("invalid");
    setDisplayToElement(errorBlankDate, "none");
    setDisplayToElement(errorWrongDate, "none");
    if(isMonthNotEmpty() && isYearNotEmpty()) {
      const isValidMonth = validValueFromMonth(inputMonth.value);
      const isValidMonthLength = checkLengthMonth(inputMonth.value);
      const isValidYearLength = checkLengthYear(inputYear.value);
      if (isValidMonth && isValidMonthLength && isValidYearLength) {
        inputMonth.removeAttribute("invalid");
        inputYear.removeAttribute("invalid");
        setDisplayToElement(errorWrongDate, "none");
        return true;
      } else {
        inputMonth.removeAttribute("invalid", !isValid);
        inputYear.removeAttribute("invalid", !isValid);
        setDisplayToElement(errorWrongDate, "block");
        return false; 
      }
    }
  }

  function validationCVC() {
    inputCVC.removeAttribute("invalid");
    setDisplayToElement(errorBlankCVC, "none");
    setDisplayToElement(errorWrongCVC, "none");
    if (isCVCNotEmpty()) {
      const isValid = checkLengthCVC(inputCVC.value);
      if (isValid) {
        inputCVC.removeAttribute("invalid");
        setDisplayToElement(errorWrongCVC, "none");
        return true;
      } else {
        inputCVC.removeAttribute("invalid", !isValid);
        setDisplayToElement(errorWrongCVC, "block");
        return false; 
      }
    }
  }

  // checking - valid fields

  function checkLengthCardNumber(value) {
    return value.length === 16;
  }

  function validValueFromMonth(value) {
    return value > 0 && value <= 31;
  }

  function checkLengthYear(value) {
    return value.length === 2;
  }

  function checkLengthMonth(value) {
    return value.length === 2;
  }

  function checkLengthCVC(value) {
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

  function isYearNotEmpty() {
    if (!inputYear.value) {
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
