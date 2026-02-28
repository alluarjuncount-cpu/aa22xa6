/* COUNTDOWN WITH SECONDS */
const countdownEl = document.getElementById("countdown");
const targetDate = new Date("April 8, 2026 00:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "The Epic Awakens";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = 
  `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}, 1000);

/* STARS */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const isMobile = innerWidth < 768;
const STAR_COUNT = isMobile ? 60 : 150;

let stars = Array.from({ length: STAR_COUNT }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * (isMobile ? 1 : 1.5),
  speed: Math.random() * 0.15 + 0.05,
  a: Math.random()
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;

    ctx.fillStyle = `rgba(200,200,200,${s.a})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}
animateStars();

/* ARROW SCROLL */
document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", () => {
    document.querySelector(el.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* SCROLL TO TOP */
const scrollTop = document.querySelector(".scroll-top");
addEventListener("scroll", () => {
  scrollTop.style.display =
    scrollY > innerHeight ? "block" : "none";
});