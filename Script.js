document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        // Muestra el botón cuando el usuario ha bajado 200px desde la parte superior
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        // Desplaza suavemente hacia la parte superior de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
