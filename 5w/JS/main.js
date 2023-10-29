"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var data = [
    {
        name: "Bulbasaur",
        height: "7",
        weight: "69",
        types: ["grass", "poison"],
        "base-Experience": "64",
        abilities: ["overgrow", "chlorophyll"],
        hp: "45",
        attack: "49",
        defense: "49",
        "special-attack": "65",
        "special-defense": "65",
        speed: "45",
    },
    {
        name: "Ivysaur",
        height: "10",
        weight: "130",
        types: ["grass", "poison"],
        "base-Experience": "142",
        abilities: ["overgrow", "chlorophyll"],
        hp: "60",
        attack: "62",
        defense: "63",
        "special-attack": "80",
        "special-defense": "80",
        speed: "60",
    },
    {
        name: "Venusaur",
        height: "20",
        weight: "1000",
        types: ["grass", "poison"],
        "base-Experience": "236",
        abilities: ["overgrow", "chlorophyll"],
        hp: "80",
        attack: "82",
        defense: "83",
        "special-attack": "100",
        "special-defense": "100",
        speed: "80",
    },
    {
        name: "Charmander",
        height: "6",
        weight: "85",
        types: ["fire"],
        "base-Experience": "62",
        abilities: ["blaze", "solar-power"],
        hp: "39",
        attack: "52",
        defense: "43",
        "special-attack": "60",
        "special-defense": "50",
        speed: "65",
    },
    {
        name: "Charmeleon",
        height: "11",
        weight: "190",
        types: ["fire"],
        "base-Experience": "142",
        abilities: ["blaze", "solar-power"],
        hp: "58",
        attack: "64",
        defense: "58",
        "special-attack": "80",
        "special-defense": "65",
        speed: "80",
    },
    {
        name: "Charizard",
        height: "17",
        weight: "905",
        types: ["fire", "flying"],
        "base-Experience": "240",
        abilities: ["blaze", "solar-power"],
        hp: "78",
        attack: "84",
        defense: "78",
        "special-attack": "109",
        "special-defense": "85",
        speed: "100",
    },
    {
        name: "Squirtle",
        height: "5",
        weight: "90",
        types: ["water"],
        "base-Experience": "63",
        abilities: ["torrent", "rain-dish"],
        hp: "44",
        attack: "48",
        defense: "65",
        "special-attack": "50",
        "special-defense": "64",
        speed: "43",
    },
    {
        name: "Wartortle",
        height: "10",
        weight: "225",
        types: ["water"],
        "base-Experience": "142",
        abilities: ["torrent", "rain-dish"],
        hp: "59",
        attack: "63",
        defense: "80",
        "special-attack": "65",
        "special-defense": "80",
        speed: "58",
    },
    {
        name: "Blastoise",
        height: "16",
        weight: "855",
        types: ["water"],
        "base-Experience": "239",
        abilities: ["torrent", "rain-dish"],
        hp: "79",
        attack: "83",
        defense: "100",
        "special-attack": "85",
        "special-defense": "105",
        speed: "78",
    },
    {
        name: "Caterpie",
        height: "3",
        weight: "29",
        types: ["bug"],
        "base-Experience": "39",
        abilities: ["shield-dust", "run-away"],
        hp: "45",
        attack: "30",
        defense: "35",
        "special-attack": "20",
        "special-defense": "20",
        speed: "45",
    },
];
var flexContainer = document.getElementsByClassName("flex-container")[0];
// let detailContainer = document.querySelector(".detail-wrap");
// console.log(detailContainer);
data.forEach(function (a, i) {
    var mainSelection = document.createElement("div");
    mainSelection.classList.add("flex-item");
    var mainSelectionImg = document.createElement("img");
    mainSelectionImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(i + 1, ".png");
    mainSelectionImg.classList.add("main-image");
    var mainSelectionDiv = document.createElement("div");
    mainSelectionDiv.insertAdjacentHTML("beforeend", "<div class=\"information\">\n      <h2>".concat(a.name, "</h2>\n      <p>Height: ").concat(a.height, " dm</p>\n      <p>Weight: ").concat(a.weight, " hg</p>\n      <p>Types: ").concat(a.types, "</p>\n      </div>"));
    mainSelectionDiv.addEventListener("click", function () {
        window.location.href = "./pokemon/pok.html";
        window.localStorage.setItem("pokemon", JSON.stringify(__assign({ id: i + 1 }, a)));
    });
    mainSelection.append(mainSelectionImg, mainSelectionDiv);
    flexContainer.appendChild(mainSelection);
});



// data.forEach(function (a, i) {
//   // 1)
//   let detailImg = document.createElement("img");
//   detailImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
//     i + 1
//   }.png`;
//   detailImg.classList.add("image-item");
//   // 2)
//   let detailH1 = document.createElement("h1");
//   detailH1.style.color = "white";
//   detailH1.innerHTML = a.name;
//   // 3)
//   let detailDiv = document.createElement("div");
//   detailDiv.classList.add("table-box");
//   let detailTable = document.createElement("table");
//   detailTable.classList.add("table-style");
//   for (let key in a) {
//     let value = a[key];
//     detailTable.insertAdjacentHTML(
//       "beforeend",
//       `<tr>
//     <th>${key}</th>
//     <td>${value}</td>
//   </tr>`
//     );
//   }
//   detailDiv.appendChild(detailTable);
//   detailContainer.append(detailImg, detailH1, detailDiv);
// });
