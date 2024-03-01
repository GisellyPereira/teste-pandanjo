export default class Dropdowns {
    constructor() {
        const questions = document.querySelectorAll(".doubts-list dt");
        questions.forEach((question) => {
            const answer = question.nextElementSibling;
            const arrowIcon = question.querySelector('.arrow-icon');

            answer.classList.add('closed');

            question.addEventListener("click", () => {
                const isOpen = answer.classList.contains('open');

                questions.forEach((q) => {
                    const ans = q.nextElementSibling;
                    if (q !== question) {
                        ans.classList.remove('open');
                        ans.classList.add('closed');
                    }
                });

                if (!isOpen) {
                    answer.classList.remove('closed');
                    answer.classList.add('open');
                    arrowIcon.classList.add('rotate');
                } else {
                    answer.classList.remove('open');
                    answer.classList.add('closed');
                    arrowIcon.classList.remove('rotate');
                }
            });
        });

       
    }
}
