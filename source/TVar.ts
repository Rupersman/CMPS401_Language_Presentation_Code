// *************** //
// **** Both  **** //
// *************** //

// ** Strings ** //
/* TypeScript */
let this_is_a_string: String = "Bob";
/* JavaScript */
let i_am_also_a_string = "Bob";

// ** Numbers ** //
/* TypeScript */
let this_is_a_number: Number = 5;
/* Javascript */
let i_am_also_a_number = 5;

// ** Boolans ** //
/* TypeScript */
let this_is_a_boolean: Boolean = true;
/* JavaScript */
let i_am_also_a_boolean = true;

// ** Arrays ** //
let this_is_an_array: Array<String> = ["woop", "bam"];
let this_is_another_array: Array<Number> = [5, 10];

// ** Objects ** //
let this_is_an_object: Object = {
  id: 0,
  name: "bob",
  nicknames: ["bob", 5, "james"],
};

//! DO NOT USE THIS IF POSSIBLE
let bad_variable: any = "";
bad_variable = 5; //Because then this is allowed

// ************************* //
// **** TypeScript Only **** //
// ************************* //

// ** Types ** //
type this_is_a_type = {
  id: Number;
  name: String;
  nicknames: Array<String>;
};

// ** Interfaces ** //
interface this_is_an_interface {
  id: Number;
  name: String;
  nicknames: Array<String>;
}

/* 
    The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
*/
