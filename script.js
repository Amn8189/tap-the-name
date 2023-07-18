// Setting the level to easy by having the diration of the whole animation to maximum.
function easy() {
    document.getElementById('circle').style.animationDuration = '50s';
    document.getElementById('circle').className = 'crcl';
}

// Setting the level to medium by having the diration of the whole animation to a medium value.
function medium() {
    document.getElementById('circle').style.animationDuration = '30s';
    document.getElementById('circle').className = 'crcl';
}

// Setting the level to hard by having the diration of the whole animation to minimum.
function hard() {
    document.getElementById('circle').style.animationDuration = '15s';
    document.getElementById('circle').className = 'crcl';
}
let cnt = 0;

// Function to count the number of taps and display the score.
function count() {
    cnt = parseInt(1) + parseInt(cnt);
    var scr = document.getElementById('score');
    scr.innerHTML = cnt;
}

// Restart the game by refreshing the page
function restart() {
    window.location.reload();
}