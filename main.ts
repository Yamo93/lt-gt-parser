document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    const outputField = document.getElementById('outputField') as HTMLParagraphElement;
  
    submitButton.addEventListener('click', () => {
      const userInput = inputField.value;
      const output: string = parseLtGt(userInput);
      outputField.textContent = `The parsed string is: ${output}`;
    });
  });

function parseLtGt(userInput: string): string {
    return userInput
        .replace("&lt;", "<")
        .replace("&gt;", ">");
}
