var playerName =window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttach=10;
var playerMoney=10;

// You can also log multiple values at once like this
console.log(playerName, playerAttach, playerHealth);

var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight)
    if (promptFight==="fight" || promptFight==="FIGHT"){
    enemyHealth=enemyHealth-playerHealth;
    console.log(
        playerName+ " attacked "+enemyName +". " +enemyName +" now has " + enemyHealth + " health remaining."
    );
    if (enemyHealth<=0) {
        window.alert(enemyName+ " has died!");
    } else {
        window.alert(enemyName+" still has "+ enemyHealth +"health left.")
    }
    playerHealth=playerHealth-enemyAttack;
    console.log (
        enemyName+" attached "+playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    if (playerHealth<=0) {
        window.alert (playerName + " has died!");

    } else {
        window.alert(playerName+ " still has " +playerHealth + "health left.");

    }

    } else if (promptFight ==="skip" || promptFight==="SKIP") {
        // window.alert (playerName + " has chose to skip the fight!");
        var confirmSkip=window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
            window.alert(playerName+" has decided to skip this fight. Goodbye!");
            playerMoney=playerMoney-2;
        }
        else {
            fight();
        }

    } else { 
        window.alert("You need to choose a valid option. Try again!");
    }
 
}

  
fight ()