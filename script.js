//const newImg = document.createElement("img");

//newImg.src = "https://tmssl.akamaized.net/images/foto/galerie/ronaldo-cristiano-2017-real-madrid-ballon-d-or-2016-0026751808hjpg-1698686328-120749.jpg";
// //document.body.append(newImg); //rasm chiqardim:::

// //const sunnatbee = prompt("nmadur kiriting")
// console.log(sunnatbee);
// const newTag = document.createElement("h1")
// newTag.textContent = "username"
// document.body.append(sunnatbee) //lyuboy so'zni domga chiqazdim:::


// const said = prompt("ism kirit ")
// console.log(said);
// const dilmuhammad = +prompt("yosh kiriting ")
// console.log(dilmuhammad);

// const doni = prompt("familya kiriting")
// console.log(doni);


// const mahmud = document.createElement("h1");
// mahmud.textContent = "username";
// document.body.append(said)
// document.body.append(dilmuhammad)
// document.body.append(doni)

// const userName = prompt("Enter your username");
// const newTag  = document.createElement("h1");
// newTag.textContent = userName;
// document.body.append(newTag);




const firstName = prompt("Ismingizni kiriting");
const lastName = prompt("Familyani kiriting");
const age = prompt("Yoshingizni kiriting");

let choice;
do {
  choice = prompt("Katta harf 1 или 2:\n1) Kichik harf\n2) Harflarni tanlang");
  if (choice !== "1" && choice !== "2") {
    alert("Siz tanlamadingiz va kiritmadingiz");
  }
} while (choice !== "1" && choice !== "2");


const formatText = (text) => (choice === "1" ? text.toLowerCase() : text.toUpperCase());


const result = `
  Имя: ${formatText(firstName)}<br>
  Фамилия: ${formatText(lastName)}<br>
  Возраст: ${formatText(age)}
`;
document.body.innerHTML = result;




 





