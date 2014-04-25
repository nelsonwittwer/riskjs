var attackingPieces = 0;
var defendingPieces = 0;

function battle(attackingDiceCount, defendingDiceCount) {
  var attackingDice = rollDice(attackingDiceCount);
  var defendingDice = rollDice(defendingDiceCount);

  compareResults(attackingDice, defendingDice);
}

function calculateAttackingDiceCount() {
  if (attackingPieces > 3) {
    return 3
  } else if ( attackingPieces > 1 ) {
    return 2
  } else {
    return 1
  }
}

function calculateDefendingDiceCount() {
  if (defendingPieces > 1) {
    return 2
  } else {
    return 1
  }
}

function compareResults(attackingDice, defendingDice) {
  var attackingDiceCount = attackingDice.size;
  var defendingDiceCount = defendingDice.size;


  for (die in defendingDice) {
    var attackingDie = attackingDice[die];
    var defendingDie = defendingDice[die];

    if (attackingDie > defendingDie) {
      defendingPieces--;
    } else {
      attackingPieces--;
    }
  }
}

function playTurn(inputAttackingPieces, inputDefendingPieces) {
  attackingPieces = inputAttackingPieces;
  inputDefendingPieces = inputDefendingPieces;

  while ( defendingPieces > 0 && attackingPieces > 1) {
    attackingDiceCount = calculateAttackingDiceCount();
    defendingDiceCount = calculateDefendingDiceCount();

    battle(attackingDiceCount, defendingDiceCount);
  }

  console.log("Attacking remaining players: " + attackingPieces);
  console.log("Defending remaining players: " + defendingPieces);
}

function rollDice(diceCount) {
  var results = [];
  for(var die = 0; die < diceCount; die++) {
    results[die] = rollDie();
  }
  return results.sort(function(a,b) { return b-a});
}

function rollDie(){
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

playTurn(300, 300);

