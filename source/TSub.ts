/*
 * Test Subprograms
 * Program-ID: 	TSub.ts
 * Author:		Kwentin Ransom
 * OS:			Ubuntu 20.04
 * Compiler:	TSC
 * Note:
 * The following instructions are used to
 * 		edit, compile, and run this program
 * 	   $nano TSub.ts
 * 	   $tsc TSub.ts
 * 	   $node TSub.js
 * 
 */
 
//Functions
function add(x: number, y: number) { 
	//x = 5;
	//y = 5;
	return x + y;
}

/*
 * Functions can be type based:
 * Parameters value type can be set
 * Return value type can be set
 */
function addToString(x: number, y: number): String { 
	//x = 10; 
	//y = 10;
	return x.toString() + " " + y.toString();
} 

let a: number = 10;
let b: number = 10;
console.log(add(a, b));
console.log(addToString(a, b));

/*
 * Output: 
 * 20
 * 10 10
 */ 
