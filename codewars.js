function findNeedle(haystack){
    let ind;
    for(let i = 0; i < haystack.length; i++){
      if(haystack[i] === "needle"){
         let ind = haystack.indexOf("needle");
         console.log("dound the needle at position " + ind);
      }
    }
  }