var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//Scroll To Top
const scrollToTop = document.querySelector(".scrollToTop");
//When Scroll Height is greater than 400 then display scroll to top.
window.addEventListener("scroll", () => {
  window.pageYOffset > 400
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

// Scroll to top on click
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
