//14. alternatingSums
// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].
function solution(a) {
  let team1 = 0
  let  team2 = 0
  for(let i=0;i<a.length;i+=2) team1.push(a[i])
  let sumTeam1 = team1.reduce((accumulator, currentValue) => accumulator + currentValue,
0);

  for(let i=1;i<a.length;i+=2) team2.push(a[i])
  let sumTeam2 = team2.reduce((accumulator, currentValue) => accumulator + currentValue,
0);
  
  return [sumTeam1, sumTeam2]

}
// 1        1       1
//[50, 60, 60, 45, 70]
//length=5