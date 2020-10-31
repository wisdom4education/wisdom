
function q1function() {
    var q1dots = document.getElementById("q1dots");
    var q1more = document.getElementById("q1more");
    var q1btn = document.getElementById("q1btn");

if (q1dots.style.display === "none") {
q1dots.style.display = "inline";
q1btn.innerHTML = "Show Answer";
q1more.style.display = "none";
}
else {
q1dots.style.display = "none";
q1btn.innerHTML = "Hide Answer";
q1more.style.display = "inline";
}
}

