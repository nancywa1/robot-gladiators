var playerName =window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttach, playerHealth);

var enemyNames=["Roborto","Amy Android","Robo Trumble"];
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames[3]);
// console.log(enemyNames.length);
// for (var i=0;i<enemyNames.length; i++)
// {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i]+" is at " +i +" index");
// }
var enemyHealth=50;
var enemyAttack=12;


var fight = function(enemyName) {
    while(playerHealth>0 && enemyHealth>0){
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight)
     if (promptFight ==="skip" || promptFight==="SKIP") {
        // window.alert (playerName + " has chose to skip the fight!");
        var confirmSkip=window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
            
            window.alert(playerName+" has decided to skip this fight. Goodbye!");
            playerMoney=playerMoney-10;
            console.log("playerMoney",playerMoney);
            break;
        }
        // else {
        //     fight();
        // }

    }
    
    if (promptFight==="fight" || promptFight==="FIGHT"){
    enemyHealth=enemyHealth-playerAttack;
    console.log(
        playerName+ " attacked "+enemyName +". " +enemyName +" now has " + enemyHealth + " health remaining."
    );
    if (enemyHealth<=0) {
        window.alert(enemyName+ " has died!");
        playerMoney=playerMoney+20;
        break;
    } else {
        window.alert(enemyName+" still has "+ enemyHealth + " health left.");
    }
    playerHealth=playerHealth-enemyAttack;
    console.log (
        enemyName+" attacked "+playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    if (playerHealth<=0) {
        window.alert (playerName + " has died!");
        break;

    } else {
        window.alert(playerName+ " still has " +playerHealth + " health left.");

    }

    }  else { 
        window.alert("You need to choose a valid option. Try again!");
    }

  }

}

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth>0){
        window.alert("Welcome to Robot Gladiators! Round "+(i+1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
    break;
 }

}