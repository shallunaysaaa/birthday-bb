/* =========================================
   HELPER
========================================= */

function changeScreen(currentId, nextId) {

    const currentScreen =
        document.getElementById(currentId);

    const nextScreen =
        document.getElementById(nextId);

    if (!currentScreen || !nextScreen) return;

    currentScreen.classList.remove("active");

    setTimeout(() => {

        nextScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 250);
}


/* =========================================
   GIFT OPENING
========================================= */

function openGift() {

    const giftArea =
        document.querySelector(".gift-area");

    const giftLid =
        document.querySelector(".gift-lid");

    if (!giftArea || !giftLid) return;


    /* Prevent double tap */

    if (giftArea.classList.contains("opened")) {
        return;
    }

    giftArea.classList.add("opened");


    /* Open lid */

    giftLid.style.transform =
        "translateY(-55px) rotate(-8deg)";


    /* Create magical particles */

    createParticles(22);


    /* Wait for animation */

    setTimeout(() => {

        changeScreen(
            "intro",
            "birthday"
        );

    }, 1200);
}


/* =========================================
   BIRTHDAY / MAKE A WISH
========================================= */

let wishMade = false;

function makeWish() {

    if (wishMade) return;

    wishMade = true;


    const flames =
        document.querySelectorAll(".flame");

    const hint =
        document.getElementById("wish-hint");

    const button =
        document.getElementById("birthday-button");


    /* Blow out candles */

    flames.forEach((flame, index) => {

        setTimeout(() => {

            flame.style.opacity = "0";

            flame.style.transform =
                "translateX(-50%) scale(0)";

        }, index * 180);

    });


    /* Magical particles */

    setTimeout(() => {

        createStars(18);

    }, 450);


    /* Hide wish hint */

    setTimeout(() => {

        if (hint) {
            hint.classList.add("done");
        }

    }, 700);


    /* Show continue button */

    setTimeout(() => {

        if (button) {

            button.classList.remove("hidden");

            button.style.animation =
                "contentReveal 0.8s ease";

        }

    }, 1000);
}


/* =========================================
   CURRENT PHOTO
========================================= */

function showCurrentPhoto() {

    changeScreen(
        "birthday",
        "current-photo"
    );

    createStars(8);
}


/* =========================================
   CHILDHOOD PHOTO
========================================= */

function showChildhoodPhoto() {

    changeScreen(
        "current-photo",
        "childhood-photo"
    );

    createFlowers(14);
}


/* =========================================
   LOVE NOTES
========================================= */

let currentNote = 1;

const totalNotes = 5;


function showLoveNotes() {

    changeScreen(
        "childhood-photo",
        "love-notes"
    );

    currentNote = 1;

    updateNote();

}


/* -----------------------------------------
   CHANGE NOTE
------------------------------------------ */

function nextNote() {

    if (currentNote >= totalNotes) {

        showFinalButton();

        return;
    }


    const current =
        document.getElementById(
            "note-" + currentNote
        );

    if (current) {

        current.classList.remove(
            "active-note"
        );

    }


    currentNote++;


    const next =
        document.getElementById(
            "note-" + currentNote
        );

    if (next) {

        next.classList.add(
            "active-note"
        );

    }


    if (currentNote >= totalNotes) {

        setTimeout(() => {

            showFinalButton();

        }, 500);

    }
}


/* -----------------------------------------
   UPDATE NOTE
------------------------------------------ */

function updateNote() {

    document
        .querySelectorAll(".love-note")
        .forEach(note => {

            note.classList.remove(
                "active-note"
            );

        });


    const firstNote =
        document.getElementById("note-1");

    if (firstNote) {

        firstNote.classList.add(
            "active-note"
        );

    }
}


/* -----------------------------------------
   CLICK NOTE
------------------------------------------ */

document.addEventListener(
    "click",
    function(event) {

        const note =
            event.target.closest(
                ".love-note"
            );

        if (!note) return;

        nextNote();

    }
);


/* =========================================
   SHOW FINAL BUTTON
========================================= */

function showFinalButton() {

    const button =
        document.getElementById(
            "notes-button"
        );

    if (!button) return;

    button.classList.remove(
        "hidden"
    );

    button.style.animation =
        "contentReveal 0.8s ease";


    createHearts(8);
}


/* =========================================
   FINAL SURPRISE
========================================= */

function showFinalSurprise() {

    changeScreen(
        "love-notes",
        "final-surprise"
    );

    createStars(12);

}


/* =========================================
   OPEN ENVELOPE
========================================= */

let envelopeOpened = false;


function openLetter() {

    if (envelopeOpened) return;

    envelopeOpened = true;


    const envelope =
        document.querySelector(
            ".envelope"
        );

    const letter =
        document.querySelector(
            ".envelope-letter"
        );

    const hint =
        document.getElementById(
            "envelope-hint"
        );

    const message =
        document.getElementById(
            "final-message"
        );


    /* Move letter upward */

    if (letter) {

        letter.style.transform =
            "translateY(-95px)";

    }


    /* Hide hint */

    setTimeout(() => {

        if (hint) {

            hint.style.opacity = "0";

        }

    }, 400);


    /* Open magical effect */

    setTimeout(() => {

        createHearts(18);

        createFlowers(12);

    }, 500);


    /* Show final message */

    setTimeout(() => {

        if (message) {

            message.classList.remove(
                "hidden"
            );

        }

    }, 900);


    /* Slight envelope movement */

    if (envelope) {

        envelope.style.transform =
            "translateY(-5px)";

    }
}


/* =========================================
   HEART PARTICLES
========================================= */

function createHearts(amount) {

    const symbols = [
        "♡",
        "♥",
        "♡",
        "✦"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            Math.random() * 12 + 10 + "px";

        heart.style.color =
            "#d5c4a2";

        heart.style.opacity =
            Math.random() * 0.45 + 0.25;

        heart.style.animation =
            "floatUp " +
            (Math.random() * 4 + 5) +
            "s linear forwards";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 10000);

    }
}


