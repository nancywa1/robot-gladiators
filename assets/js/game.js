var playerName =window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttach=10;

// You can also log multiple values at once like this
console.log(playerName, playerAttach, playerHealth);

var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  
    // Log a resulting message to the console so we know that it worked.
    enemyHealth=enemyHealth-playerAttach 
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth+ " health remaining"
    )
    // check enemy's health
    if (enemyHealth<=0){
        window.alert(enemyName+ " has died!");

    }
    else {
        window.alert(enemyName + " stil has " + enemyHealth + " health left")
    }
  
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
if (playerHealth<=0){
    window.alert(playerName+ " has died!")
}
else {
    window.alert(playerName+ " still has " + playerHealth + " health remaining")
}

  };
fight ()