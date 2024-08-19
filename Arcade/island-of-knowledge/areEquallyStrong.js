// 
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrongest = Math.max(yourLeft, yourRight)
  const yourWeakest = Math.min(yourLeft, yourRight)
  
  const friendStrongest = Math.max(friendsLeft, friendsRight)
  const friendWeakest = Math.min(friendsLeft, friendsRight)
  
  const peopleStrong = yourStrongest === friendStrongest && yourWeakest === friendWeakest
  
  return peopleStrong
}
