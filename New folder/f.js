const DNA = {
    "Alpha": "2R8R9D7L8",
    
    "Beta": "1D9D3R2U7",
    
    "Gamma": "2R8U7L3",
    
    "Zeta":"0U5R9D1"
    }
    
    const direction = {
      'R' : [0,1],
      'L' : [0,-1],
      'U' : [-1,0],
      'D' : [1,0]
    }


    const findPath = (virious,viriousString,mat,startposition) => {
              
        // let prePositions = [...startposition];
        for(let i = 1; i < viriousString.length-1 ; i++){

            let dir = direction[viriousString[i]];
            if( startposition[0] + dir[0] < 0 || startposition[1] + dir[1] < 0 ||  startposition[0] + dir[0] >= 4 || startposition[1] + dir[1] >= 4 ) return "";
            if(mat[ startposition[0] + dir[0] ][startposition[1]+dir[1]] != parseInt(viriousString[i+1])){
              return "";
            }
            startposition[0] = startposition[0]+dir[0];
             startposition[1]  = startposition[1]+dir[1];
             i++;
        }




        return virious;
 }

    
    function VirusDNASignatureMatching(arr) { 
    
      let mattrix = [];
       let narr = [];
       let ans = "";
       
       for(let i = 0;i<arr.length;i++){
              narr.push(arr[i]);
             
            if(narr.length === 4){
              mattrix.push(narr);
              narr = [];
            }
    
       }
       for (let virious of Object.keys(DNA)) {  
        let viriousString = DNA[virious];
    
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (mattrix[j][k] === parseInt(viriousString[0])) {
                    if (findPath(virious, viriousString, mattrix, [j, k]).length !== 0) {
                        return virious;  
                    }
                }
            }
        }
    }
    
        
    
      // code goes here  
      return "No Match"; 
    
    }
       
    // keep this function call here 
    console.log(VirusDNASignatureMatching([2, 8, 9, 7,
        1, 8, 7, 2,
        2, 8, 7, 3,
        0, 5, 9, 1]));