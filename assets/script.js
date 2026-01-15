function myFunction() {
  var navbarLinkElements = document.getElementsByClassName("navbar-link")
  for (var i = 0; i < navbarLinkElements.length; i++) {
    var element = navbarLinkElements[i];
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      console.log(element.style.display)
      element.style.display = "block";
    }
  }
}
