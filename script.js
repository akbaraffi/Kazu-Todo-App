const list = document.getElementById("list-container");
const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const task = input.value.trim();

    if (task === '') {
        alert("You must write something!");
        return;
    }
    
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "flex items-center justify-between";

    const leftContainer = document.createElement("div");
    leftContainer.className = "flex items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "h-6 w-6";

    const label = document.createElement("label");
    label.className = "py-3 ml-2 text-lg";
    label.textContent = task;

    const delBtn = document.createElement("a");
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    delBtn.addEventListener("click", (e) => {
        e.preventDefault();
        li.remove();
    });

    list.appendChild(li);
    li.appendChild(div);
    div.appendChild(leftContainer);
    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(label);
    div.appendChild(delBtn);

    input.value = '';
});
