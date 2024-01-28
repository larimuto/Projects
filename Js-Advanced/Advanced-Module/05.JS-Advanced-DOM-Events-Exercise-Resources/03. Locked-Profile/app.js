function lockedProfile() {
  // take all the buttons on the page
  let showMore = document.querySelectorAll("button");

  showMore = Array.from(showMore);

  function event(element) {
    const curButton = element.target;
    const mainElement = curButton.parentElement;
    const isCheked = mainElement.querySelector("input[type=radio]").checked;

    const hiddenDiv = mainElement.querySelector("div");
    // check if the  divs hidden  and if the profile is unlocked, then show it and  change the button
    if (hiddenDiv.style.display === "" && isCheked !== true) {
      hiddenDiv.style.display = "block";
      curButton.textContent = "Hide it";
      //check if the  profile is unlocked and the div is shown , then hide it and change the button
    } else if (isCheked !== true && hiddenDiv.style.display === "block") {
      hiddenDiv.style.display = "";
      curButton.textContent = "Show more";
    }
  }
  // attack liosteners to all of the buttons
  for (const element of showMore) {
    element.addEventListener("click", event);
  }
}
