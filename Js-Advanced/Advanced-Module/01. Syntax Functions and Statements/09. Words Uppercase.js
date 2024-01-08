function uppercut(string) {
  let regex = /\w+/g;

  let final = string.match(regex);

  console.log(final.join(", ").toUpperCase());
}
uppercut("Hi, how are you?");
