let a= "my name is govind mishra,i am a very good guy you see.you can love me,the way you want.abhinav,teri maa ki.";

let b= a.split("");
for(let i=0; i<b.length-1;i++){

if(b[i]===","){
    b[i+1]= " " + b[i+1];
}
else if(b[i]==="."){
    b[i+1]= " " + b[i+1].toUpperCase();
}
else if(b[i]===b[0]){
    b[i]= b[i].toUpperCase();
}
}

let c= b.join("");
console.log(c);