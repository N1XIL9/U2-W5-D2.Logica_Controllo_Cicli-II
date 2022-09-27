let budget = 2000;
document.getElementById('initialBudget').innerHTML = budget + '$';

let appledevices = [500, 300, 200, 100]

for (let i = 0; i < appledevices.length; i++) {
    document.getElementById('container').innerHTML += `<button onclick="sub(${appledevices[i]})"> $${appledevices[i]}</button>`
}

function sub (price) {
budget -= price
document.getElementById('initialBudget').innerHTML = budget + '$';

if (budget <= 1000)  {
    // document.getElementById('initialBudget').innerHTML = 'half budget'
    alert('half budget')
}

if (budget = 0)  {
    // document.getElementById('initialBudget').innerHTML = 'You are poor'
    alert('You are poor')
}
}
