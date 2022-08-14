const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const myChar = ["A","B","C","D","E","F","G","H"];

// let passString1 = "";
let test = "";

let btnGenerator = document.getElementById("btn-generator");
let passwordLeft = document.getElementById("pass-L");
let passwordRight = document.getElementById("pass-R");

// let demoPassRender = document.getElementById("demo-pass");


function passwordGenerator(){
    let passString1 = "";
    let passString2 = "";
    
    for(let i = 0; i < characters.length; i++){
        var passOne = Math.floor(Math.random() * characters.length );

        if(characters[passOne] !== undefined){
        
            passString1 += characters[passOne];
        
        }else if(characters[passOne] !== NaN){

        }else{
            passString1 -= characters[passOne]
        }
                   
    }
    for(let i = 0; i < characters.length; i++){
        var passOne = Math.floor(Math.random() * characters.length );

        if(characters[passOne] !== undefined){
        
            passString2 += characters[passOne];
        
        }else if(characters[passOne] !== NaN){

        }else{
            passString2 -= characters[passOne]
        }
                   
    }
    
    console.log(passString1);
    passwordLeft.setAttribute("value", passString1);
    
    

    console.log(passString2);
    passwordRight.setAttribute("value", passString2);

}

function copyPasswordLeft(){
    // passwordLeft
    passwordLeft.select(); 
    document.execCommand("copy");
    alert("The generated password copied");
}

function copyPasswordRight(){
    // passwordLeft
    passwordRight.select(); 
    document.execCommand("copy");
    alert("The generated password copied");
}