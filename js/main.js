(() => {

  console.log("hello from js!")
  //find the elements in the document
  //class has a "."
  // java setup is top make connects and in middle add functions bottom events
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector("h1"),
    // svgImg = document.querySelector("#badge"),
    allSVGs = document.querySelectorAll(".svg");

//this functions changes header text :)
  function changeText() {
    myHeading.textContent = "whats up";
  }
// this function should log the id for each svg to the console 
  function logSVG() {
    console.log(this.id);
  }
// things the user can do to make stuff happen on the page
  toggleButton.addEventListener("click", changeText);

 // svhImg.addEventListener("click", logSVG);
 
 allSVGs.forEach(item => item.addEventListener("click", logSVG));

//  $("h1").align
//document.querySelector("h1").textContent = "whatssss up";



})();
