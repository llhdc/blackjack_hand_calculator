/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
let totalValue = 0;

  for (let i = 0; i < hand.length; i++) {
    if ((parseInt(hand[i]) >= 1) && (parseInt(hand[i]) <= 10)) {
      totalValue += parseInt(hand[i]);
    } else if ((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")) {
      totalValue += 10;
    } else if (hand[i] === "A") {
      if (totalValue <= 10) {
        totalValue += 11;
      } else {
        totalValue += 1;
      }
    }
  };
  
  if ((totalValue > 21) && (hand.includes('A'))) {
    totalValue -= 10;
  }
  // loop over all cards and convert to total value
  // TODO: convert string value into number
    // TODO: add numerical value to totalValue

  return totalValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
