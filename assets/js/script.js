const inputBox = document.getElementById("input-list");
const addBtn = document.getElementById("button");
const ulList = document.getElementById("ul-list");

addBtn.addEventListener("click", () => {
    event.preventDefault();
    const inputText = inputBox.value.trim();
    
    if (inputText !== "") {
        addTask(inputText);
        inputBox.value = "";
    }
    else{
        alert("First, add your task below, please");
}
});

function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">X</button>
    `;
    ulList.appendChild(li);

    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
}