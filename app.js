const inpBox = document.getElementById("input-box");
const list = document.getElementById("list");
function AddTask() {
    if (inpBox.value === '') {
        alert("add a task ");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inpBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

    }
    inpBox.value = "";
    saveData();
}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("mytask", list.innerHTML);
}
function SHOWMYTASK(){
  list.innerHTML = localStorage.getItem("mytask");
}
SHOWMYTASK();

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('toggled'); // Add a class to control visibility
});
