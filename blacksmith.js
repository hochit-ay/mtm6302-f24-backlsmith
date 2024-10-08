// Variables

let gold = 10;        
let wood = 10;        
let ore = 10;         
let sword = 0;      
let axe = 0;        
let fireStatus = false;  


// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */

function fire() {
  if (fireStatus == false && wood > 0) {
    fireStatus = true;
    wood--;
    return 'The fire is going.';
    console.log('The fire is going.');
  } else if (fireStatus === true) {
    fireStatus = false;
    return 'The fire is out.';
    console.log('The fire is out.');
  } else {
    return 'You do not have enough wood. Buy wood using the buy("wood") command.';
  }
}

// /**
//  * buy
//  */

function buy(item) {
  if (item === 'ore' && gold >= 3 && fireStatus === false) {
    ore++;
    gold -= 3;
    console.log('You bought 1 ore.');
  } else if (item === 'wood' && gold >= 1 && fireStatus === false) {
    wood++;
    gold -= 1;
    console.log('You bought 1 wood.');
  } else if (gold < 1) {
    console.log('Not enough gold!');
  } else {
    console.log('Cannot buy while the fire is burning.');
  }
}

// /**
//  * make
//  */

function make(item) {
  if (fireStatus === false) {
    return 'The fire must be burning to make weapons.';
  }

  if (item === 'sword') {
    if (ore >= 2 && wood >= 1) {
      ore -= 2;
      wood -= 1;
      sword++;
      console.log('You made 1 sword.');
    } else {
      return 'Not enough ore or wood to make a sword.';
    }
  } else if (item === 'axe') {
    if (ore >= 1 && wood >= 2) {
      ore -= 1;
      wood -= 2;
      axe++;
      return 'You made 1 axe.';
    } else {
      return 'Not enough ore or wood to make an axe.';
    }
  } else {
    return 'You can only make "sword" or "axe".';
  }
}

// /**
//  * sell
//  */

function sell(item) {
  if (fireStatus === true) {
    return 'You cannot sell items while the fire is burning.';
  }

  if (item === 'sword' && sword > 0) {
    sword--;
    gold += 5;
    return 'You sold 1 sword for 5 gold.';
  } else if (item === 'axe' && axe > 0) {
    axe--;
    gold += 4;
    return 'You sold 1 axe for 4 gold.';
  } else {
    return 'You do not have any to sell.';
  }
}



// /**
//  * inventory
//  * Shows the players current inventory
//  */
function inventory() {
  console.log(`Current Inventory: Gold: ${gold}, Ore: ${ore}, Wood: ${wood}, Sword: ${sword}, Axe: ${axe}`);
}


// /**
//  * Help Command
//  * Returns the instruction on how to play the game.
//  */

function help() {
  return `INSTRUCTIONS: As a blacksmith, you convert ore and wood into swords and axes. 
  You buy your resources using gold and sell your weapons for gold.
  COMMANDS:
  - fire(): Start or stop the fire
  - buy('item'): Buy 'ore' or 'wood'
  - make('item'): Make 'sword' or 'axe'
  - sell('item'): Sell 'sword' or 'axe'
  - inventoryDisplay(): Check current inventory
  - help(): Display instructions`;
}
