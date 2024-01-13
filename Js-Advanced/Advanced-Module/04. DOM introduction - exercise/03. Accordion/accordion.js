function toggle() {
    // take the  button  name AS state .
  let state = document.querySelector(".head .button").textContent.toLowerCase();
  // take the element that hides the text for manipulations
  let showMore = document.getElementById("extra");
//check the state and exchange the  disolay and switch the  textcontent of  the button element
  if (state === "more") {
    document.querySelector(".head .button").textContent = "Less";
    showMore.style.display = "block";
  } else {
    document.querySelector(".head .button").textContent = "More";
    showMore.style.display = "none";
  }
}
