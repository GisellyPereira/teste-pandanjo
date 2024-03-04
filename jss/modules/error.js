export default class Error {
    constructor() {
        const addToCartButton = document.querySelector('.container-cart button');

        addToCartButton.addEventListener('click', () => {
            const selectedSize = document.querySelector('.size-button.clicked');
            const selectedColor = document.querySelector('.div-circles .selected');

            if (!selectedSize || !selectedColor) {
                const existingErrorMessage = document.querySelector('.error-message');
                if (existingErrorMessage) {
                    existingErrorMessage.remove();
                }

                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Por favor, selecione cor e tamanho antes de adicionar ao carrinho.';
                errorMessage.classList.add('error-message');
                errorMessage.style.color = '#E30E41';
        
                addToCartButton.parentNode.appendChild(errorMessage);
            } else {

                const toast = document.createElement('div');
                toast.classList.add('toast');
                toast.textContent = 'Produto adicionado ao carrinho!';

                const toastBar = document.createElement('div');
                toastBar.classList.add('toast-bar');
                toast.appendChild(toastBar);

                document.body.appendChild(toast);

                setTimeout(() => {
                    toast.remove();
                }, 3000);
            }
        });

        const sizeButtons = document.querySelectorAll('.size-button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const existingErrorMessage = document.querySelector('.error-message');
                if (existingErrorMessage) {
                    existingErrorMessage.remove();
                }
            });
        });

        const colorButtons = document.querySelectorAll('.div-circles > div');
        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const existingErrorMessage = document.querySelector('.error-message');
                if (existingErrorMessage) {
                    existingErrorMessage.remove();
                }
            });
        });
    }
}
