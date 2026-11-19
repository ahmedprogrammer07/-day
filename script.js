
const message = `يا محمد ❤️

كل سنة وأنت طيب يا صاحبي!
النهارده مش أي يوم، النهارده دخلت العشرين رسمياً! 🎂

أتمنى السنة الجديدة تكون بداية لحاجات عظيمة في حياتك،
وتحقق فيها كل اللي نفسك فيه.

تفضل دايماً ناجح ومبسوط،
وتفضل الضحكة منورة وشك.

وعقبال 100 سنة يا أسطورة! 🔥

HAPPY 20TH BIRTHDAY!`;

let started = false;

document.getElementById("surpriseBtn").onclick = () => {
  document.getElementById("message").scrollIntoView({
    behavior: "smooth"
  });

  if (!started) {
    started = true;
    let i = 0;
    const output = document.getElementById("messageText");

    function typing() {
      if (i < message.length) {
        output.textContent += message[i++];
        setTimeout(typing, 35);
      }
    }

    typing();
    celebration();
  }
};

let candlesOff = false;

document.getElementById("blowBtn").onclick = () => {
  if (candlesOff) return;

  candlesOff = true;

  document.getElementById("flames").textContent = "✨ 🎉 ✨";
  document.getElementById("wish").textContent =
    "أمنياتك كلها تتحقق يا محمد! ❤️";

  celebration();
};

function celebration() {
  const symbols = ["🎉", "✨", "⭐", "🎊", "💛"];

  for (let i = 0; i < 60; i++) {
    const item = document.createElement("span");

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-30px";
    item.style.fontSize = "22px";
    item.style.zIndex = "9999";
    item.style.pointerEvents = "none";

    document.body.appendChild(item);

    const duration = 2500 + Math.random() * 2000;

    item.animate([
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      { transform: "translateY(110vh) rotate(600deg)", opacity: 0 }
    ], {
      duration,
      easing: "ease-in"
    });

    setTimeout(() => item.remove(), duration);
  }
}
