// The Array.from() saves you time making a large array instead of typing 1-100 
// const numbersThing = Array.from([101], x => x + x); 

for (let i = 0; i < 100; i++) {
    
    let output = "";
    if( i % 5 == 0 ) { output += "Chicken"}
    if( i % 7 == 0 ) { output += "Monkey"}
    if(output == "") { output = i; }
    console.log(output);

}