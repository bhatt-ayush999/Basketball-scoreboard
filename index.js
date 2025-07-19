// homescore
let homeScore = document.getElementById("home-score")
let homeScoreCount = 0
function addOneHome() {
    homeScoreCount += 1
    homeScore.innerText = homeScoreCount
}

function addTwoHome() {
    homeScoreCount += 2
    homeScore.innerText = homeScoreCount
}

function addFiveHome() {
    homeScoreCount += 5
    homeScore.innerText = homeScoreCount
}

// guestscore
let guestScore = document.getElementById("guest-score")
let guestScoreCount = 0
function addOneGuest() {
    guestScoreCount += 1
    guestScore.innerText = guestScoreCount
}
function addTwoGuest() {
    guestScoreCount += 2
    guestScore.innerText = guestScoreCount
}
function addFiveGuest() {
    guestScoreCount += 5
    guestScore.innerText = guestScoreCount
}