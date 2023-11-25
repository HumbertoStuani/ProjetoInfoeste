document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("firstNameInput");
  const lastNameInput = document.getElementById("lastNameInput");
  const cpfInput = document.getElementById("cpfInput");
  const emailInput = document.getElementById("emailInput");

  const form = document.getElementById("formContact");

  firstNameInput.addEventListener("input", function () {
    const isValid = /^[^\d]+$/.test(this.value.trim());
    handleValidation(this, isValid);
  });

  lastNameInput.addEventListener("input", function () {
    const isValid = /^[^\d]+$/.test(this.value.trim());
    handleValidation(this, isValid);
  });

  cpfInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 11) {
      value = value.substr(0, 11);
    }

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = value;

    const isValid = validateCPF(this.value);
    handleValidation(this, isValid);
  });

  emailInput.addEventListener("input", function () {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim());
    handleValidation(this, isValid);
  });

  function validateCPF(cpf) {
    const cpfDigits = cpf.replace(/\D/g, "");
    if (cpfDigits.length !== 11) return false;

    let sum = 0;
    let check;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpfDigits.charAt(i)) * (10 - i);
    }

    check = 11 - (sum % 11);
    if (check === 10 || check === 11) {
      check = 0;
    }

    if (check !== parseInt(cpfDigits.charAt(9))) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpfDigits.charAt(i)) * (11 - i);
    }

    check = 11 - (sum % 11);
    if (check === 10 || check === 11) {
      check = 0;
    }

    if (check !== parseInt(cpfDigits.charAt(10))) {
      return false;
    }

    return true;
  }

  function handleValidation(element, isValid) {
    if (isValid) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.remove("is-valid");
      element.classList.add("is-invalid");
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) {
      alert("Por favor, preencha todos os campos corretamente.");
    } else {
      form.submit();
    }
  });

  function validateForm() {
    const inputs = [firstNameInput, lastNameInput, cpfInput, emailInput];
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.classList.contains("is-valid")) {
        isValid = false;
        handleValidation(input, false);
      }
    });

    return isValid;
  }

});
