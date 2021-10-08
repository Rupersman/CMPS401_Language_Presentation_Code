/*
 * Test Loops: 	while, for, and nested loops. 
 * Program-ID: 	TSub.ts
 * Author:		Kwentin Ransom
 * OS:			Ubuntu 20.04
 * Compiler:	TSC
 * Note:
 * The following instructions are used to
 * 		edit, compile, and run this program
 * 	   $nano TLoop.ts
 * 	   $tsc TLoop.ts
 * 	   $node TLoop.js
 */

//setting numeric and boolean variables
let x: boolean = true;
let y: number = 0; 
let i: number = 0;

//while loop that prints the value of y until the condition is met
while(x != false){
	
	if(y! != 10) {
		console.log(y);
		y++;
	}	
	else {
		x = false;
	}
	
}

console.log();

//creating numbers array
//for loop prints out numbers
var numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i=0;i<=10;i++) { 
	console.log("Loading in progress..." + numbers[i]);
}
	
/*
 * Output:
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 * 
 * Loading in progress...1
 * Loading in progress...2
 * Loading in progress...3
 * Loading in progress...4
 * Loading in progress...5
 * Loading in progress...6
 * Loading in progress...7
 * Loading in progress...8
 * Loading in progress...9
 * Loading in progress...10
 */
 
 
