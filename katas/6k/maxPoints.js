// Each player has a certain power level. If a player has a higher power level than her opponent, she is guaranteed to win and her team would get 
//1 point for that win while the opponents get a 0.

// You are the coach of the first team and you know the power levels of all the players before the game starts. 
//You want to rearrange the players in your team to earn the highest possible total score.

// Input/Output
// [input] integer array team1
// The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.

// [input] integer array team2
// Array of the same length as team1, the power levels of the players of the second team.

// [output] an integer
// The maximum number of points the first team can get.

// Example
// For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.

// If you don't rearrange the players in the first team, it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.

// However, if you rearrange the order of the players to [2, 3, 4], the first team will get 3 points.

//We make a map of the opponent's team. 
const maximizePoints = (team1, team2) => {
    team1.sort((a, b) => b - a)
    team2.sort((a, b) => b - a)

    const team2Mutate = [...team2]
    for (let i = 0; i < team1.length; i++) {
        const team2MutateSubset = team2Mutate.filter((player) => player < team1[i])
        if (team2MutateSubset.length !== 0) {
            const indexOfTerminate = team2Mutate.indexOf(team2MutateSubset[0])
            team2Mutate.splice(indexOfTerminate, 1)
        }
    }

    return team2.length - team2Mutate.length
}

//[5] [1,2,3,4,5]

// console.log(maximizePoints([3, 2, 4], [1, 2, 3])) // 3
// console.log(maximizePoints([25, 7, 26, 48], [1, 36, 5, 33])) // 3
console.log(maximizePoints([7, 19, 23, 18, 38, 37, 38, 40], [21, 12, 1, 0, 13, 38, 25, 49])) // 7

