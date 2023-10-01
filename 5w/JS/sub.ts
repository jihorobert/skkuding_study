const infoString = window.localStorage.getItem("pokemon");
let info;
// const info: { [key: string]: any } = JSON.parse(infoString);
if (infoString) {
  const info: { [key: string]: any } = JSON.parse(infoString);
  // info를 사용하는 나머지 코드 작성
} else {
  // "pokemon" 항목이 로컬 스토리지에 없을 때의 처리
}

let detailContainer = document.getElementById("detailWrap");

// detailContainer.innerHTML = "";
// 1)
let detailImg = document.createElement("img");
detailImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
  info!.id
}.png`;
detailImg.classList.add("image-item");

// 2)
let detailH1 = document.createElement("h1");
detailH1.style.color = "white";
detailH1.innerHTML = info!.name;

// 3)
let detailDiv = document.createElement("div");
detailDiv.classList.add("table-box");

let detailTable = document.createElement("table");
detailTable.classList.add("table-style");
for (let key in info!) {
  let value = info[key];
  detailTable.insertAdjacentHTML(
    "beforeend",
    `<tr>
  <th>${key}</th>
  <td>${value}</td>
</tr>`
  );
}


detailDiv.append(detailTable);
detailContainer!.append(detailImg, detailH1, detailDiv);