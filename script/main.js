let yesSize = 22;
let noSize = 22;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const welcome = document.getElementById("welcomeContainer");
const bookContainer = document.getElementById("bookContainer");
const bookElement = document.getElementById("book");
const video = document.getElementById('bgVideo');
const playButton = document.getElementById('playButton');
const videoControls = document.getElementById('videoControls');
const pauseBtn = document.getElementById('pauseBtn');

/* ================= YES / NO EFFECT ================= */

noBtn.addEventListener("mouseover", function() {
    yesSize += 8;
    noSize -= 4;

    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = noSize + "px";

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    if (noSize <= 8) {
        noBtn.style.display = "none";
    }
});

/* ================= FLOATING HEARTS ================= */

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    welcome.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}, 500);

/* ================= LOAD BOOK ================= */

yesBtn.addEventListener("click", function() {

    welcome.classList.add("fadeOut");

    setTimeout(() => {

        welcome.style.display = "none";
        bookContainer.style.display = "flex";

        /* CHANGE THIS NUMBER */
        const totalImages = 21;  // 👈 put how many jpg files you have

        for (let i = 1; i <= totalImages; i++) {
            const page = document.createElement("div");
            page.classList.add("page");

            if (i === 1) {
                console.log("quotediv", i)
                // First page: love quote
                const quoteDiv = document.createElement("div");
                quoteDiv.innerHTML = "💕 Love is the journey, not the destination 💕";

                // Styling
                quoteDiv.style.padding = "40px";
                quoteDiv.style.textAlign = "center";
                quoteDiv.style.fontSize = "24px";
                quoteDiv.style.fontWeight = "bold";
                quoteDiv.style.color = "#fff";
                quoteDiv.style.background = "pink";
                quoteDiv.style.border = "4px solid #ff66b3";
                quoteDiv.style.borderRadius = "20px";
                quoteDiv.style.width = "80%";
                quoteDiv.style.height = "80%";
                quoteDiv.style.display = "flex";
                quoteDiv.style.justifyContent = "center";
                quoteDiv.style.alignItems = "center";
                quoteDiv.style.flexDirection = "column";
                quoteDiv.style.margin = "auto";

                page.appendChild(quoteDiv);

            }else{
                const img = document.createElement("img");
                img.src = `images/${i}.jpg`;

                page.appendChild(img);
            }
            bookElement.appendChild(page);
        }

        const pageFlip = new St.PageFlip(
            bookElement,
            {
                width: 400,
                height: 600,
                showCover: true,
                mobileScrollSupport: false
            }
        );

        pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    }, 1000);
});

// ================= BIG PLAY BUTTON =================
playButton.addEventListener('click', function() {
    video.muted = false;   // enable sound
    video.play();
    playButton.style.display = 'none';
    videoControls.style.display = 'flex';
});

// ================= PAUSE / PLAY BUTTON =================
pauseBtn.addEventListener('click', function() {
    if(video.paused) {
        video.play();
        pauseBtn.textContent = "⏸ Pause";
    } else {
        video.pause();
        pauseBtn.textContent = "▶ Play";
    }
});

// ================= MUTE / UNMUTE =================
muteBtn.addEventListener('click', function() {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔊 Unmute" : "🔇Mute";
});
