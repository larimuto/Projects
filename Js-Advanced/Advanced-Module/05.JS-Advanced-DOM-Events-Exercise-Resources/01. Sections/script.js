function create(words) {
  const main = document.getElementById("content");

  // fixex the  display style of the element

  function event(event) {
    const target = event.target;

    target.firstChild.style.display = "inline-block";
  }
  //  make all the needed <div> s
  for (const word of words) {
    let curentSection = document.createElement("div");
    let p = document.createElement("p");

    p.textContent = word;
    p.style.display = "none";
    curentSection.addEventListener("click", event);
    curentSection.appendChild(p);
    main.appendChild(curentSection);
  }
}
