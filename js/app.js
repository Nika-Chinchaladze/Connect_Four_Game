// ADD TIMER FUNCTION:
var seconds = 0;
var timer = setInterval(upTimer, 1000);
function upTimer() {
    ++seconds;
    var hour = Math.floor(seconds / 3600);
    if (hour < 10) {
        hour = "0" + hour;
    }
    var minute = Math.floor((seconds - hour * 3600) / 60);
    if (minute < 10) {
        minute = "0" + minute;
    }
    var updSecond = seconds - (hour * 3600 + minute * 60);
    if (updSecond < 10) {
        updSecond = "0" + updSecond;
    }
    document.querySelector(".squareDiv p").textContent = hour + ":" + minute + ":" + updSecond;
}

function stopTimer() {
    clearInterval(timer);
}

// FUNCTION FROM MENU BUTTON:
function menuMethod() {
    var myScript = "<h1>OBJECTIVE</h1>" + 
    "<ul><li>To be the First Player to connect 4 of the same colored discs in a row</li>" +
    "<li>Either Vertically, Horizontally or Diagonally</li></ul>" +
    "<h1>HOW TO PLAY</h1>" +
    "<ul>" +
    "<li>Players must alternate turn and only one disc can be dropped in each turn.</li>" +
    "<li>On your turn, drop one of your colored disc from the top into any of the seven slots.</li>" +
    "<li>The round ends when there is a 4-in-a-row or a stalemate.</li>" +
    "<li>There are 3 Rounds - so You must win at least 2.</li>" +
    "</ul>";
    var infoDiv = document.querySelector(".menuDiv");

    //If it isn't "undefined" and it isn't "null", then it exists.
    if(typeof(infoDiv) != "undefined" && infoDiv != null){
        infoDiv.remove();
    }
    else{
        var infoDiv = document.createElement("div");
        infoDiv.classList.add("menuDiv");
        infoDiv.innerHTML = myScript;
        document.body.appendChild(infoDiv);   
    }
}

// BUTTONS HOVER CONTROL:
function hoverChange() {
    var realText = document.getElementById("myControl");
    var buttons = document.getElementsByClassName("myButton");
    if (realText.textContent == "First Player Turn") {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("pinkClass");
            buttons[i].classList.add("yellowClass");
        }
    }
    else {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("yellowClass");
            buttons[i].classList.add("pinkClass");
        }
    }
}
hoverChange();


// RESTART FUNCTION:
function restartGame() {
    var playerFirstScore = document.querySelector(".FirstplayerScore");
    var playerSecondScore = document.querySelector(".SecondplayerScore");
    var myBallFeatures = document.getElementsByClassName("ball");
    var whoTurn = document.getElementById("myControl");

    playerFirstScore.textContent = "0";
    playerSecondScore.textContent = "0";

    whoTurn.textContent = "First Player Turn";
    
    for (var j = 0; j < myBallFeatures.length; j++) {
        if (myBallFeatures[j].textContent.length > 0) {
            myBallFeatures[j].textContent = "";
        }
        myBallFeatures[j].style.backgroundColor = "darkviolet";
    }

    firstCoordinates = [45, 111, 177, 243, 309, 375];
    secondCoordinates = [45, 111, 177, 243, 309, 375];
    thirdCoordinates = [45, 111, 177, 243, 309, 375];
    fourCoordinates = [45, 111, 177, 243, 309, 375];
    fiveCoordinates = [45, 111, 177, 243, 309, 375];
    sixCoordinates = [45, 111, 177, 243, 309, 375];
    sevenCoordinates = [45, 111, 177, 243, 309, 375];

    hoverChange();
    // restart timer:
    document.querySelector(".squareDiv p").textContent = "00:00:00";
    seconds = 0;
    timer = setInterval(upTimer, 3000);
}

// END OF GAME:
function outputResult(winnerName) {
    var mybuttons = document.getElementsByClassName("myButton");
    var currentTime = document.querySelector(".squareDiv p").textContent;
    // create output:
    var myResult = document.createElement("div");
    myResult.classList.add("showResult");
    myResult.innerHTML = "<h3>GAME OVER</h3>" +
    "<h1>" + winnerName + "</h1>" +
    "<h4> Won The Game!</h4>" +
    "<h5>Spent Time: " + currentTime + "</h5>";
    document.body.appendChild(myResult);
    // display condition:
    if (winnerName == "Player 1") {
        myResult.classList.add("addYellow");
    }
    else if (winnerName == "Player 2") {
        myResult.classList.add("addPink");
    }
    // disable buttons:
    for (var i = 0; i < mybuttons.length; i++) {
        mybuttons[i].disabled = true;
        mybuttons[i].classList.remove("pinkClass");
        mybuttons[i].classList.remove("yellowClass");
    }
    document.getElementById("myRestart").disabled = true;
    document.getElementById("myMenuButton").disabled = true;
    // remove element:
    document.querySelector(".triangleDIv").remove();
    document.querySelector(".squareDiv").remove();
}

