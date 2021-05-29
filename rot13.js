function rot13(str) {
  //make alpha master x
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //turn strng into array by word x
  let arr = str.split(" ")
  console.log(arr)
  //loop thru arr x
  for (let word of arr) {
    console.log(word)
    //loop thru letter at each index x
    for (let i = 0; i < word.length; i++) {
      console.log(word[i], (alpha.indexOf(word[i])+13), alpha[25])
    }
  }
}

rot13("SERR PBQR PNZC");

//check if index is 0-12, then + 13; 13-25, then -13, better yet check if index is greater or less than
//match the letter to alpha master
//find the index in alpha master
//take that index and add 13
//replace the letter with that 
//join arr