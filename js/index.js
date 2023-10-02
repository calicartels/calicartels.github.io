window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

// ========================== CAROUSEL DRAG TO SCROLL ==========================
const slider = document.querySelector(".carousel");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

// ======================= CUSTOM CURSOR ======================
var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

$(".projects-wrapper img").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".projects-wrapper img").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

$(".project-design img").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".project-design img").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

// ======================= INTRODUCTION MODAL ======================
// function resizeForm() {
//   // only runs on desktop
//   var width =
//     window.innerWidth > 0
//       ? window.innerWidth
//       : document.documentElement.clientWidth;
//   if (width > 1024) {
//     setTimeout(function () {
//       $("#introduction-modal").modal("show");
//     }, 3700);
//   } else {
//   }
// }

// window.onresize = resizeForm;
// resizeForm();

// setTimeout(function () {
//   $("#introduction-modal").modal("show");
// }, 3300);

// // Modal Animation on show
// $("#introduction-modal").on("show.bs.modal", function (e) {
//   $("#introduction-modal").attr(
//     "class",
//     "modal animate__animated animate__slideInDown"
//   );
// });

// $("#archive-modal").on("show.bs.modal", function (e) {
//   $("#archive-modal").attr(
//     "class",
//     "modal animate__animated animate__bounceInDown"
//   );
// });

// ========================== TYPE.JS ==========================
// strings: [ 'Data Analyst.', 'Web Developer.', 'Mobile Developer.', 'RPA Developer.', 'UI/UX Designer.' ]
var typed = new Typed(".type", {
  strings: ["Data Scientist.", "Machine Learning Engineer.", "Social Worker."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// ========================== NAVIGATION BAR CUSTOM ==========================
document.getElementById("navbar").style.background = "white";

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 700) {
    document.getElementById("navbar").style.background = "white";
  } else {
    document.getElementById("navbar").style.background = "white";
  }

  // for icons
  if (scroll > 7370) {
    document.getElementById("side-nav-github").style.color = "white";
    document.getElementById("side-nav-linkedin").style.color = "white";
    document.getElementById("side-nav-email").style.color = "white";
    document.getElementById("side-email").style.color = "white";
    document.getElementById("pause").style.filter = "invert(100)";
    document.getElementById("play").style.filter = "invert(100)";
    document.getElementById("vertical-line").style.borderColor = "white";
  } else {
    document.getElementById("side-nav-github").style.color = "black";
    document.getElementById("side-nav-linkedin").style.color = "black";
    document.getElementById("side-nav-email").style.color = "black";
    document.getElementById("side-email").style.color = "black";
    document.getElementById("pause").style.filter = "none";
    document.getElementById("play").style.filter = "none";
    document.getElementById("vertical-line").style.borderColor = "black";
  }

  console.log(scroll);
});

// Navbar sticky hidden when user scrolls up
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // document.getElementById("nav-horizontal-line").style.top = "45px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    // document.getElementById("nav-horizontal-line").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// ========================== ANIMATE ON SCROLL ==========================
AOS.init({
  once: true,
});

// ========================== POINTER.JS CURSON ==========================
// init_pointer({
//   pointerColor: "#222",
//   ringSize: 15,
//   ringClickSize: 10,
// });

// ========================== CUSTOM MUSIC PLAYER ==========================
// Bg Music
var isPlaying = false;

var audio = document.getElementById("myMusic");
// audio.volume = 0.3;
// audio.volume = 0.1;

// audio.play();

function musicHandler() {
  var audio = document.getElementById("myMusic");

  if (isPlaying === false) {
    isPlaying = true;
    audio.play();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    iconPlay.style.visibility = "visible";

    iconPause.style.visibility = "hidden";
  } else if (isPlaying === true) {
    isPlaying = false;
    audio.pause();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    iconPlay.style.visibility = "hidden";

    iconPause.style.visibility = "visible";
  }
}

function navMusicHandler() {
  var audio = document.getElementById("myMusic");

  if (isPlaying === false) {
    isPlaying = true;
    audio.play();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    iconPlay.style.visibility = "visible";

    iconPause.style.visibility = "hidden";
  }
}

// ========================== TOOL TIP ==========================
tippy("#side-nav-email", {
  content: "Email",
  animation: "scale",
  duration: 500,
  placement: "left",
});

tippy("#side-nav-github", {
  content: "Github",
  animation: "scale",
  duration: 500,
  placement: "left",
});

tippy("#side-nav-linkedin", {
  content: "LinkedIn",
  animation: "scale",
  duration: 500,
  placement: "left",
});



tippy("#about-smu", {
  content: "Mtech Integrated in CSE with Data Science",
  animation: "scale",
  duration: 500,
});





tippy("#play", {
  content: "Currently Playing: \n Falling Through The Hour Glass",
  animation: "scale",
  duration: 500,
});



// ========================== GET CURRENT YEAR FOR COPYRIGHT ==========================
document.getElementById("copyright").appendChild(document.createTextNode(new Date().getFullYear()));

// ========================== HIDE VIDEO CONTROLS DEFAULT ==========================
// default hidden
var vids = $("video");
$.each(vids, function () {
  this.controls = false;
});

// mouse events
$("video").hover(function (event) {
  if (event.type === "mouseenter") {
    $(this).attr("controls", "");
  } else if (event.type === "mouseleave") {
    $(this).removeAttr("controls");
  }
});
