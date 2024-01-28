function attachEventsListeners() {
  let buttons = document.querySelectorAll('input[type="button"]');

  // attack the liseners
  currentButtons = Array.from(buttons);

  currentButtons.forEach((x) => {
    x.addEventListener("click", event);
  });

  // go into the event
  function event(e) {
    //  if you loike to   clear all textareas , insert a check here  for target event , or were does it comes from and assing  0 to all others

    // take the text from the inputs and just make em 0 if they are ""

    let cdays = Number(document.getElementById("days").value) || 0;
    let chours = Number(document.getElementById("hours").value) || 0;
    let cminutes = Number(document.getElementById("minutes").value) || 0;
    let cseconds = Number(document.getElementById("seconds").value) || 0;

    // calculations for everyting , add itself just to fill  the blanks since we are not making any checks

    days = cseconds / 60 / 60 / 24 + (cminutes * 60) / 24 + chours / 24 + cdays;
    hours = cdays * 24 + cminutes / 60 + cseconds / 60 / 60 + chours;
    minutes = cdays * 24 * 60 + chours * 60 + cseconds / 60 + cminutes;
    seconds =
      cseconds + cminutes * 60 + chours * 60 * 60 + cdays * 24 * 60 * 60;

    // push the output

    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
  }
}
