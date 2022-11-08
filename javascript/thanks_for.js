const staggerWrap = document.querySelector(".img_wrap");
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];

const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const div = document.createElement("div");

  fragment.appendChild(div);
  div.className = "tail";
}

staggerWrap.appendChild(fragment);
sec4();
function sec4() {
  const stageAni = anime.timeline({
    targets: ".tail",
    easing: "easeInBack",
    delay: anime.stagger(10, { from: "last" }),
    duration: 2000,
    endDelay: 1000,
    loop: false,
    autoplay: false,
  });
  // 추가
  stageAni
    .add({
      targets: ".main_6 h1 img",
      opacity: 0,
      duration: 500,
    })

    .add({
      translateX: function () {
        return anime.random(-400, 400);
      },
      translateY: function () {
        return anime.random(-400, 400);
      },
      delay: anime.stagger(200, { grid: grid, from: "last" }),
      scale: 0.2,
      backgroundColor: "#ffffff",
      borderRadius: "50%",
    })
    .add({
      targets: staggerWrap,
      rotate: 360,
      easing: "linear",
      duration: 4000,
      scale: 0.5,
    })
    .add({
      targets: staggerWrap,
      scale: 1,
      duration: 1000,
    })
    .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
      duration: 3000,
      scale: 0.8,
      backgroundColor: "#2af598",
    })
    .add({
      scale: 0.5,
      duration: 500,
      rotate: 60,
      borderRadius: "0%",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scale: 0.8,
      duration: 500,
      rotate: -60,
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scaleX: 0.1,
      scaleY: 1,
      duration: 500,
      rotate: 120,
      borderRadius: "0%",
      backgroundColor: "#2af598",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      rotate: 0,
      duration: 500,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scaleX: 1,
      duration: 500,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scale: 1,
      duration: 800,
      backgroundColor: "#009efd",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      targets: ".main_6 h1 img",
      opacity: 1,
      duration: 500,
    });

  // 수정
  // stageAni.play()

  staggerWrap.addEventListener("click", function () {
    stageAni.play();
  });
}
