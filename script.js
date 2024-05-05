
function add() {
    let n1 = document.getElementById('t1').value;
    let n2 = document.getElementById('t2').value;
    let n3 = Number(n1) + Number(n2);
    document.getElementById('ans').innerHTML = n3;
}

function sub() {
    let n1 = document.getElementById('t1').value;
    let n2 = document.getElementById('t2').value;
    let n3 = Number(n1) - Number(n2);
    document.getElementById('ans').innerHTML = n3;
}

function mul() {
    let n1 = document.getElementById('t1').value;
    let n2 = document.getElementById('t2').value;
    let n3 = Number(n1) * Number(n2);
    document.getElementById('ans').innerHTML = n3;
}

function div() {
    let n1 = document.getElementById('t1').value;
    let n2 = document.getElementById('t2').value;

    // Check for division by zero
    if (Number(n2) === 0) {
        document.getElementById('ans').innerHTML = "Cannot divide by zero";
    } else {
        let n3 = Number(n1) / Number(n2);
        document.getElementById('ans').innerHTML = n3;
    }
}
