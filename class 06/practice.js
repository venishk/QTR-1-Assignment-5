"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*let n1=6
let n2=14
let sign:string="="

if(sign=="+"){
    console.log(n1+n2)
}else if(sign=="-"){
    console.log(n1-n2)
}else{
    console.log("invalid sign")

}


function calc(){
let L1=3
let L2=2
let sign:string="="

if (sign=="+")
    {console.log(L1+L2)}
else if(sign=="-")
    {console.log(L1-L2)}
else{
    console.log("invalid sign")
}
}

calc()

function calc(L1:number,L2:number,sign:string){
        
    if (sign=="+")
        {console.log(L1+L2)}
    else if(sign=="-")
        {console.log(L1-L2)}
    else if(sign=="*")
        {console.log(L1*L2)}
    else if(sign=="/")
        {console.log(L1/L2)}
    else{
        console.log("invalid sign")
    }
    }
    calc(3,2,"*")
    calc(3,2,"+")
    calc(3,2,"-")
    calc(3,2,"/")
    calc(3,2,"=")

*/
let calc = (L1, L2, sign) => {
    if (sign == "+") {
        console.log(L1 + L2);
    }
    else if (sign == "-") {
        console.log(L1 - L2);
    }
    else if (sign == "*") {
        console.log(L1 * L2);
    }
    else if (sign == "/") {
        console.log(L1 / L2);
    }
    else {
        console.log("invalid sign");
    }
};
calc(10, 20, "-");
