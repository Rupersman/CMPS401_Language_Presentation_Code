// ********************** //
// **** If / Else If **** //
// ********************** //

let number: number = 5;

/* Note: 3 equal signs */
if(number === 1){
    /* Do something */
} else if (number === 5){
    /* Do something */
} else {
    /* Do something */
}

// **************** //
// **** Switch **** //
// **************** //

switch(number){
    case 1: 
        console.log("You should not see me: Case 1");
        break;
    case 5:
        console.log("You should see me");
        break;
    default:
        console.log("You should not see me: default case");
        break;
}