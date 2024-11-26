const selectionGrid = document.querySelector(".selection-grid");
const championGrid = document.querySelector(".champion-grid");
const selected = document.querySelector(".selected");
const header = document.querySelector(".selection-header");
const championIconOne = document.querySelectorAll(".champion-icon-one");
const championIconTwo = document.querySelectorAll(".champion-icon-two");
let championOne;
let championTwo

export function instantiateGrid(data) {
    for (let champion in data.data) {
        const container = document.createElement("div");
        container.classList.add("champion");
        const img = document.createElement("img");
        
        const src = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${data.data[champion].image.full}`;
    
    
        img.src = src;
        container.appendChild(img);

        container.addEventListener("click", () => {
            if (selected.childElementCount < 1) {
                updateSelected(data.data[champion]);
                updateHeader();
                championOne = data.data[champion];
            } else if (selected.childElementCount < 2) {
                updateSelected(data.data[champion]);
                championTwo = data.data[champion];
                loadIcons(championOne, championTwo);
            }
        })

        championGrid.appendChild(container);
    }
    
}

function updateSelected(champion){
    const container = document.createElement("div");
    const img = document.createElement("img");

    img.src = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${champion.image.full}`;
    
    container.appendChild(img);
    selected.appendChild(container);
}

function updateHeader() {
    header.textContent = "Second Champion";
}

function loadIcons(championOne, championTwo){
    console.log(championOne, championTwo);
    selectionGrid.classList.add("hidden");
    const iconOne = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${championOne.image.full}`;
    const iconTwo = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${championTwo.image.full}`;

    for (let i = 0; i < championIconOne.length; i++) {
        championIconOne[i].src = iconOne;
    }
    for (let i = 0; i < championIconTwo.length; i++) {
        championIconTwo[i].src = iconTwo;
    }
}