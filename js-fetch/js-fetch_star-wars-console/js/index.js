console.clear();

async function fetchData() {
  try {
    const url = "https://swapi.py4e.com/api/people";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      console.log(
        "Obi-Wan Kenobi: ",
        data.results.find((character) => character.name === "Obi-Wan Kenobi")
      );
      const eyeColorR2D2 = data.results.find((item) => item.name === "R2-D2");
      console.log("eyeColorR2D2: ", eyeColorR2D2.eye_color);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An error occured: ", error);
  }
}

fetchData();
