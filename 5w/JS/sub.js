"use strict";
var info = JSON.parse(window.localStorage.getItem("pokemon"));
var detailContainer = document.getElementById("detailWrap");
// detailContainer.innerHTML = "";
// 1)
var detailImg = document.createElement("img");
detailImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(info.id, ".png");
detailImg.classList.add("image-item");
// 2)
var detailH1 = document.createElement("h1");
detailH1.style.color = "white";
detailH1.innerHTML = info.name;
// 3)
var detailDiv = document.createElement("div");
detailDiv.classList.add("table-box");
var detailTable = document.createElement("table");
detailTable.classList.add("table-style");
for (var key in info) {
    var value = info[key];
    detailTable.insertAdjacentHTML("beforeend", "<tr>\n  <th>".concat(key, "</th>\n  <td>").concat(value, "</td>\n</tr>"));
}
detailDiv.append(detailTable);
detailContainer.append(detailImg, detailH1, detailDiv);
