//function of dynamic table
function displayData(triangleName, triangleArea){
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count}</th>
    <td>${triangleName}</td>
    <td>${triangleArea}<span> cm<sup>2</sup></span</td>
    <td><button class="btn btn-info">Convert To M <sup>2</sup> </button></td>
    `;
    const tbl = document.getElementById('tbl-container')
    tbl.appendChild(tr);
}


//function of input remover
function removeInput(inp1, inp2){
    inp1.value = '';
    inp2.value = '';
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//function of mouseover
function color (elementId){
    const card = document.getElementById(elementId);
    card.addEventListener('mouseover', function(){
      card.style.backgroundColor = getRandomColor();
    });
    card.addEventListener('mouseout', function(){
      card.style.backgroundColor = 'white';
    });
}

//code for card mouseovers
color('triangle-card');
color('rectangle-card');
color('parallelogram-card');
color('rhombus-card');
color('pentagon-card');
color('ellipse-card');