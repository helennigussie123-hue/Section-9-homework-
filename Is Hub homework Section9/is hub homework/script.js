const message = document.getElementById("message");

document.getElementById("textButton").addEventListener("click", function () {
    message.textContent = "Hello";
});

document.getElementById("colorButton").addEventListener("click", function () {
    message.style.color = "red";
});

function changeImage(filename) {
    document.getElementById("mainImage").src = filename;
}

const tasks = document.querySelectorAll(".task");

tasks.forEach(function (task) {
    task.addEventListener("click", function () {
        task.classList.toggle("done");
    });
});

let count = 0;

document.getElementById("plus").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
});

document.getElementById("minus").addEventListener("click", function () {
    if (count > 0) {
        count--;
        document.getElementById("count").textContent = count;
    }
});

function nextItem(item) {
    const next = item.nextElementSibling;

    if (next) {
        console.log(next.textContent);
    } else {
        console.log("No more items");
    }
}