function endOfGame() {
    var player1 = document.querySelector(".FirstplayerScore");
    var player2 = document.querySelector(".SecondplayerScore");
    if (player1.textContent == "2") {
        stopTimer();
        outputResult("Player 1");
    }
    else if (player2.textContent == "2") {
        stopTimer();
        outputResult("Player 2");
    }
}

// WHEN SOMEONE WINS:
function whoWinsGame(answerWho) {
    var playerFirstScore = document.querySelector(".FirstplayerScore");
    var playerSecondScore = document.querySelector(".SecondplayerScore");
    var myBallFeatures = document.getElementsByClassName("ball");
    var whoTurn = document.getElementById("myControl");

    if (answerWho == "Y-WON") {
        playerFirstScore.textContent = parseInt(playerFirstScore.textContent) + 1; 
    }
    else if (answerWho == "P-WON") {
        playerSecondScore.textContent = parseInt(playerSecondScore.textContent) + 1;
    }
    whoTurn.textContent = "First Player Turn";
    
    for (var j = 0; j < myBallFeatures.length; j++) {
        if (myBallFeatures[j].textContent.length > 0) {
            myBallFeatures[j].textContent = "";
        }
        myBallFeatures[j].style.backgroundColor = "darkviolet";
    }
    
    if (window.matchMedia("(max-width: 576px)").matches) {
        firstCoordinates = [50, 100, 150, 200, 250, 300];
        secondCoordinates = [50, 100, 150, 200, 250, 300];
        thirdCoordinates = [50, 100, 150, 200, 250, 300];
        fourCoordinates = [50, 100, 150, 200, 250, 300];
        fiveCoordinates = [50, 100, 150, 200, 250, 300];
        sixCoordinates = [50, 100, 150, 200, 250, 300];
        sevenCoordinates = [50, 100, 150, 200, 250, 300];
    } else {
        firstCoordinates = [45, 111, 177, 243, 309, 375];
        secondCoordinates = [45, 111, 177, 243, 309, 375];
        thirdCoordinates = [45, 111, 177, 243, 309, 375];
        fourCoordinates = [45, 111, 177, 243, 309, 375];
        fiveCoordinates = [45, 111, 177, 243, 309, 375];
        sixCoordinates = [45, 111, 177, 243, 309, 375];
        sevenCoordinates = [45, 111, 177, 243, 309, 375];
    }
    endOfGame();
}

// THIS FUNCTION FINDS INDEXES OF ALL OCCURENCE IN ARRAY:
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

