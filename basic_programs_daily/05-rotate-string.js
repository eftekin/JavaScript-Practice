/**
 * Animates the characters of a string by rotating them
 * @param {string} id - ID of the target HTML element
 */
const animate_string = (id) => {
  // Get the HTML element by its id
  const element = document.getElementById(id);

  // Access the text node inside the element (assuming no other children)
  let textNode = element.childNodes[0];

  // Extract the initial text content of the text node
  let text = textNode.data;

  // Set up an interval to rotate the characters in the text every 100 milliseconds
  setInterval(() => {
    // Move the last character to the beginning of the string
    text = text[text.length - 1] + text.substring(0, text.length - 1);

    // Update the text content of the text node with the modified string
    textNode.data = text;
  }, 100);
};
