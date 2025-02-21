gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1500, rotate: -30 },
    ];

    // ScrollTrigger pour la wrapper
    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                x: `${-350 * self.progress}vw`,
                duration: 0.2,
                ease: "power3.out",
            });
        },
    });

    // ScrollTrigger pour chaque carte
    cards.forEach((card) => {
        ScrollTrigger.create({
            trigger: card.id, // Référence correcte à l'ID de la carte
            start: "top top",
            end: "+=1200vh",
            scrub: 1,
            onUpdate: (self) => {
                gsap.to(card.id, {
                    x: `${card.endTranslateX * self.progress}px`,
                    rotate: `${card.rotate * self.progress * 2}`,
                    duration: 0.2,
                    ease: "power3.out",
                });
            },
        });
    });

    // Redirection du logo vers Store.html
    const logo = document.querySelector("#logo");
    logo.addEventListener("click", () => {
        window.location.href = "Store.html"; // Rediriger vers Store.html
    });
});
