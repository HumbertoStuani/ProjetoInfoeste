function validateInput(input, feedbackId) {
  // Verifica se o campo não está vazio e não contém números
  if (isEmptyOrNumber(input.value)) {
      input.setCustomValidity('Inválido');
      document.getElementById(feedbackId).style.display = 'block';
  } else {
      input.setCustomValidity('');
      document.getElementById(feedbackId).style.display = 'none';
  }
}

function isEmptyOrNumber(value) {
  // Verifica se o valor é vazio ou contém números
  return value.trim() === '' || /\d/.test(value);
}

  function applyCpfMask(input) {
    // Remove caracteres não numéricos
    const cpf = input.value.replace(/\D/g, '');

    // Aplica a máscara
    if (cpf.length <= 3) {
      input.value = cpf.replace(/(\d{1,3})/, '$1');
    } else if (cpf.length <= 6) {
      input.value = cpf.replace(/(\d{3})(\d{1,3})/, '$1-$2');
    } else if (cpf.length <= 9) {
      input.value = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2-$3');
    } else {
      input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }
  }

  function validateCpf(input) {
    // Remove todos os caracteres não numéricos
    var cpfNumber = input.value.replace(/\D/g, '');

    // Verifica se o número de CPF é válido
    if (validateCpfNumber(cpfNumber)) {
        input.setCustomValidity('');
        document.getElementById(input.id + '-feedback').style.display = 'none';
    } else {
        input.setCustomValidity('CPF inválido');
        document.getElementById(input.id + '-feedback').style.display = 'block';
    }
}

function validateRg(input) {
  // Remove todos os caracteres não numéricos
  var rgNumber = input.value.replace(/\D/g, '');

  // Verifica se o número de RG é válido
  if (validateRgNumber(rgNumber)) {
      input.setCustomValidity('');
      document.getElementById(input.id + '-feedback').style.display = 'none';
  } else {
      input.setCustomValidity('RG inválido');
      document.getElementById(input.id + '-feedback').style.display = 'block';
  }
}

function validateCpfNumber(cpf) {
  // Adicione sua lógica de validação de CPF aqui
  // Este é um exemplo simples
  return cpf.length === 11;
}

function validateRgNumber(rg) {
  // Adicione sua lógica de validação de RG aqui
  // Este é um exemplo simples
  return rg.length >= 8 && rg.length <= 12;
}

  function applyRgMask(input) {
    // Remove caracteres não numéricos
    const rg = input.value.replace(/\D/g, '');

    // Aplica a máscara
    if (rg.length <= 2) {
      input.value = rg;
    } else if (rg.length <= 5) {
      input.value = rg.replace(/(\d{2})(\d{1,3})/, '$1.$2');
    } else if (rg.length <= 8) {
      input.value = rg.replace(/(\d{2})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else {
      input.value = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }

  }

  function validateEmail(input) {
    const email = input.value.trim();
    const emailFeedback = document.getElementById('emailFeedback');

    // Sua lógica de validação personalizada, por exemplo, verificar a presença de "@"
    if (!email.includes('@')) {
      emailFeedback.style.display = 'block';
    } else {
      emailFeedback.style.display = 'none';
    }

  }

  function applyCepMask(input) {
    // Remove caracteres não numéricos
    const cep = input.value.replace(/\D/g, '');
    const zipFeedback = document.getElementById("zipFeedback");

    // Verifica se o CEP é válido
    if (cep.length === 8 && /^\d{5}-\d{3}$/.test(input.value)) {
        input.setCustomValidity('');
        zipFeedback.style.display = 'none';
    } else {
        input.setCustomValidity('CEP inválido');
        zipFeedback.style.display = 'block';
    }

    // Aplica a máscara
    if (cep.length <= 5) {
        input.value = cep.replace(/(\d{5})/, '$1');
    } else {
        input.value = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
}


function formatAndValidatePhone(input) {
  // Remove caracteres não numéricos
  let rawValue = input.value.replace(/[^\d]/g, '');

  // Se o valor estiver vazio, não aplique a máscara
  if (!rawValue) {
    input.value = '';
    input.setCustomValidity('');
    document.getElementById(input.id + '-feedback').style.display = 'none';
    return;
  }

  // Aplica a máscara
  let formattedValue = `(${rawValue.substring(0, 2)}) ${rawValue.substring(2, 6)}${rawValue.substring(6, 11)}`;

  // Atualiza o valor do campo
  input.value = formattedValue;

  // Verifica se o número tem a quantidade correta de dígitos
  if (rawValue.length === 11) {
      input.setCustomValidity('');
      document.getElementById(input.id + '-feedback').style.display = 'none';
  } else {
      input.setCustomValidity('Telefone inválido');
      document.getElementById(input.id + '-feedback').style.display = 'block';
  }
}

function validateCity() {
  var selectedCity = document.getElementById("state").value;
  var cityFeedback = document.getElementById("city-feedback");

  if (selectedCity === "") {
    cityFeedback.style.display = 'block';
  } else {
    cityFeedback.style.display = 'none';
  }
}

function validateForm() {
  var selectedCity = document.getElementById("state").value;
  var cityFeedback = document.getElementById("city-feedback");

  if (selectedCity === "") {
    cityFeedback.style.display = 'block';
    return false; // Impede o envio do formulário
  }
  return true; // Permite o envio do formulário
}

function validateCourse() {
  var selectedCourse = document.getElementById("country").value;
  var courseFeedback = document.getElementById("course-feedback");

  if (selectedCourse === "") {
    courseFeedback.style.display = 'block';
  } else {
    courseFeedback.style.display = 'none';
  }
}

function validateForm() {
  var selectedCourse = document.getElementById("country").value;
  var courseFeedback = document.getElementById("course-feedback");

  if (selectedCourse === "") {
    courseFeedback.style.display = 'block';
    return false; // Impede o envio do formulário
  }
  return true; // Permite o envio do formulário
}

function validateAddress() {
  var addressInput = document.getElementById("address");
  var addressFeedback = document.getElementById("addressFeedback");

  // Remove espaços em branco antes e depois do valor
  var trimmedValue = addressInput.value.trim();

  // Verifica se o campo não está vazio
  if (trimmedValue === '') {
      addressInput.setCustomValidity('Campo obrigatório');
      addressFeedback.style.display = 'block';
  } else {
      addressInput.setCustomValidity('');
      addressFeedback.style.display = 'none';
  }
}

function applyCepMaskAndValidate(input) {
  // Remove caracteres não numéricos
  const cep = input.value.replace(/\D/g, '');
  const zipFeedback = document.getElementById("zipFeedback");

  // Aplica a máscara
  if (cep.length <= 5) {
      input.value = cep.replace(/(\d{5})/, '$1');
  } else {
      input.value = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  // Verifica se o CEP é válido
  if (cep.length === 8) {
      input.setCustomValidity('');
      zipFeedback.style.display = 'none';
  } else {
      input.setCustomValidity('CEP inválido');
      zipFeedback.style.display = 'block';
  }
}

