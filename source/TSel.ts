// ********************** //
// **** If / Else If **** //
// ********************** //

let number = 5; //Note: Implicit typing

/* Note: 3 equal signs */
if (number === 1) {
  console.log("You should not see me: number == 1");
} else if (number === 5) {
  console.log("You should see me");
} else {
  console.log("You should not see me: number != 1 || 5");
}

// **************** //
// **** Switch **** //
// **************** //

switch (number) {
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
