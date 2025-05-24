/*
(0 == '\t') gives true
(0 == '\n') gives true
BUT
('\t' == '\n') gives false
Because while comparing string with a number , string gets converted to number and since it is a 
whitespace , it converts to 0 in number and 0 == 0 hence true comes
But , while comparing two strings , there is no any type conversion and hence false comes.


*/
console.log(0 == '\t');
console.log(0 == '\n');
console.log('\t' == '\n');
//To convert a value into a number , just write +(sign) before it
console.log(+'\t');
//Agar \n ko as a string print karana hai to direct \n nhi likh sakte kyuki wo uski functionality k according kuch aur hi ar dega
//So , write console.log("Converting +\\t :" , +'\t\); and first \ is escape character here.
console.log("Converting +\\t :", +'\t')

//This is not necessary that every string csn be converted into number



console.log(+[]); //This will give 0
console.log(+[[[]]]); //This also