let budget = 2000;
let display = document.getElementById('initialBudget').innerHTML = budget + '€';


let appledevices = [900, 700, 500, 300, 200, 100]

for (let i = 0; i < appledevices.length; i++) {
    document.getElementById('container').innerHTML += `<button onclick="sub(${appledevices[i]})"> €${appledevices[i]}</button>`
}

function sub (price) {
budget -= price
document.getElementById('initialBudget').innerHTML = budget + '€';

if (budget <= 1000)  {
    document.getElementById('halfBudget').innerHTML = 'HALF BUDGET' 
    document.getElementById('halfBudget').style.backgroundColor = 'yellow';

} 

if (budget <=500 ) {
    document.getElementById('halfBudget').innerHTML = 'ALERT' 
    document.getElementById('halfBudget').style.backgroundColor = 'red';
}

if (budget == 0 ) {
    document.getElementById('halfBudget').innerHTML = 'YOU ARE POOR' 
    document.getElementById('halfBudget').style.backgroundColor = 'green';
}

if (budget < 0 ) {
    document.getElementById('halfBudget').innerHTML = 'WTF MAN' 
    document.getElementById('halfBudget').style.backgroundColor = 'orange';
}
}
