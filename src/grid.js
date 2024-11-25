const grid = document.querySelector(".champion-grid");

export function instantiateGrid(data) {

    for (let champion in data.data) {
        const container = document.createElement("div");
        container.classList.add("champion");
        const img = document.createElement("img");
        
        const src = `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${data.data[champion].image.full}`;
    
    
        img.src = src;
        container.appendChild(img);

        container.addEventListener("click", () => {
            console.log(champion);

            // Add to first champion selection and update next section.
        })

        grid.appendChild(container);
    }
    
}

