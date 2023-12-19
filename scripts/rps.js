let userMove = '' ;
let compMove = '' ; 

const games = {
    wins : 0, losses : 0 , draws : 0 
} ; 

const gameHistory = [] ; 
// To show the values of games in the wins 

// const gametr = document.getElementById("gametr").innerHTML ; 
// const totalgamesplayed = 0 ; 
// const td = gametr.getElementsByTagName("td") ; 
// function changeval(){
    // td[0].value = games.wins ; 
    // td[1].value = games.losses ; 
    // td[2].value = games.draws ; 
    // td[3].value = 0 ; 
    // return ; 
// }
function renderGameHistory(){
    // clearGameData() ; 
    let gameHistoryHTML =`<tr>
    <th>#</th>
    <th>User's Move</th>
    <th>Computer's Move</th>
    <th>Result</th>
    </tr>`; 
    for(let i=0 ; i<gameHistory.length ; i++){
        let gameId = gameHistory[i] ; 
        gameHistoryHTML += 
        `<tr>
            <td>${i+1}</td>
            <td>${gameId.userMove}</td>
            <td>${gameId.compMove}</td>
            <td>${gameId.result}</td>
        </tr>`
        //  += gameHistoryHTML ; 
    }
    document.getElementById('history').innerHTML = gameHistoryHTML ; 
}

function renderGameSummary(){

    document.getElementById('wins').innerHTML = games.wins ; 
    document.getElementById('losses').innerHTML = games.losses ; 
    document.getElementById('ties').innerHTML = games.draws ; 
    document.getElementById('games').innerHTML = games.wins + games.losses + games.draws ; 
    renderGameHistory()
}
var result ; 
function win(){
    if(compMove === 'Rock'){
        if(userMove === 'Paper') {
            result = 'You win !' ; 
            document.getElementById('result').innerHTML = 'You win !' ; 
            console.log('You win !') ; 
            games.wins += 1 ;  
        }
        else if(userMove === 'Scissor'){
            result = 'You Loose' ; 
            document.getElementById('result').innerHTML = "You Loose !" ; 
            console.log("You Loose !") ;
            games.losses += 1 ; 
        }
        else {
            result = 'draw' ; 
            document.getElementById('result').innerHTML = "Draw" ;
            console.log("Draw") ; 
            games.draws += 1 ; 
        }
    }
    else if(compMove === 'Paper'){
        if(userMove === 'Scissor') {
            result = 'You win !' ; 
            document.getElementById('result').innerHTML = 'You win' ; 
            console.log('You win !') ; 
            games.wins += 1 ; 
        }
        else if(userMove === 'Rock'){
            result = 'You Loose' ; 
            document.getElementById('result').innerHTML = 'You Loose' ; 
            console.log("You Loose !") ;
            games.losses += 1 ; 
        }
        else {
            result = 'draw' ; 
            document.getElementById('result').innerHTML = 'Draw' ; 
            console.log("Draw") ; 
            games.draws += 1 ; 
        }
    }
    else if(compMove === 'Scissor'){
        if(userMove === 'Rock') {
            result = 'You win !' ; 
            document.getElementById('result').innerHTML = 'You win' ; 
            console.log('You win !') ; 
            games.wins += 1 ; 
        }
        else if(userMove === 'Paper'){
            result = 'You Loose' ; 
            document.getElementById('result').innerHTML = 'You Loose' ; 
            console.log("You Loose !") ;
            games.losses += 1 ; 
        }
        else {
            result = 'draw' ; 
            document.getElementById('result').innerHTML = 'Draw' ; 
            console.log("Draw") ; 
            games.draws += 1 ; 
        }
    }
    gameHistory.push ({
        userMove : userMove , 
        compMove : compMove , 
        result : result 
    })
}

function display(){
    document.getElementById('your').innerHTML = userMove ; 
    document.getElementById('comp').innerHTML = compMove ;
}
function generatecompMove(){
    const randNum = Math.random() ; 
    if(randNum < (1/3)){
        compMove = 'Rock' ; 
    }
    else if(randNum < (2/3)){
        compMove = 'Paper' ; 
    }
    else {
        compMove = 'Scissor' ; 
    }
    win() ; 
    // changeval() ; 
    display() ; 
    console.log(games) ; 
    console.log(gameHistory) ; 
    return compMove ;
}

function clearGameData() {
    alert('Data will be removed :');
    // games.wins = 0;
    // games.losses = 0;
    // games.draws = 0;
    // // renderGameSummary();
    // renderGameHistory();
    // display();
    window.location.reload() ; 
}
