let mynewcalc =(n1:number, n2:number, s:string)=> {


    if (s == "+"){
         console.log(n1 + n2)
       }else if(s == "-"){
      console.log(n1-n2)
       }else if(s == "*"){
        console.log(n1*n2)
  }else if(s == "/"){
           console.log(n1/n2)
       }else{
             console.log("Incorrect sign")
        }
     }

mynewcalc(10,20,"=")