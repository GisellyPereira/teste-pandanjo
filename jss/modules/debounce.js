export default class Debounce {
    constructor() {
        const dtElements = document.querySelectorAll(".title-details dt");
        const ddElements = document.querySelectorAll(".middle-content dd");
        
        dtElements[0].classList.add("active");
        ddElements[0].classList.add("active");
        
        dtElements.forEach(function(dt, index) {
            dt.addEventListener("click", function() {
                dtElements.forEach(function(dt) {
                    dt.classList.remove("active");
                });
                dt.classList.add("active");
                ddElements.forEach(function(dd) {
                    dd.classList.remove("active");
                });
                ddElements[index].classList.add("active");
            });
        });
    }
}
