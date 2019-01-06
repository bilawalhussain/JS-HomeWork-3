/*
    -Condtional and Logical Statements-
    In this program we will use if and else if statements for checking whether he is man 
    or socrates if it is true then both are mortal else they are not mortal...
*/

let CheckManOrSocrates = function(){
    let input="man";
    //let input="socrates";             // if you want to check this.. Comment other input
    //let input="woman";                // if you want to check this.. Comment 2 input above it

    if (input==="man")
        console.log("Since it is man we can say that all man are mortal");

    else if (input==="socrates")
        console.log("Since it is socrates since socrates are man too therefore socrates are mortal too");
    
    else
        console.log("Since it is neither man nor socrates therefore it is not mortal");
}


let CheckVanillaOrChocolate=function()
{
    let checkValue="Vanilla";
    //let checkValue="Chocolate";       // if you want to check Chocolate comment other 2 checkValue
    //let checkValue="Stawberry";           // same for this one too
    if (checkValue==="Vanilla" || checkValue==="Chocolate"){
        console.log("Cake is either Vanilla or Chocolate");
        if (checkValue==="Vanilla")
        {
            console.log("It is Vanilla Cake");
        }
        else
        {
            console.log("It is Chocolate");
        }
    }
    else
    {
        console.log("Cake is neither Chocolate nor Vanilla.. It is "+checkValue);
    }
}

CheckManOrSocrates();               // This is actual task
CheckVanillaOrChocolate();          // This is extra Credit Part