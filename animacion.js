document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".anteriorcoleccion");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.1) {
                    target.classList.add("active");
                } else {
                    target.classList.remove("active");
                }
            });
        },
        { threshold: 0.1 } // Detecta cuando el 10% del div es visible
    );

    observer.observe(target);
});