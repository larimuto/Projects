document.body.innerHTML =`
    <h1>Snow Showdown</h1>
    <main id="hero">
      <div class="snowman-container">
        <form class="snowman">
          <input type="text" id="snowman-name" placeholder="Snowman Name" />
          <input type="number" id="snowman-height" placeholder="Height (in centimeters)" />
          <input type="text" id="location" placeholder="Location" />
          <input type="text" id="creator-name" placeholder="Creator" />
          <select id="special-attribute" placeholder="Special Attribute">
            <option value="" disabled selected>Special Attribute</option>
            <option value="Carrot Nose">Carrot Nose</option>
            <option value="Hat/Pot">Hat/Pot</option>
            <option value="Branches for Arms">Branches for Arms</option>
            <option value="Button Eyes">Button Eyes</option>
          </select>
          <button type="submit" class="add-btn">Add</button>
        </form>
      </div>
      <div class="snowballs-container">
        <div class="snowball">
          <h2>&#10053;Snowman Preview&#10053;</h2>
          <ul class="snowman-preview"></ul>
        </div>
        <div class="snow">
          <h2>&#10053;Your Snowman&#10053;</h2>
          <ul class="snow-list"></ul>
        </div>
      </div>
    </main>
    <img id="back-img" src="./style/images/back-Snowman.png" alt="" hidden>
    <script src="app.js"></script>
`
result();
const addSnowman= {


      name: () => document.getElementById('snowman-name'),
      height: () => document.getElementById('snowman-height'),
      location: () => document.getElementById('location'),
      creator: () => document.getElementById('creator-name'),
      attribute: () => document.getElementById('special-attribute'),
      addBtn: () => document.querySelector('.add-btn')     
}
addSnowman.name().value = "Snowy";
addSnowman.height().value = "120";
addSnowman.location().value = "Sofia";
addSnowman.creator().value = "Marty";
addSnowman.attribute().value = "Button Eyes";

addSnowman.addBtn().click();

expect($(document.querySelector(".snowman-preview > li")).length).to.equal(1, "The snowman info must be added to the list")