let str= "Welcome to bitcs";
let a= str.split(" ");


function hell(a){
    let b= a.split("");
    let s=0;
   let e=a.length-1;
   while(s<=e){
    let temp=b[s];
    b[s]=b[e];
    b[e]=temp;
    s= s+1;
    e= e-1;
   }
   a= b.join("");
   return a;
}

console.log(hell(a[0]), hell(a[1]), hell(a[2]));