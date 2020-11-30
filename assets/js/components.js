/* Navbar */
let toggle = document.querySelector("#toggle");
    let navbar = document.querySelector("#navbar");
    toggle.addEventListener('click', open);
    function open() {
      navbar.classList.toggle("hidden");
    }
    
/* Dropdown */

  function openDropdown(event,dropdownID){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    var popper = new Popper(element, document.getElementById(dropdownID), {
      placement: 'bottom-start'
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
  }
