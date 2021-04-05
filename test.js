const tournamentWinner  = (competitions, results) => {
    let currentBestTeam = "";
    let scoreBoard = {"currentBestTeam": 0}

    for(let i = 0; i < competitions.length-1; i++){
        let [homeTeam, awayTeam] = competitions[i];
        let result = results[i];

        let WinningTeam = result === 1 ? homeTeam : awayTeam;

        updateScoreBoard(WinningTeam, 3, scoreBoard);

        if(scoreBoard["currentBestTeam"] < scoreBoard["WinningTeam"]){
            currentBestTeam = WinningTeam;
        }
    }

    return currentBestTeam;
}


const updateScoreBoard = (WinningTeam, points, scoreBoard) => {
    if(scoreBoard["WinningTeam"] == undefined){
        scoreBoard["WinningTeam"] = 0;
    }

    scoreBoard["WinningTeam"]+=points;

}


console.log(tournamentWinner([

    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
], [0, 1, 1, 1, 0, 1, 0, 1, 1, 0] ))