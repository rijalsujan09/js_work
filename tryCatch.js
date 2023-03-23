
try {
    adlert("Welcome guest!");
  }

  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
    console.log("Error Occured..!");
  }

  const myFunc=()=>{
    const msg = document.getElementById("demo2");
   msg.innerHTML="";

    let x = document.getElementById("demo1").value;
    try{
        if(x.trim()=="") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x<5) throw "num too low";
        if(x>10) throw "num too high";
    }
    catch(err){
        msg.innerHTML = err;
        console.log(`${x} ${err}`);
    }
    finally{
        document.getElementById("demo1").value ="";
console.log("finally block is executed..!")
    }
    
  }