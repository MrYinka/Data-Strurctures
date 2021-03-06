const HOME_WON = 1;

const tournamentWinner = (competitions, results) => {
    let currentBestTeam = "";
    let scoreBoard = {"currentBestTeam": 0};

    for(let i = 0; i < competitions.length; i++){

        let result = results[i];
        let [homeTeam, awayTeam] = competitions[i];
        let winningTeam = result === HOME_WON ? homeTeam : awayTeam;

        updateScoreBoard(winningTeam, 3, scoreBoard);

        if(scoreBoard["winningTeam"] > scoreBoard["currentBestTeam"]){
            currentBestTeam = winningTeam;
        }
    }

    return currentBestTeam;

}


const updateScoreBoard = (winningTeam, points, scoreBoard) => {
    if(scoreBoard["winningTeam"] == undefined){
        scoreBoard["winningTeam"] = 0;
    }

    scoreBoard["winningTeam"]+=points;
}


console.log(tournamentWinner([ ["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"] ], [0,0,1]));