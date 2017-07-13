/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

let totalValue = 0;
function handValue (hand) {

  for (let i = 0; i < hand.length; i++) {
    totalValue = parseInt(hand[i]) + totalValue;
  };

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
