window.addEventListener("load", solve);
function solve() {
  const form = document.getElementById("snowman");
  const edit = document.getElementById("EditBtn");
  const next = document.getElementById("NextBtn");
  const send = document.getElementById("SendBtn");
  const add = document.getElementById("SubmitBtn");

  function myFunction(id) {
    let x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  let NameValue = "";
  let HeightValue = "";
  let LocationValue = "";
  let CreatorValue = "";
  let AttributeValue = "";
  form?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const snowmanName = document.getElementById("snowman-name").value;
    const snowmanHeight = document.getElementById("snowman-height").value;
    const location = document.getElementById("location").value;
    const creatorName = document.getElementById("creator-name").value;
    const specialAttribute = document.getElementById("special-attribute").value;

    document
      .getElementById("Name")
      .insertAdjacentHTML("beforeend", snowmanName);
    NameValue = snowmanName;
    document
      .getElementById("Height")
      .insertAdjacentHTML("beforeend", snowmanHeight);
    HeightValue = snowmanHeight;
    document
      .getElementById("Location")
      .insertAdjacentHTML("beforeend", location);
    LocationValue = location;
    document
      .getElementById("Creator")
      .insertAdjacentHTML("beforeend", creatorName);
    CreatorValue = creatorName;
    document
      .getElementById("Attribute")
      .insertAdjacentHTML("beforeend", specialAttribute);
    AttributeValue = specialAttribute;
    document.getElementById("SubmitBtn").disabled = true;

    form.reset();
  });

  edit?.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("SubmitBtn").disabled = false;
    document.getElementById("snowman-name").value = NameValue;
    document.getElementById("snowman-height").value = HeightValue;
    document.getElementById("location").value = LocationValue;
    document.getElementById("creator-name").value = CreatorValue;
    document.getElementById("special-attribute").value = AttributeValue;
    myFunction("snowman-preview");
  });

  next?.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    document
      .getElementById("SubmitName")
      .insertAdjacentHTML("beforeend", NameValue);
    document
      .getElementById("SubmitHeight")
      .insertAdjacentHTML("beforeend", HeightValue);
    document
      .getElementById("SubmitLocation")
      .insertAdjacentHTML("beforeend", LocationValue);
    document
      .getElementById("SubmitCreator")
      .insertAdjacentHTML("beforeend", CreatorValue);
    document
      .getElementById("SubmitAttribute")
      .insertAdjacentHTML("beforeend", AttributeValue);
    myFunction("snowman-preview");
    myFunction("snow-list");
  });

  send?.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const body = document.getElementById("body");

    body.innerHTML = `<h1>Hello World</h1>`;
    body.innerHTML += `<img id="back-img" src="./style/images/back-Snowman.png"/>`;
    body.innerHTML += `<script src="app.js"></script>`;
    body.innerHTML += `<button onclick="window.location.reload()" class="back-bt">Back</button>`;
  });

  add?.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    myFunction("snowman-preview");
  });
}
