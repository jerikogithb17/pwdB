var iAge;


        var sMF;
 
         iAge = prompt("Please enter your age in years.",0);
            sMF = prompt("Are your a (M)ale or (F)emale?","M");
 
            if(iAge > 20) {
                if (sMF == "M") {
                alert("Your are a male over 20 years of age");
                }else{
                    alert("you are a female over 20 years of age");
                }
            }else{
                 if(sMF == "M"){
                     alert("you are a male under the age of 21");
                 } else {
                    alert("you are a female under the age of 21");
                }
            }