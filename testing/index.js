let dogs = ["pitbull", "poodle"];



document.getElementById("click-alert").onclick = function () {
    for (i = 1; i <= 10; i++) {
        alert(i)
    }
}

function getDogs() {
    for (i = 0; i < dogs.length; i++) {
        document.getElementById("list").appendChild(document.createElement("li")).innerText = dogs[i]
    }
}

document.getElementById("add-dog").onclick = function () {
    dogs.push(document.getElementById("dog").value)
    document.getElementById("list").innerHTML = ""
    document.getElementById("dog").value = ""
    getDogs()
}


getDogs()