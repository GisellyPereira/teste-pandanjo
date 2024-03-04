export default class Mask {
  constructor() {
    const cepInput = document.querySelector(".cep-input");
    const calculatorButton = document.querySelector(".btn-calculator");

    calculatorButton.addEventListener("click", () => {
      const cepValue = cepInput.value.trim();

      if (!isValidCEP(cepValue)) {
        cepInput.classList.add("error-input");

        const existingErrorMessage =
          document.querySelector(".cep-error-message");
        if (existingErrorMessage) {
          existingErrorMessage.remove();
        }

        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Por favor, preencha o CEP corretamente.";
        errorMessage.classList.add("cep-error-message");
        errorMessage.style.color = "#E30E41 ";
        cepInput.parentNode.appendChild(errorMessage);
      } else {
        cepInput.classList.remove("error-input");
        const existingErrorMessage =
          document.querySelector(".cep-error-message");
        if (existingErrorMessage) {
          existingErrorMessage.remove();
        }
      }
    });

    cepInput.addEventListener("input", function (event) {
      let { value } = event.target;
      value = value.replace(/\D/g, "");
      value = value.slice(0, 8);

      const formattedValue = value.replace(/^(\d{5})(\d{0,3})/, "$1-$2");

      event.target.value = formattedValue;
    });
  }
}

function isValidCEP(cep) {
  return /^[0-9]{5}-?[0-9]{3}$/.test(cep);
}
