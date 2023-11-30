let homeFoulsEl = document.getElementById("home-fouls-el");
let awayFoulsEl = document.getElementById("away-fouls-el");
let homeScoreEl = document.getElementById("home-score-el");
let awayScoreEl = document.getElementById("away-score-el");
let periodEL = document.getElementById("period-el");
let homeScore = 0;
let awayScore = 0;
let period = 1;
let homeFouls = 0;
let awayFouls = 0;
let homeTeam = document.getElementById("home-team")
let awayTeam = document.getElementById("away-team")
function updateBorder(){
    if (homeScore == awayScore){
        homeTeam.classList.remove("redBorder")
        awayTeam.classList.remove("redBorder")
    }
    else if (homeScore > awayScore){
        homeTeam.classList.add("redBorder")
        awayTeam.classList.remove("redBorder")
    }
    else if (homeScore < awayScore){
        homeTeam.classList.remove("redBorder")
    awayTeam.classList.add("redBorder")
    }
}
function add1PointHome(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    updateBorder()
}
function add2PointsHome(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    updateBorder()
}
function add3PointsHome(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    updateBorder()
}
function add1PointAway(){
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
    updateBorder()
}
function add2PointsAway(){
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
    updateBorder()
}
function add3PointsAway(){
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
    updateBorder()
}
function add1FoulHome(){
    homeFouls +=1;
    homeFoulsEl.textContent = homeFouls;
}
function subtract1FoulHome(){
    homeFouls -= 1;
    homeFoulsEl.textContent = homeFouls;
}
function add1FoulAway(){
    awayFouls += 1;
    awayFoulsEl.textContent = awayFouls;
}
function subtract1FoulAway(){
    awayFouls -= 1;
    awayFoulsEl.textContent = awayFouls; 
}
function add1Period(){
    period += 1;
    periodEL.textContent = period;
}
function subtract1Period(){
    period -= 1;
    periodEL.textContent = period;
}