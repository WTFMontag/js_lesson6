console.log("Javascript - лучший язык программирования!");
window.addEventListener("DOMContentLoaded", function () {
  
  // Change the greeting "hello Everyone!" to "Hello, Виталий Валентинович!"
  setTimeout(() => {
    let hello = document.querySelector("#greeting");
    hello.textContent = 'Привет, Виталий Валентинович!';
  }, 3000);

// Set <yellow> backgound color for every <li>
  setTimeout(() => {
    document.querySelector("#essentials").style.backgroundColor = "yellow";
  }, 3200);

//Create picture tag and set attribute src and inclose it in div with identification #greeting
  setTimeout(() => {
    let pictureNew = document.createElement("img");
    pictureNew.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector('#greeting').appendChild(pictureNew);
  }, 3400);

// Create and add ul element at the end of the body with class "todo-items"
  setTimeout(() => {
    let ulNew = document.createElement("ul");
    ulNew.classList.add("todo-items");
    document.querySelector("body").appendChild(ulNew);
  }, 3600);
  
// Go trough the array and create for each element tag li 
    let arrayNew = [];
  setTimeout(() => {
    let list = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];
    for (let i = 0; i < list.length; i++) {
      let addLi = document.createElement('li');
      addLi.textContent = list[i];
      arrayNew[i] = addLi;
    }
  }, 3800);

// Add tag li for each element created before in your construction ul with class "todo-items".
  setTimeout(() => {
    let liInClass = document.querySelector(".todo-items");
    for (let i = 0; i < arrayNew.length; i++) {
      liInClass.appendChild(arrayNew[i]);
    }
  }, 3800);

 // Add class `selected` to `<li>` after clicking it. Delete it from eny other 'li' elements.
  setTimeout(() => {
    let classNew = document.querySelector("#essentials")
    classNew.addEventListener("click", function (event) {
    let selectedNew = document.querySelectorAll('.selected')
    let object = event.target
    Array.from(selectedNew).forEach(selectedNew => {
      selectedNew.classList.remove('selected')
    });

    object.classList.add('selected')
    let imagesNew =
    {
      "молоко": "images/milk.jpg",
      "мёд": "images/honey.jpg",
      "вода": "images/water.jpg",
      "вино": "images/wine.jpg",
      "пиво": "images/beer.jpg",
    }
    let  title = object.innerText;
    let images = document.querySelector("#logo");
    images.setAttribute('src', imagesNew[title]);
  });
  }, 4000);

 // Change the picture so that it would be the last selected food
  setTimeout(() => {
     let change = document.querySelector(".todo-items")
     change.addEventListener("click", function (e) {
       let changeNew = document.querySelectorAll('.selected')
       let objectNew = e.target
       Array.from(changeNew).forEach(selectedTo => {
         changeNew.classList.remove('selected')
        });
        objectNew.classList.add('selected')
      });
    }, 4000);

// When the pointer is on the grey div it will be deleted from DOM.
  setTimeout(() => {
    let deleteNow  = document.querySelector('#ghosting');
    deleteNow.addEventListener("mouseover", removal, false);

    function removal(e) {
      deleteNow.remove();
    }
  }, 4200);

//When the pointer is on the orange div its width will be doubled. When we leave div boundaries its width come back to the original size.
  setTimeout(() => {
    let increase = document.querySelector("#resize");
    let size = increase.clientWidth;

    increase.addEventListener("mouseover", () =>{
      increase.style.width = size * 2 + "px"}, false);

      increase.addEventListener("mouseout", () =>{ 
        increase.style.width = size + "px" }, false);
  }, 4200);

// When the button is active - delete class `selected` in every `<li>` element and change the picture to `panic.jpg`.
  setTimeout(() => {
    let reset = document.querySelector("#reset")
    reset.addEventListener("click", delNew, false);
    function delNew() {
      let changeNow = document.querySelectorAll(".selected");
      changeNow.forEach(del => del.classList.remove("selected"))
      let picture = document.querySelector("#logo");
      picture.setAttribute("src", "images/panic.jpg");
  }
  }, 4200);

  // When we enter key 1, 2, 3, 4, 5, 6, 7, 8, 9 or 0 on page show the message "I HATE NUMBEEERS!"
  setTimeout(() => {
    window.addEventListener("keypress", nomderNot, false);
    function nomderNot (e) {
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        alert("«Я НЕНАВИЖУ ЧИСЛАААААА!»");
      }
    }
  }, 4200);
})
