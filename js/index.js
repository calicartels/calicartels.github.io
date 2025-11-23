window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

// ========================== CAROUSEL DRAG TO SCROLL ==========================
const slider = document.querySelector(".carousel");
if (slider) {  // Only run if carousel exists
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
  });
}

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

// ========================== TYPE.JS ==========================
var typed = new Typed(".type", {
  strings: ["Data Scientist.", "AI Enthusiast.", "Social Worker."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// ========================== NAVIGATION BAR CUSTOM ==========================
let prevScrollposForStickyNav = window.pageYOffset; // Used for the sticky navbar logic

window.addEventListener("scroll", (event) => {
  let currentScrollY = window.scrollY;

  // Original logic from the first scroll handler (navbar background and icons)
  const navbar = document.getElementById("navbar");
  if (navbar) {
    // This logic seems to always set it to white, could be simplified if that's intended.
    if (currentScrollY > 700) {
      navbar.style.background = "white";
    } else {
      navbar.style.background = "white";
    }
  }

  // Icon color changes
  // const sideNavGithub = document.getElementById("side-nav-github");
  // const sideNavLinkedin = document.getElementById("side-nav-linkedin");
  // const sideNavEmailIcon = document.getElementById("side-nav-email");
  // const sideEmailText = document.getElementById("side-email");
  const pauseButton = document.getElementById("pause");
  const playButton = document.getElementById("play");
  const verticalLineElement = document.querySelector(".vertical-line"); // Changed to querySelector

  if (currentScrollY > 7370) {
    // if (sideNavGithub) sideNavGithub.style.color = "white";
    // if (sideNavLinkedin) sideNavLinkedin.style.color = "white";
    // if (sideNavEmailIcon) sideNavEmailIcon.style.color = "white";
    // if (sideEmailText) sideEmailText.style.color = "white";
    if (pauseButton) pauseButton.style.filter = "invert(100)";
    if (playButton) playButton.style.filter = "invert(100)";
    if (verticalLineElement) verticalLineElement.style.borderColor = "white";
  } else {
    // if (sideNavGithub) sideNavGithub.style.color = "black";
    // if (sideNavLinkedin) sideNavLinkedin.style.color = "black";
    // if (sideNavEmailIcon) sideNavEmailIcon.style.color = "black";
    // if (sideEmailText) sideEmailText.style.color = "black";
    if (pauseButton) pauseButton.style.filter = "none";
    if (playButton) playButton.style.filter = "none";
    if (verticalLineElement) verticalLineElement.style.borderColor = "black";
  }

  // console.log("Current Scroll Y:", currentScrollY); // For debugging scroll position

  // Logic from the second scroll handler (sticky navbar)
  // Assuming the same 'navbar' element is used for stickiness.
  if (navbar) { 
    if (prevScrollposForStickyNav > currentScrollY) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
  }
  prevScrollposForStickyNav = currentScrollY;
});

// ========================== ANIMATE ON SCROLL ==========================
AOS.init({
  once: true,
});

// ========================== CUSTOM MUSIC PLAYER ==========================
var isPlaying = false;

var audio = document.getElementById("myMusic");

function musicHandler() {
  var audio = document.getElementById("myMusic");

  if (isPlaying === false) {
    isPlaying = true;
    audio.play();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    if (iconPlay) iconPlay.style.visibility = "visible";
    if (iconPause) iconPause.style.visibility = "hidden";
  } else if (isPlaying === true) {
    isPlaying = false;
    audio.pause();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    if (iconPlay) iconPlay.style.visibility = "hidden";
    if (iconPause) iconPause.style.visibility = "visible";
  }
}

function navMusicHandler() {
  var audio = document.getElementById("myMusic");

  if (isPlaying === false) {
    isPlaying = true;
    audio.play();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    if (iconPlay) iconPlay.style.visibility = "visible";
    if (iconPause) iconPause.style.visibility = "hidden";
  }
}

// ========================== TOOL TIP ==========================
if (document.getElementById("side-nav-email")) {
  tippy("#side-nav-email", {
    content: "Email",
    animation: "scale",
    duration: 500,
    placement: "left",
  });
}

if (document.getElementById("side-nav-github")) {
  tippy("#side-nav-github", {
    content: "Github",
    animation: "scale",
    duration: 500,
    placement: "left",
  });
}

if (document.getElementById("side-nav-linkedin")) {
  tippy("#side-nav-linkedin", {
    content: "LinkedIn",
    animation: "scale",
    duration: 500,
    placement: "left",
  });
}

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

// Experience Section JavaScript
$(document).ready(function() {
  // Tab switching functionality
  $("#internship-btn").click(function() {
    // Update buttons
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
    
    // Move slider
    $(".slider").css("transform", "translateX(0)");
    
    // Show appropriate content
    $(".tab-pane").removeClass("active");
    $("#internships").addClass("active");
  });
  
  $("#research-btn").click(function() {
    // Update buttons
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
    
    // Move slider
    $(".slider").css("transform", "translateX(100%)");
    
    // Show appropriate content
    $(".tab-pane").removeClass("active");
    $("#research").addClass("active");
  });
  
  // Fixed smooth expand/collapse functionality
  $(".timeline-title").click(function() {
    var targetId = $(this).data("target");
    var $content = $("#" + targetId);
    var isExpanded = $(this).attr("aria-expanded") === "true";
    
    // First close all other items
    $(".timeline-details").not($content).removeClass("show");
    $(".timeline-details").not($content).css({
      "max-height": "0",
      "opacity": "0",
      "padding": "0"
    });
    
    $(".timeline-title").not(this).attr("aria-expanded", "false");
    $(".timeline-title").not(this).find(".expand-icon").html("+");
    
    // Then toggle this item
    if (isExpanded) {
      $(this).attr("aria-expanded", "false");
      $(this).find(".expand-icon").html("+");
      
      $content.css({
        "max-height": "0",
        "opacity": "0",
        "padding": "0"
      });
      
      setTimeout(function() {
        $content.removeClass("show");
      }, 300);
    } else {
      $(this).attr("aria-expanded", "true");
      $(this).find(".expand-icon").html("−");
      
      $content.addClass("show");
      
      setTimeout(function() {
        $content.css({
          "max-height": "700px", // Increased from 500px to allow more content
          "opacity": "1",
          "padding": "15px 20px"
        });
      }, 10);
    }
  });
  
  // Initialize all items as collapsed
  $(".timeline-title").attr("aria-expanded", "false");
});

// Horizontal Scroll Testimonials
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

if (testimonialsWrapper) {
    let cardWidth = document.querySelector('.testimonial-card').offsetWidth + 32;

    nextButton.addEventListener('click', () => {
        testimonialsWrapper.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        testimonialsWrapper.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    testimonialsWrapper.addEventListener('scroll', () => {
        const atStart = testimonialsWrapper.scrollLeft === 0;
        const atEnd = testimonialsWrapper.scrollLeft + testimonialsWrapper.clientWidth >= 
                     testimonialsWrapper.scrollWidth - 1;

        prevButton.style.visibility = atStart ? 'hidden' : 'visible';
        nextButton.style.visibility = atEnd ? 'hidden' : 'visible';
    });
}
// ========================== GET CURRENT YEAR FOR COPYRIGHT ==========================
const copyrightElement = document.getElementById("copyright");
if (copyrightElement) {
  copyrightElement.appendChild(document.createTextNode(new Date().getFullYear()));
}

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