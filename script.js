const buildBtn = document.getElementById('build-new-grid');
const grid = document.getElementById('grid');
const newGrid = document.getElementById('new-grid');

buildBtn.addEventListener('click', function() {
    'use strict';
    grid.style.display = 'none';
    newGrid.style.display = 'grid';
    const number = prompt('enter a number');
    const numbers = parseInt(number) * parseInt(number);
    console.log(numbers);
    let auto = '';
    for(let i =0; i < number; i++) {
        auto += 'auto ';
    }
    for(let i = 1; i <= numbers; i++) {
        const div = document.createElement('div');
        // div.innerHTML = '.';
        newGrid.appendChild(div);
        div.addEventListener('mouseover',function() {
            this.style.backgroundColor = '#fd3f3f';
        })
        div.addEventListener('mouseout',function() {
            this.style.backgroundColor = '#fff';
        })
    }
    console.log(auto);
    newGrid.style.gridTemplateColumns = auto;
    newGrid.style.gridTemplateRows = auto;
})

for(let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    // div.innerHTML = '.';
    div.setAttribute('class', 's' + i)
    grid.appendChild(div);
    const divs = document.getElementsByClassName('s' + i);
    for(let j = 0; j < divs.length; j++) {
        divs[j].addEventListener('mouseover',function() {
            this.style.backgroundColor = '#fd3f3f';
        })
        divs[j].addEventListener('mouseout',function() {
            this.style.backgroundColor = '#fff';
        })
    }
}
// grid.addEventListener('mouseover', function() {
//     grid.style.backgroundColor = '#F0F';
// })
// grid.addEventListener('mouseout', function() {
//     grid.style.backgroundColor = '#eee';
// })