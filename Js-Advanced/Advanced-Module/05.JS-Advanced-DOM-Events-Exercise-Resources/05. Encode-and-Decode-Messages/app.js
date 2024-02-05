function encodeAndDecodeMessages() {
  const sendButton = document.querySelector("#main>div button");
  sendButton.addEventListener("click", send);
  const decodeButton = document.querySelector(
    "#main > div:nth-child(2)>button"
  );
  decodeButton.addEventListener("click", decode);
  let textAreas = Array.from(document.querySelectorAll("textarea"));
  console.log(textAreas[0].value);

  function send() {
    let text = textAreas[0].value;

    newText = text
      .split("")
      .map((x) => String.fromCharCode(x.charCodeAt(0) + 1))
      .join("");

    textAreas[1].value = newText;
    textAreas[0].value = "";
  }

  function decode() {
    let text = textAreas[1].value;

    newText = text
      .split("")
      .map((x) => String.fromCharCode(x.charCodeAt(0) - 1))
      .join("");

    textAreas[1].value = newText;
  }
}