/* =========================================
   FLOWERS
========================================= */

function createFlowers(amount) {

    const symbols = [
        "✦",
        "✧",
        "·",
        "♡"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const flower =
            document.createElement("div");

        flower.className =
            "floating-flower";

        flower.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        flower.style.left =
            Math.random() * 100 + "vw";

        flower.style.top =
            "-30px";

        flower.style.fontSize =
            Math.random() * 11 + 9 + "px";

        flower.style.color =
            "#d5c4a2";

        flower.style.opacity =
            Math.random() * 0.35 + 0.2;

        flower.style.animation =
            "fallDown " +
            (Math.random() * 4 + 5) +
            "s linear forwards";


        document.body.appendChild(
            flower
        );


        setTimeout(() => {

            flower.remove();

        }, 10000);

    }
}


/* =========================================
   STAR PARTICLES
========================================= */

function createStars(amount) {

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "·"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const star =
            document.createElement("div");

        star.className =
            "floating-heart";

        star.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 80 + 10 + "vh";

        star.style.fontSize =
            Math.random() * 9 + 8 + "px";

        star.style.color =
            "#d5c4a2";

        star.style.opacity =
            Math.random() * 0.35 + 0.15;

        star.style.animation =
            "heartBeat " +
            (Math.random() * 2 + 2) +
            "s ease-in-out infinite";


        document.body.appendChild(
            star
        );


        setTimeout(() => {

            star.remove();

        }, 7000);

    }
}


/* =========================================
   GIFT PARTICLES
========================================= */

function createParticles(amount) {

    const symbols = [
        "✦",
        "✧",
        "·",
        "♡",
        "⋆"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "floating-heart";

        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            (45 + Math.random() * 10) +
            "vw";

        particle.style.top =
            (45 + Math.random() * 10) +
            "vh";

        particle.style.fontSize =
            Math.random() * 13 + 8 + "px";

        particle.style.color =
            "#d5c4a2";

        particle.style.opacity =
            Math.random() * 0.6 + 0.3;


        particle.animate(
            [
                {
                    transform:
                        "translate(0, 0) scale(0.5)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(" +
                        (Math.random() * 100 - 50) +
                        "px, " +
                        (-Math.random() * 130 - 30) +
                        "px) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(" +
                        (Math.random() * 180 - 90) +
                        "px, " +
                        (-Math.random() * 220 - 60) +
                        "px) scale(0.3)",
                    opacity: 0
                }
            ],
            {
                duration:
                    Math.random() * 900 + 900,

                easing:
                    "cubic-bezier(.2,.8,.2,1)",

                fill: "forwards"
            }
        );


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 2200);

    }
}
