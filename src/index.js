import { instantiateGrid } from './grid';
import './style.css';

async function getData() {
    const url = "https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        return(data);

      } catch (error) {
        console.error(error.message);
      }
}


getData().then((data) => {
    instantiateGrid(data);
})

// For each champion (item in data)
// Create a new div class="champion"
// data.Aatrox.image.sprite