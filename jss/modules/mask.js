export default class Assessment {
  constructor() {
    const elements = document.querySelectorAll(".cep-input");

    elements.forEach((input) => {
      input.addEventListener("input", function (event) {
        const { value } = event.target;

        const newValue = value.replace(/\D/g, "");

        const truncatedValue = newValue.slice(0, 8);

        const formattedValue = truncatedValue.replace(
          /^(\d{5})(\d{0,3})/,
          "$1-$2"
        );

        event.target.value = formattedValue;
      });
    });
  }
}
