element = document.getElementsByClassName("navbar-nav")[0];
element.addEventListener("click", active);
function active(blop) {
        elems = document.querySelector(".active");
    if(elems !=null) {
      elems.classList.remove("active");
    }
    blop.target.className = "nav-link active";
};
