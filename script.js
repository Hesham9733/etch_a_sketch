const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
        let i = 1;
        cell.addEventListener('mouseover', function (e) {
            i -= 0.1;
            function random_rgba() {
                var o = Math.round, r = Math.random, s = 255;
                return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
            }
            let color = random_rgba();
            if(e.target.style.backgroundColor == ''){
                e.target.style.backgroundColor = color;
            } else {
                if(i < 0.1){
                    e.target.style.backgroundColor = 'black';
                } else {
                    e.target.style.filter = `brightness(${i})`; 
                }
            }
        })
    };
};
const resetBtn = document.querySelector('.resetGridBtn');
resetBtn.addEventListener('click', () => {
    const container = document.getElementById("container").innerHTML = "";
});
const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', () => {
    let answer = prompt('Enter the Number of Squares per Side of the Grid :');
    if (parseInt(answer) > 23) {
        alert("That's so much squares !");
    } else {
        const container = document.getElementById("container").innerHTML = "";
        makeRows(parseInt(answer), parseInt(answer));
    }
})