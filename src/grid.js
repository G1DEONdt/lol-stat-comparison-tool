const selectionGrid = document.querySelector(".selection-grid");
const championGrid = document.querySelector(".champion-grid");
const selected = document.querySelector(".selected");
const header = document.querySelector(".selection-header");
const championIconOne = document.querySelectorAll(".champion-icon-one");
const championIconTwo = document.querySelectorAll(".champion-icon-two");
const statContainer = document.querySelector(".stat-container");
let c1;
let c2;


const c1Attack = document.querySelector(".c1-atk");
const c2Attack = document.querySelector(".c2-atk");


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
                c1 = data.data[champion];
            } else if (selected.childElementCount < 2) {
                updateSelected(data.data[champion]);
                c2 = data.data[champion];
                loadIcons(c1, c2);
                renderStats();
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

function loadIcons(c1, c2){
    console.log(c1, c2);
    selectionGrid.classList.add("hidden");
    const iconOne = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${c1.image.full}`;
    const iconTwo = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${c2.image.full}`;

    for (let i = 0; i < championIconOne.length; i++) {
        championIconOne[i].src = iconOne;
    }
    for (let i = 0; i < championIconTwo.length; i++) {
        championIconTwo[i].src = iconTwo;
    }
}

function renderStats() {
    statContainer.classList.remove("hidden");
    // STAT ARRAYS
    // Offensive Stats
    let c1AttackArray = calculateStat(c1.stats.attackdamage, c1.stats.attackdamageperlevel);
    let c2AttackArray = calculateStat(c2.stats.attackdamage, c2.stats.attackdamageperlevel);
    let c1AttackSpeedArray = calculateAttackSpeed(c1.stats.attackspeed, c1.stats.attackspeedperlevel);
    let c2AttackSpeedArray = calculateAttackSpeed(c2.stats.attackspeed, c2.stats.attackspeedperlevel);
    let c1AttackRangeArray = calculateAttackRange( c1, c1.stats.attackrange);
    let c2AttackRangeArray = calculateAttackRange( c2, c2.stats.attackrange);
    
    // Defensive Stats
    let c1HealthArray = calculateStat(c1.stats.hp, c1.stats.hpperlevel);
    let c2HealthArray = calculateStat(c2.stats.hp, c2.stats.hpperlevel);
    let c1HealthRegenArray = calculateStat(c1.stats.hpregen, c1.stats.hpregenperlevel);
    let c2HealthRegenArray = calculateStat(c2.stats.hpregen, c2.stats.hpregenperlevel);
    let c1ArmourArray = calculateStat(c1.stats.armor, c1.stats.armorperlevel);
    let c2ArmourArray = calculateStat(c2.stats.armor, c2.stats.armorperlevel);
    let c1MagicResistArray = calculateStat(c1.stats.spellblock, c1.stats.spellblockperlevel);
    let c2MagicResistArray = calculateStat(c2.stats.spellblock, c2.stats.spellblockperlevel);

    // DOM RENDERING

    const c1Attack = document.querySelector(".c1-atk");
    const c2Attack = document.querySelector(".c2-atk");
    const c1AttackSpeed = document.querySelector(".c1-atkspd");
    const c2AttackSpeed = document.querySelector(".c2-atkspd");
    const c1AttackRange = document.querySelector(".c1-atkrange");
    const c2AttackRange = document.querySelector(".c2-atkrange");
    const c1Health = document.querySelector(".c1-hp");
    const c2Health = document.querySelector(".c2-hp");
    const c1HealthRegen = document.querySelector(".c1-hpregen");
    const c2HealthRegen = document.querySelector(".c2-hpregen");
    const c1Armour = document.querySelector(".c1-armour");
    const c2Armour = document.querySelector(".c2-armour");
    const c1MagicResist = document.querySelector(".c1-mr");
    const c2MagicResist = document.querySelector(".c2-mr");

    c1AttackArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1Attack.appendChild(td);
    });

    c2AttackArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2Attack.appendChild(td);
    });

    c1AttackSpeedArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c1AttackSpeed.appendChild(td);
    });

    c2AttackSpeedArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c2AttackSpeed.appendChild(td);
    });

    c1AttackRangeArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = element;
        c1AttackRange.appendChild(td);
    });

    c2AttackRangeArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = element;
        c2AttackRange.appendChild(td);
    });

    c1HealthArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1Health.appendChild(td);
    });

    c2HealthArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2Health.appendChild(td);
    });

    c1HealthRegenArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c1HealthRegen.appendChild(td);
    });

    c2HealthRegenArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Number((element).toFixed(2));
        c2HealthRegen.appendChild(td);
    });

    c1ArmourArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1Armour.appendChild(td);
    });

    c2ArmourArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2Armour.appendChild(td);
    });

    c1MagicResistArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c1MagicResist.appendChild(td);
    });

    c2MagicResistArray.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = Math.floor(element);
        c2MagicResist.appendChild(td);
    });
}

function calculateStat(baseStat, growthFactor) {
    let array = [];

    for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
        if (currentLevel == 1){
            array.push(baseStat);
        } else {
            array.push(baseStat + growthFactor * (currentLevel - 1) * ((0.7025 + 0.0175 * (currentLevel - 1))));
        }
    }

    return array;
};

function calculateAttackSpeed(baseStat, growthFactor){
    let array = [];

    for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
        if (currentLevel == 1) {
            array.push(baseStat);
        } else {
            array.push(baseStat * (1 + ((growthFactor * (currentLevel - 1) * ((0.7025 + 0.0175 *(currentLevel - 1)))) / 100)));
        }
    }

    return array;
}

function calculateAttackRange(champion, baseStat) {
    let array = [];

    if (champion.id == "Tristana"){
        for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
            array.push(baseStat +(0 + 150 / 17 * (currentLevel - 1)));
        };
    } else {
        for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
            array.push(baseStat);
        };
    }

    return array;
}