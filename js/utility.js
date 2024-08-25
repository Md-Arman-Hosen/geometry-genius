function displayData(triangleName, triangleArea){
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count}</th>
    <td>${triangleName}</td>
    <td>${triangleArea}</td>
    <td><button class="btn btn-info">Convert To M</button></td>
    `;
    const tbl = document.getElementById('tbl-container')
    tbl.appendChild(tr);
}

function removeInput(inp1, inp2){
    inp1.value = '';
    inp2.value = '';
}

