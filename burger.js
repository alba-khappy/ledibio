
document.querySelector(".header__burger-button").addEventListener("click", function() {
    document.querySelector(".header__nav-list").classList.add("header__nav--show");  
  });

let links = document.querySelectorAll(".header__nav-item");

links.forEach(el => {
  el.addEventListener("click", function() {
      document.querySelector(".header__nav-list").classList.remove("header__nav--show"); 
    });
})
