console.log("loading app");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loaded");
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    const outputField = document.getElementById('outputField') as HTMLParagraphElement;
  
    submitButton.addEventListener('click', () => {
      const userInput = inputField.value;
      const output: string = parseLtGt(userInput);
      outputField.textContent = `The parsed string is: ${output}`;
    });
  });

export function parseLtGt(userInput: string): string {
    return userInput
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
}
