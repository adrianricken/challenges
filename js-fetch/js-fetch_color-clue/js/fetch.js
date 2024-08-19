import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // fetch data from url (colorApi)
  try {
    const response = await fetch(colorApiUrl);

    // response ok -> parse response (convert JSON data into javascript object) -> log to check result
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      // hex value and name of closest chosen color
      const closestColorHex = data.name.closest_named_hex;
      const closestColorName = data.name.value;

      setColorToGuess(closestColorHex, closestColorName);
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.error("An error occured");
  }

  // --^-- your code here --^--
}
