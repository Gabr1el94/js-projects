//Actions count caracters and words

const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");

let mode = "caracters";

toggleButton.addEventListener("click", () => {
    if (mode === "caracters") {
        mode = "words";
        toggleButton.textContent = "Count caracters";
    } else {
        mode = "caracters";
        toggleButton.textContent = "Count words";
    }

    input.dispatchEvent(new Event("input"));
})

input.addEventListener("input", () => {
    let count = 0;

    if (mode === "caracters") {
        count = input.value.length;
        counter.textContent = `${count} caracters(s)`;
    } else {
        const words = input.value.trim().split(/\s+/);
        count = input.value.trim() === "" ? 0 : words.length;
        counter.textContent = `${count} word(s)`;
    }
})