// FIND WHO COUNT FOIR IN LEFT DIAGONAL:
// for 1 - diagonal
function leftDiagonal1() {
    var answer = "";
    var a = document.querySelector(".column1_ball4").textContent;
    var b = document.querySelector(".column2_ball3").textContent;
    var c = document.querySelector(".column3_ball2").textContent;
    var d = document.querySelector(".column4_ball1").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
function rightDiagonal1() {
    var answer = "";
    var a = document.querySelector(".column1_ball3").textContent;
    var b = document.querySelector(".column2_ball4").textContent;
    var c = document.querySelector(".column3_ball5").textContent;
    var d = document.querySelector(".column4_ball6").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
// for 6 diagonal:
function leftDiagonal6() {
    var answer = "";
    var a = document.querySelector(".column4_ball6").textContent;
    var b = document.querySelector(".column5_ball5").textContent;
    var c = document.querySelector(".column6_ball4").textContent;
    var d = document.querySelector(".column7_ball3").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
function rightDiagonal6() {
    var answer = "";
    var a = document.querySelector(".column4_ball1").textContent;
    var b = document.querySelector(".column5_ball2").textContent;
    var c = document.querySelector(".column6_ball3").textContent;
    var d = document.querySelector(".column7_ball4").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
// for 2 diagonal:
function leftDiagonal2() {
    var answer = "";
    var a = document.querySelector(".column1_ball5").textContent;
    var b = document.querySelector(".column2_ball4").textContent;
    var c = document.querySelector(".column3_ball3").textContent;
    var d = document.querySelector(".column4_ball2").textContent;
    var e = document.querySelector(".column5_ball1").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
function rightDiagonal2() {
    var answer = "";
    var a = document.querySelector(".column1_ball2").textContent;
    var b = document.querySelector(".column2_ball3").textContent;
    var c = document.querySelector(".column3_ball4").textContent;
    var d = document.querySelector(".column4_ball5").textContent;
    var e = document.querySelector(".column5_ball6").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
// for 5 diagonal:
function leftDiagonal5() {
    var answer = "";
    var a = document.querySelector(".column3_ball6").textContent;
    var b = document.querySelector(".column4_ball5").textContent;
    var c = document.querySelector(".column5_ball4").textContent;
    var d = document.querySelector(".column6_ball3").textContent;
    var e = document.querySelector(".column7_ball2").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
function rightDiagonal5() {
    var answer = "";
    var a = document.querySelector(".column3_ball1").textContent;
    var b = document.querySelector(".column4_ball2").textContent;
    var c = document.querySelector(".column5_ball3").textContent;
    var d = document.querySelector(".column6_ball4").textContent;
    var e = document.querySelector(".column7_ball5").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
// for 3 diagonal:
function leftDiagonal3() {
    var answer = "";
    var a = document.querySelector(".column1_ball6").textContent;
    var b = document.querySelector(".column2_ball5").textContent;
    var c = document.querySelector(".column3_ball4").textContent;
    var d = document.querySelector(".column4_ball3").textContent;
    var e = document.querySelector(".column5_ball2").textContent;
    var f = document.querySelector(".column6_ball1").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (c == "y" && d == "y" && e == "y" && f == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else if (c == "p" && d == "p" && e == "p" && f == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
function rightDiagonal3() {
    var answer = "";
    var a = document.querySelector(".column1_ball1").textContent;
    var b = document.querySelector(".column2_ball2").textContent;
    var c = document.querySelector(".column3_ball3").textContent;
    var d = document.querySelector(".column4_ball4").textContent;
    var e = document.querySelector(".column5_ball5").textContent;
    var f = document.querySelector(".column6_ball6").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (c == "y" && d == "y" && e == "y" && f == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else if (c == "p" && d == "p" && e == "p" && f == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
// for 4 diagonal:
function leftDiagonal4() {
    var answer = "";
    var a = document.querySelector(".column2_ball6").textContent;
    var b = document.querySelector(".column3_ball5").textContent;
    var c = document.querySelector(".column4_ball4").textContent;
    var d = document.querySelector(".column5_ball3").textContent;
    var e = document.querySelector(".column6_ball2").textContent;
    var f = document.querySelector(".column7_ball1").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (c == "y" && d == "y" && e == "y" && f == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else if (c == "p" && d == "p" && e == "p" && f == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}
function rightDiagonal4() {
    var answer = "";
    var a = document.querySelector(".column2_ball1").textContent;
    var b = document.querySelector(".column3_ball2").textContent;
    var c = document.querySelector(".column4_ball3").textContent;
    var d = document.querySelector(".column5_ball4").textContent;
    var e = document.querySelector(".column6_ball5").textContent;
    var f = document.querySelector(".column7_ball6").textContent;
    if (a == "y" && b == "y" && c == "y" && d == "y") {
        answer = "Y-WON";
    }
    else if (b == "y" && c == "y" && d == "y" && e == "y") {
        answer = "Y-WON";
    }
    else if (c == "y" && d == "y" && e == "y" && f == "y") {
        answer = "Y-WON";
    }
    else if (a == "p" && b == "p" && c == "p" && d == "p") {
        answer = "P-WON";
    }
    else if (b == "p" && c == "p" && d == "p" && e == "p") {
        answer = "P-WON";
    }
    else if (c == "p" && d == "p" && e == "p" && f == "p") {
        answer = "P-WON";
    }
    else {
        answer = "noone";
    }
    return answer;
}

// FIND WHO COUNT FOUR IN THE ROWS:
function goodVariant(rowArray) {
    if (rowArray.includes(0) && rowArray.includes(1) && rowArray.includes(2) && rowArray.includes(3)) {
        return "END";
    }
    else if (rowArray.includes(1) && rowArray.includes(2) && rowArray.includes(3) && rowArray.includes(4)) {
        return "END";
    }
    else if (rowArray.includes(2) && rowArray.includes(3) && rowArray.includes(4) && rowArray.includes(5)) {
        return "END";
    }
    else if (rowArray.includes(3) && rowArray.includes(4) && rowArray.includes(5) && rowArray.includes(6)) {
        return "END";
    }
    else {
        return "NOT";
    }
}
function chosenRow(ballNumber) {
    var myResult = "";
    var firstQuery = ".column1_ball" + ballNumber;
    var secondQuery = ".column2_ball" + ballNumber;
    var thirdQuery = ".column3_ball" + ballNumber;
    var fourthQuery = ".column4_ball" + ballNumber;
    var fifthQuery = ".column5_ball" + ballNumber;
    var sixthQuery = ".column6_ball" + ballNumber;
    var seventhQuery = ".column7_ball" + ballNumber;
    var one = document.querySelector(firstQuery).textContent;
    var two = document.querySelector(secondQuery).textContent;
    var three = document.querySelector(thirdQuery).textContent;
    var four = document.querySelector(fourthQuery).textContent;
    var five = document.querySelector(fifthQuery).textContent;
    var six = document.querySelector(sixthQuery).textContent;
    var seven = document.querySelector(seventhQuery).textContent;
    var rowItems = [one, two, three, four, five, six, seven];
    //console.log(rowItems);
    var yNumber = 0;
    var pNumber = 0;
    for (var i = 0; i < rowItems.length; i++) {
        if (rowItems[i] == "y") {
            yNumber++;
        }
        else if (rowItems[i] == "p") {
            pNumber++;
        }
    }
    var yIndexArray = getAllIndexes(rowItems, "y");
    var pIndexArray = getAllIndexes(rowItems, "p");
    var yChance = goodVariant(yIndexArray);
    var pChance = goodVariant(pIndexArray);
    if (yNumber >= 4 && yChance == "END") {
        myResult = "Y-WON";
    }
    else if (pNumber >= 4 && pChance == "END") {
        myResult = "P-WON";
    }
    else {
        myResult = "NOONE";
    }
    //console.log(myResult);
    return myResult;
}


// FIND WHO COUNT FOUR IN THE COLUMNS:
function firstStateChecker(field) {
    if (field.includes(0) && field.includes(1) && field.includes(2) && field.includes(3)) {
        return "END";
    }
    else {
        return "NOT";
    }
}
function secondStateChecker(field) {
    if (field.includes(1) && field.includes(2) && field.includes(3) && field.includes(4)) {
        return "END";
    }
    else {
        return "NOT";
    }
}
function thirdStateChecker(field) {
    if (field.includes(2) && field.includes(3) && field.includes(4) && field.includes(5)) {
        return "END";
    }
    else {
        return "NOT";
    }
}

function checkColumns(myArray) {
    var answer = [];
    var yQuantity = 0;
    var pQuantity = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == "y") {
            yQuantity++;
        }
        else if (myArray[i] == "p") {
            pQuantity++;
        }
    }

    var yIndex = getAllIndexes(myArray, "y");
    var pIndex = getAllIndexes(myArray, "p");
    var y_firstChance = firstStateChecker(yIndex);
    var y_secondChance = secondStateChecker(yIndex);
    var y_thirdChance = thirdStateChecker(yIndex);
    var p_firstChance = firstStateChecker(pIndex);
    var p_secondChance = secondStateChecker(pIndex);
    var p_thirdChance = thirdStateChecker(pIndex);

    if (yQuantity >= 4 && (y_firstChance == "END" || y_secondChance == "END" || y_thirdChance == "END")) {
        answer = "Y-WON";
    }
    else if (pQuantity >= 4 && (p_firstChance == "END" || p_secondChance == "END" || p_thirdChance == "END")) {
        answer = "P-WON";
    }
    else {
        answer = [yQuantity, pQuantity];
    }
    return answer;
}

function findQuantity(columnName) {
    var myResults = [];
    var myQuery = "." + columnName + " .ball";
    var boom = document.querySelectorAll(myQuery);
    for (var i = 0; i < boom.length; i++) {
        myResults.push(boom[i].textContent);
    }
    return myResults;
}


// =============================== launch Ball function - FIRST: ===================================== //
var firstCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    firstCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    firstCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBall() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("myAnswerBallYellow");
    myRoundBall.style.zIndex = "2";
    return "myAnswerBallYellow";
}
function createPinkBall() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("myAnswerBallPink");
    myRoundBall.style.zIndex = "2";
    return "myAnswerBallPink";
}

function throwBall1() {
    var myCheckList1 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBall();
    }
    else {
        myClass = createPinkBall();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= firstCoordinates[firstCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn1 .ball:nth-of-type("+ firstCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".myAnswerBallPink");
                myElement2.remove();
                // track results:
                myCheckList1 = findQuantity("myColumn1");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".myAnswerBallYellow");
                myElement1.remove();
                // track results:
                myCheckList1 = findQuantity("myColumn1");
            }
            firstCoordinates = firstCoordinates.slice(0,firstCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList1);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList1 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList1 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList1 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList1 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList1 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList1 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList1 = [];
            }
            // check left diagonals:
            var myDiagonal1 = leftDiagonal1();
            if (myDiagonal1 == "Y-WON" || myDiagonal1 == "P-WON") {
                whoWinsGame(myDiagonal1);
                myCheckList1 = [];
            }
            var secondDiagonal = leftDiagonal2();
            if (secondDiagonal == "Y-WON" || secondDiagonal == "P-WON") {
                whoWinsGame(secondDiagonal);
                myCheckList1 = [];
            }
            var thirdDiagonal = leftDiagonal3();
            if (thirdDiagonal == "Y-WON" || thirdDiagonal == "P-WON") {
                whoWinsGame(thirdDiagonal);
                myCheckList1 = [];
            }
            // check right diagonals:
            var firstDiagonal = rightDiagonal1();
            if (firstDiagonal == "Y-WON" || firstDiagonal == "P-WON") {
                whoWinsGame(firstDiagonal);
                myCheckList1 = [];
            }
            var secondRight = rightDiagonal2();
            if (secondRight == "Y-WON" || secondRight == "P-WON") {
                whoWinsGame(secondRight);
                myCheckList1 = [];
            }
            var thirdRight = rightDiagonal3();
            if (thirdRight == "Y-WON" || thirdRight == "P-WON") {
                whoWinsGame(thirdRight);
                myCheckList1 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// =============================== launch Ball function - SECOND: ===================================== //
var secondCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    secondCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    secondCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBallSecond() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("secondYellowBall");
    myRoundBall.style.zIndex = "2";
    return "secondYellowBall";
}
function createPinkBallSecond() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("secondPinkBall");
    myRoundBall.style.zIndex = "2";
    return "secondPinkBall";
}

function throwBallSecond() {
    var myCheckList2 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBallSecond();
    }
    else {
        myClass = createPinkBallSecond();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= secondCoordinates[secondCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn2 .ball:nth-of-type("+ secondCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".secondPinkBall");
                myElement2.remove();
                // track results:
                myCheckList2 = findQuantity("myColumn2");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".secondYellowBall");
                myElement1.remove();
                // track results:
                myCheckList2 = findQuantity("myColumn2");
            }
            secondCoordinates = secondCoordinates.slice(0,secondCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList2);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList2 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList2 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList2 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList2 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList2 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList2 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList2 = [];
            }
            // check left diagonals:
            var myDiagonal1 = leftDiagonal1();
            if (myDiagonal1 == "Y-WON" || myDiagonal1 == "P-WON") {
                whoWinsGame(myDiagonal1);
                myCheckList2 = [];
            }
            var secondDiagonal = leftDiagonal2();
            if (secondDiagonal == "Y-WON" || secondDiagonal == "P-WON") {
                whoWinsGame(secondDiagonal);
                myCheckList2 = [];
            }
            var thirdDiagonal = leftDiagonal3();
            if (thirdDiagonal == "Y-WON" || thirdDiagonal == "P-WON") {
                whoWinsGame(thirdDiagonal);
                myCheckList2 = [];
            }
            var fourthDiagonal = leftDiagonal4();
            if (fourthDiagonal == "Y-WON" || fourthDiagonal == "P-WON") {
                whoWinsGame(fourthDiagonal);
                myCheckList2 = [];
            }
            // check right diagonals:
            var firstDiagonal = rightDiagonal1();
            if (firstDiagonal == "Y-WON" || firstDiagonal == "P-WON") {
                whoWinsGame(firstDiagonal);
                myCheckList2 = [];
            }
            var secondRight = rightDiagonal2();
            if (secondRight == "Y-WON" || secondRight == "P-WON") {
                whoWinsGame(secondRight);
                myCheckList2 = [];
            }
            var thirdRight = rightDiagonal3();
            if (thirdRight == "Y-WON" || thirdRight == "P-WON") {
                whoWinsGame(thirdRight);
                myCheckList2 = [];
            }
            var fourthRight = rightDiagonal4();
            if (fourthRight == "Y-WON" || fourthRight == "P-WON") {
                whoWinsGame(fourthRight);
                myCheckList2 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// =============================== launch Ball function - THIRD: ===================================== //
var thirdCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    thirdCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    thirdCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBallThird() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("thirdYellowBall");
    myRoundBall.style.zIndex = "2";
    return "thirdYellowBall";
}
function createPinkBallThird() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("thirdPinkBall");
    myRoundBall.style.zIndex = "2";
    return "thirdPinkBall";
}

function throwBallThird() {
    var myCheckList3 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBallThird();
    }
    else {
        myClass = createPinkBallThird();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= thirdCoordinates[thirdCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn3 .ball:nth-of-type("+ thirdCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".thirdPinkBall");
                myElement2.remove();
                // track results:
                myCheckList3 = findQuantity("myColumn3");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".thirdYellowBall");
                myElement1.remove();
                // track results:
                myCheckList3 = findQuantity("myColumn3");
            }
            thirdCoordinates = thirdCoordinates.slice(0,thirdCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList3);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList3 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList3 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList3 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList3 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList3 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList3 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList3 = [];
            }
            // check left diagonals:
            var myDiagonal1 = leftDiagonal1();
            if (myDiagonal1 == "Y-WON" || myDiagonal1 == "P-WON") {
                whoWinsGame(myDiagonal1);
                myCheckList3 = [];
            }
            var secondDiagonal = leftDiagonal2();
            if (secondDiagonal == "Y-WON" || secondDiagonal == "P-WON") {
                whoWinsGame(secondDiagonal);
                myCheckList3 = [];
            }
            var fifthDiagonal = leftDiagonal5();
            if (fifthDiagonal == "Y-WON" || fifthDiagonal == "P-WON") {
                whoWinsGame(fifthDiagonal);
                myCheckList3 = [];
            }
            var thirdDiagonal = leftDiagonal3();
            if (thirdDiagonal == "Y-WON" || thirdDiagonal == "P-WON") {
                whoWinsGame(thirdDiagonal);
                myCheckList3 = [];
            }
            var fourthDiagonal = leftDiagonal4();
            if (fourthDiagonal == "Y-WON" || fourthDiagonal == "P-WON") {
                whoWinsGame(fourthDiagonal);
                myCheckList3 = [];
            }
            // check right diagonals:
            var firstDiagonal = rightDiagonal1();
            if (firstDiagonal == "Y-WON" || firstDiagonal == "P-WON") {
                whoWinsGame(firstDiagonal);
                myCheckList3 = [];
            }
            var secondRight = rightDiagonal2();
            if (secondRight == "Y-WON" || secondRight == "P-WON") {
                whoWinsGame(secondRight);
                myCheckList3 = [];
            }
            var fifthRight = rightDiagonal5();
            if (fifthRight == "Y-WON" || fifthRight == "P-WON") {
                whoWinsGame(fifthRight);
                myCheckList3 = [];
            }
            var thirdRight = rightDiagonal3();
            if (thirdRight == "Y-WON" || thirdRight == "P-WON") {
                whoWinsGame(thirdRight);
                myCheckList3 = [];
            }
            var fourthRight = rightDiagonal4();
            if (fourthRight == "Y-WON" || fourthRight == "P-WON") {
                whoWinsGame(fourthRight);
                myCheckList3 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// =============================== launch Ball function - FOURTH: ===================================== //
var fourCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    fourCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    fourCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBallFour() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("fourYellowBall");
    myRoundBall.style.zIndex = "2";
    return "fourYellowBall";
}
function createPinkBallFour() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("fourPinkBall");
    myRoundBall.style.zIndex = "2";
    return "fourPinkBall";
}

function throwBallFour() {
    var myCheckList4 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBallFour();
    }
    else {
        myClass = createPinkBallFour();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= fourCoordinates[fourCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn4 .ball:nth-of-type("+ fourCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".fourPinkBall");
                myElement2.remove();
                // track results:
                myCheckList4 = findQuantity("myColumn4");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".fourYellowBall");
                myElement1.remove();
                // track results:
                myCheckList4 = findQuantity("myColumn4");
            }
            fourCoordinates = fourCoordinates.slice(0,fourCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList4);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList4 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList4 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList4 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList4 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList4 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList4 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList4 = [];
            }
            // check left diagonals:
            var myDiagonal1 = leftDiagonal1();
            if (myDiagonal1 == "Y-WON" || myDiagonal1 == "P-WON") {
                whoWinsGame(myDiagonal1);
                myCheckList4 = [];
            }
            var myDiagonal6 = leftDiagonal6();
            if (myDiagonal6 == "Y-WON" || myDiagonal6 == "P-WON") {
                whoWinsGame(myDiagonal6);
                myCheckList4 = [];
            }
            var secondDiagonal = leftDiagonal2();
            if (secondDiagonal == "Y-WON" || secondDiagonal == "P-WON") {
                whoWinsGame(secondDiagonal);
                myCheckList4 = [];
            }
            var fifthDiagonal = leftDiagonal5();
            if (fifthDiagonal == "Y-WON" || fifthDiagonal == "P-WON") {
                whoWinsGame(fifthDiagonal);
                myCheckList4 = [];
            }
            var thirdDiagonal = leftDiagonal3();
            if (thirdDiagonal == "Y-WON" || thirdDiagonal == "P-WON") {
                whoWinsGame(thirdDiagonal);
                myCheckList4 = [];
            }
            var fourthDiagonal = leftDiagonal4();
            if (fourthDiagonal == "Y-WON" || fourthDiagonal == "P-WON") {
                whoWinsGame(fourthDiagonal);
                myCheckList4 = [];
            }
            // check right diagonals:
            var firstDiagonal = rightDiagonal1();
            if (firstDiagonal == "Y-WON" || firstDiagonal == "P-WON") {
                whoWinsGame(firstDiagonal);
                myCheckList4 = [];
            }
            var sixRight = rightDiagonal6();
            if (sixRight == "Y-WON" || sixRight == "P-WON") {
                whoWinsGame(sixRight);
                myCheckList4 = [];
            }
            var secondRight = rightDiagonal2();
            if (secondRight == "Y-WON" || secondRight == "P-WON") {
                whoWinsGame(secondRight);
                myCheckList4 = [];
            }
            var fifthRight = rightDiagonal5();
            if (fifthRight == "Y-WON" || fifthRight == "P-WON") {
                whoWinsGame(fifthRight);
                myCheckList4 = [];
            }
            var thirdRight = rightDiagonal3();
            if (thirdRight == "Y-WON" || thirdRight == "P-WON") {
                whoWinsGame(thirdRight);
                myCheckList4 = [];
            }
            var fourthRight = rightDiagonal4();
            if (fourthRight == "Y-WON" || fourthRight == "P-WON") {
                whoWinsGame(fourthRight);
                myCheckList4 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// =============================== launch Ball function - FIFTH: ===================================== //
var fiveCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    fiveCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    fiveCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBallFive() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("fiveYellowBall");
    myRoundBall.style.zIndex = "2";
    return "fiveYellowBall";
}
function createPinkBallFive() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("fivePinkBall");
    myRoundBall.style.zIndex = "2";
    return "fivePinkBall";
}

function throwBallFive() {
    var myCheckList5 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBallFive();
    }
    else {
        myClass = createPinkBallFive();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= fiveCoordinates[fiveCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn5 .ball:nth-of-type("+ fiveCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".fivePinkBall");
                myElement2.remove();
                // track results:
                myCheckList5 = findQuantity("myColumn5");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".fiveYellowBall");
                myElement1.remove();
                // track results:
                myCheckList5 = findQuantity("myColumn5");
            }
            fiveCoordinates = fiveCoordinates.slice(0,fiveCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList5);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList5 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList5 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList5 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList5 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList5 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList5 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList5 = [];
            }
            // check left diagonals:
            var myDiagonal6 = leftDiagonal6();
            if (myDiagonal6 == "Y-WON" || myDiagonal6 == "P-WON") {
                whoWinsGame(myDiagonal6);
                myCheckList5 = [];
            }
            var secondDiagonal = leftDiagonal2();
            if (secondDiagonal == "Y-WON" || secondDiagonal == "P-WON") {
                whoWinsGame(secondDiagonal);
                myCheckList5 = [];
            }
            var fifthDiagonal = leftDiagonal5();
            if (fifthDiagonal == "Y-WON" || fifthDiagonal == "P-WON") {
                whoWinsGame(fifthDiagonal);
                myCheckList5 = [];
            }
            var thirdDiagonal = leftDiagonal3();
            if (thirdDiagonal == "Y-WON" || thirdDiagonal == "P-WON") {
                whoWinsGame(thirdDiagonal);
                myCheckList5 = [];
            }
            var fourthDiagonal = leftDiagonal4();
            if (fourthDiagonal == "Y-WON" || fourthDiagonal == "P-WON") {
                whoWinsGame(fourthDiagonal);
                myCheckList5 = [];
            }
            // check right diagonals:
            var sixRight = rightDiagonal6();
            if (sixRight == "Y-WON" || sixRight == "P-WON") {
                whoWinsGame(sixRight);
                myCheckList5 = [];
            }
            var secondRight = rightDiagonal2();
            if (secondRight == "Y-WON" || secondRight == "P-WON") {
                whoWinsGame(secondRight);
                myCheckList5 = [];
            }
            var fifthRight = rightDiagonal5();
            if (fifthRight == "Y-WON" || fifthRight == "P-WON") {
                whoWinsGame(fifthRight);
                myCheckList5 = [];
            }
            var thirdRight = rightDiagonal3();
            if (thirdRight == "Y-WON" || thirdRight == "P-WON") {
                whoWinsGame(thirdRight);
                myCheckList5 = [];
            }
            var fourthRight = rightDiagonal4();
            if (fourthRight == "Y-WON" || fourthRight == "P-WON") {
                whoWinsGame(fourthRight);
                myCheckList5 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// =============================== launch Ball function - SIXTH: ===================================== //
var sixCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    sixCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    sixCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBallSix() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("sixYellowBall");
    myRoundBall.style.zIndex = "2";
    return "sixYellowBall";
}
function createPinkBallSix() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("sixPinkBall");
    myRoundBall.style.zIndex = "2";
    return "sixPinkBall";
}

function throwBallSix() {
    var myCheckList6 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBallSix();
    }
    else {
        myClass = createPinkBallSix();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= sixCoordinates[sixCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn6 .ball:nth-of-type("+ sixCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".sixPinkBall");
                myElement2.remove();
                // track results:
                myCheckList6 = findQuantity("myColumn6");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".sixYellowBall");
                myElement1.remove();
                // track results:
                myCheckList6 = findQuantity("myColumn6");
            }
            sixCoordinates = sixCoordinates.slice(0,sixCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList6);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList6 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList6 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList6 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList6 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList6 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList6 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList6 = [];
            }
            // check left diagonals:
            var myDiagonal6 = leftDiagonal6();
            if (myDiagonal6 == "Y-WON" || myDiagonal6 == "P-WON") {
                whoWinsGame(myDiagonal6);
                myCheckList6 = [];
            }
            var fifthDiagonal = leftDiagonal5();
            if (fifthDiagonal == "Y-WON" || fifthDiagonal == "P-WON") {
                whoWinsGame(fifthDiagonal);
                myCheckList6 = [];
            }
            var thirdDiagonal = leftDiagonal3();
            if (thirdDiagonal == "Y-WON" || thirdDiagonal == "P-WON") {
                whoWinsGame(thirdDiagonal);
                myCheckList6 = [];
            }
            var fourthDiagonal = leftDiagonal4();
            if (fourthDiagonal == "Y-WON" || fourthDiagonal == "P-WON") {
                whoWinsGame(fourthDiagonal);
                myCheckList6 = [];
            }
            // check right diagonals:
            var sixRight = rightDiagonal6();
            if (sixRight == "Y-WON" || sixRight == "P-WON") {
                whoWinsGame(sixRight);
                myCheckList6 = [];
            }
            var fifthRight = rightDiagonal5();
            if (fifthRight == "Y-WON" || fifthRight == "P-WON") {
                whoWinsGame(fifthRight);
                myCheckList6 = [];
            }
            var thirdRight = rightDiagonal3();
            if (thirdRight == "Y-WON" || thirdRight == "P-WON") {
                whoWinsGame(thirdRight);
                myCheckList6 = [];
            }
            var fourthRight = rightDiagonal4();
            if (fourthRight == "Y-WON" || fourthRight == "P-WON") {
                whoWinsGame(fourthRight);
                myCheckList6 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// =============================== launch Ball function - SEVENTH: ===================================== //
var sevenCoordinates;
if (window.matchMedia("(max-width: 576px)").matches) {
    sevenCoordinates = [50, 100, 150, 200, 250, 300];
} else {
    sevenCoordinates = [45, 111, 177, 243, 309, 375];
}

function createYellowBallSeven() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("sevenYellowBall");
    myRoundBall.style.zIndex = "2";
    return "sevenYellowBall";
}
function createPinkBallSeven() {
    var myRoundBall = document.createElement("div");
    document.querySelector(".dashBoard").appendChild(myRoundBall);
    myRoundBall.classList.add("sevenPinkBall");
    myRoundBall.style.zIndex = "2";
    return "sevenPinkBall";
}

function throwBallSeven() {
    var myCheckList7 = [];
    var myP = document.getElementById("myControl");
    var myClass = "";

    if (myP.textContent === "First Player Turn") {
        myClass = createYellowBallSeven();
    }
    else {
        myClass = createPinkBallSeven();
    }

    var myBall = document.getElementsByClassName(myClass)[0];
    myBall.style.visibility = "visible";
    var step = 0;
    var myAnimation = setInterval(moveElement, 5);

    function moveElement() {
        if (step >= sevenCoordinates[sevenCoordinates.length - 1]) {
            clearInterval(myAnimation);
            var mySelector = ".myColumn7 .ball:nth-of-type("+ sevenCoordinates.length + ")";
            if (myP.textContent == "First Player Turn") {
                document.querySelector(mySelector).style.backgroundColor = "rgb(153, 36, 65)";
                document.querySelector(mySelector).textContent = "p";
                var myElement2 = document.querySelector(".sevenPinkBall");
                myElement2.remove();
                // track results:
                myCheckList7 = findQuantity("myColumn7");
            }
            else {
                document.querySelector(mySelector).style.backgroundColor = "rgb(219, 219, 44)";
                document.querySelector(mySelector).textContent = "y";
                var myElement1 = document.querySelector(".sevenYellowBall");
                myElement1.remove();
                // track results:
                myCheckList7 = findQuantity("myColumn7");
            }
            sevenCoordinates = sevenCoordinates.slice(0,sevenCoordinates.length-1);
            // check column results:
            var myAnswer = checkColumns(myCheckList7);
            if (myAnswer == "Y-WON" || myAnswer == "P-WON") {
                whoWinsGame(myAnswer);
                myCheckList7 = [];
            }
            // check row results:
            var myResult = chosenRow("6");
            if (myResult == "Y-WON" || myResult == "P-WON") {
                whoWinsGame(myResult);
                myCheckList7 = [];
            }
            var myResult5 = chosenRow("5");
            if (myResult5 == "Y-WON" || myResult5 == "P-WON") {
                whoWinsGame(myResult5);
                myCheckList7 = [];
            }
            var myResult4 = chosenRow("4");
            if (myResult4 == "Y-WON" || myResult4 == "P-WON") {
                whoWinsGame(myResult4);
                myCheckList7 = [];
            }
            var myResult3 = chosenRow("3");
            if (myResult3 == "Y-WON" || myResult3 == "P-WON") {
                whoWinsGame(myResult3);
                myCheckList7 = [];
            }
            var myResult2 = chosenRow("2");
            if (myResult2 == "Y-WON" || myResult2 == "P-WON") {
                whoWinsGame(myResult2);
                myCheckList7 = [];
            }
            var myResult1 = chosenRow("1");
            if (myResult1 == "Y-WON" || myResult1 == "P-WON") {
                whoWinsGame(myResult1);
                myCheckList7 = [];
            }
            // check left diagonals:
            var myDiagonal6 = leftDiagonal6();
            if (myDiagonal6 == "Y-WON" || myDiagonal6 == "P-WON") {
                whoWinsGame(myDiagonal6);
                myCheckList7 = [];
            }
            var fifthDiagonal = leftDiagonal5();
            if (fifthDiagonal == "Y-WON" || fifthDiagonal == "P-WON") {
                whoWinsGame(fifthDiagonal);
                myCheckList7 = [];
            }
            var fourthDiagonal = leftDiagonal4();
            if (fourthDiagonal == "Y-WON" || fourthDiagonal == "P-WON") {
                whoWinsGame(fourthDiagonal);
                myCheckList7 = [];
            }
            // check right diagonals:
            var sixRight = rightDiagonal6();
            if (sixRight == "Y-WON" || sixRight == "P-WON") {
                whoWinsGame(sixRight);
                myCheckList7 = [];
            }
            var fifthRight = rightDiagonal5();
            if (fifthRight == "Y-WON" || fifthRight == "P-WON") {
                whoWinsGame(fifthRight);
                myCheckList7 = [];
            }
            var fourthRight = rightDiagonal4();
            if (fourthRight == "Y-WON" || fourthRight == "P-WON") {
                whoWinsGame(fourthRight);
                myCheckList7 = [];
            }
        }
        else {
            step++;
            myBall.style.top = step+"px";
        }
    }

    if (myP.textContent === "First Player Turn") {
        myP.textContent = "Second Player Turn";
    }
    else {
        myP.textContent = "First Player Turn";
    }
    hoverChange();
}

// ================================= ENDING =================================== //

