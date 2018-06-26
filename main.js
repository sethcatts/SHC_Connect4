/*  TODO
. Add settings button
. Add 2 themes(pieces, names)
. Style settings and restart button
. Fix game logic bug causing orange to win on diag 3
*/


$(document).ready(function() {
    const connect4 = new Connect4('#connect4');
    connect4.onPlayerMove = function() {
        $('#player').text(connect4.player);
    }
    $('#restart').click(function() {
        connect4.restart();                    
    })
    $('#settingsButton').click(function() {
        $('#settingsPanel').toggle(300);
    })
})