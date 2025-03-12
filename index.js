console.log("loading app");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loaded");
    const inputField = document.getElementById('inputField');
    const submitButton = document.getElementById('submitButton');
    const outputField = document.getElementById('outputField');
    submitButton.addEventListener('click', () => {
        const userInput = inputField.value;
        const output = parseLtGt(userInput);
        outputField.textContent = `The parsed string is: ${output}`;
    });
});
export function parseLtGt(userInput) {
    return userInput
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}
//# sourceMappingURL=index.js.map