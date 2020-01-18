let trueAnswerCount = document.querySelector(".true-count-page");

let falseQuestionPage = document.querySelector(".false-count-page");

let countTrue = 0;

let countFalse = 0;



document.querySelector(".start-game").onclick = function startGame() {

    document.querySelector(".start-game").style.display = "none"

  //    algiria

  document.querySelector(".algiria").style.display = "block";

  document.getElementById("true-algiria").onclick = () => {
    document.querySelector(".algiria").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".angola").style.display = "block";
  };

  let falseAlgiria = document.querySelectorAll("#false-algiria");

  for (let i = 0; i < falseAlgiria.length; i++) {
    falseAlgiria[i].onclick = () => {
      document.querySelector(".algiria").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".angola").style.display = "block";
    };
  }

  //    algiria

  //    angola

  document.getElementById("true-angola").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".angola").style.display = "none";
    document.querySelector(".rsa").style.display = "block";
  };

  let falseAngola = document.querySelectorAll("#false-angola");

  for (let i = 0; i < falseAngola.length; i++) {
    falseAngola[i].onclick = () => {
      document.querySelector(".angola").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".rsa").style.display = "block"
    };
  }
  //    angola

  //    RSA

  document.getElementById("true-rsa").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".rsa").style.display = "none";
    document.querySelector(".mozambique").style.display ="block"
  };

  let falseRsa = document.querySelectorAll("#false-rsa");

  for (let i = 0; i < falseRsa.length; i++) {
    falseRsa[i].onclick = () => {
      document.querySelector(".rsa").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".mozambique").style.display ="block"
      
    };
  }
  //    RSA


  //    mozambique

  document.getElementById("true-moz").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".mozambique").style.display = "none";
    document.querySelector(".ghana").style.display ="block"
  };

  let falseMoz = document.querySelectorAll("#false-moz");

  for (let i = 0; i < falseMoz.length; i++) {
    falseMoz[i].onclick = () => {
      document.querySelector(".mozambique").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".ghana").style.display ="block"
      
    };
  }
  //    mozambique


  //    ghana

  document.getElementById("true-gana").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".ghana").style.display = "none";
    document.querySelector(".mali").style.display ="block"
  };

  let falseGhana = document.querySelectorAll("#false-gana");

  for (let i = 0; i < falseGhana.length; i++) {
    falseGhana[i].onclick = () => {
      document.querySelector(".ghana").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".mali").style.display ="block"
      
    };
  }
  //    ghana


  //    mali

  document.getElementById("true-mali").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".mali").style.display = "none";
    document.querySelector(".cameroon").style.display ="block"
  };

  let falseMali = document.querySelectorAll("#false-mali");

  for (let i = 0; i < falseMali.length; i++) {
    falseMali[i].onclick = () => {
      document.querySelector(".mali").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".cameroon").style.display ="block"
      
    };
  }
  //    mali



  //    cameroon

  document.getElementById("true-cam").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".cameroon").style.display = "none";
    document.querySelector(".egipet").style.display ="block"
  };

  let falseCam = document.querySelectorAll("#false-cam");

  for (let i = 0; i < falseCam.length; i++) {
    falseCam[i].onclick = () => {
      document.querySelector(".cameroon").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".egipet").style.display ="block"
      
    };
  }
  //    cameroon


  //    egipet

  document.getElementById("true-eg").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".egipet").style.display = "none";
    document.querySelector(".gabon").style.display ="block"
  };

  let falseEg = document.querySelectorAll("#false-eg");

  for (let i = 0; i < falseEg.length; i++) {
    falseEg[i].onclick = () => {
      document.querySelector(".egipet").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".gabon").style.display ="block"
      
    };
  }
  //    egipet


   //    gabon

   document.getElementById("true-gabon").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".gabon").style.display = "none";
    document.querySelector(".niger").style.display ="block"
  };

  let falseGabon = document.querySelectorAll("#false-gabon");

  for (let i = 0; i < falseGabon.length; i++) {
    falseGabon[i].onclick = () => {
      document.querySelector(".gabon").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".niger").style.display ="block"
      
    };
  }
  //    gabon


  //    niger

  document.getElementById("true-niger").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".niger").style.display = "none";
    document.querySelector(".gambia").style.display ="block"
  };

  let falseNiger = document.querySelectorAll("#false-niger");

  for (let i = 0; i < falseNiger.length; i++) {
    falseNiger[i].onclick = () => {
      document.querySelector(".niger").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".gambia").style.display ="block"
      
    };
  }
  //    niger


  //    gambia

  document.getElementById("true-gam").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".gambia").style.display = "none";
    document.querySelector(".somalia").style.display ="block"
  };

  let falseGam = document.querySelectorAll("#false-gam");

  for (let i = 0; i < falseGam.length; i++) {
    falseGam[i].onclick = () => {
      document.querySelector(".gambia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".somalia").style.display ="block"
      
    };
  }
  //    gambia


  //    somalia

  document.getElementById("true-som").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".somalia").style.display = "none";
    document.querySelector(".madagascar").style.display ="block"
  };

  let falseSom = document.querySelectorAll("#false-som");

  for (let i = 0; i < falseSom.length; i++) {
    falseSom[i].onclick = () => {
      document.querySelector(".somalia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".madagascar").style.display ="block"
      
    };
  }
  //    somalia


   //    madagascar

   document.getElementById("true-mad").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".madagascar").style.display = "none";
    document.querySelector(".zimbabwe").style.display ="block"
  };

  let falseMad = document.querySelectorAll("#false-mad");

  for (let i = 0; i < falseMad.length; i++) {
    falseMad[i].onclick = () => {
      document.querySelector(".madagascar").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".zimbabwe").style.display ="block"
      
    };
  }
  //    madagascar


  //    zimbabwe

  document.getElementById("true-zb").onclick = () => {
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".zimbabwe").style.display = "none";
    document.querySelector(".morocco").style.display ="block"
  };

  let falseZB = document.querySelectorAll("#false-zb");

  for (let i = 0; i < falseZB.length; i++) {
    falseZB[i].onclick = () => {
      document.querySelector(".zimbabwe").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
     document.querySelector(".morocco").style.display ="block"
      
    };
  }
  //    zimbabwe



    //    morocco

    document.getElementById("true-mor").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".morocco").style.display = "none";
        document.querySelector(".kenya").style.display ="block"
      };
    
      let falseMor = document.querySelectorAll("#false-mor");
    
      for (let i = 0; i < falseMor.length; i++) {
        falseMor[i].onclick = () => {
          document.querySelector(".morocco").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".kenya").style.display ="block"
          
        };
      }
      //    morocco



      //    kenya

    document.getElementById("true-kenya").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".kenya").style.display = "none";
        document.querySelector(".libya").style.display ="block"
      };
    
      let falseKenya = document.querySelectorAll("#false-kenya");
    
      for (let i = 0; i < falseKenya.length; i++) {
        falseKenya[i].onclick = () => {
          document.querySelector(".kenya").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".libya").style.display ="block"
          
        };
      }
      //    kenya



       //    libya

    document.getElementById("true-libya").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".libya").style.display = "none";
        document.querySelector(".benin").style.display ="block"
      };
    
      let falseLibya = document.querySelectorAll("#false-libya");
    
      for (let i = 0; i < falseLibya.length; i++) {
        falseLibya[i].onclick = () => {
          document.querySelector(".libya").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".benin").style.display ="block"
          
        };
      }
      //    libya



       //    benin

    document.getElementById("true-benin").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".benin").style.display = "none";
        document.querySelector(".sudan").style.display ="block"
      };
    
      let falseBenin = document.querySelectorAll("#false-benin");
    
      for (let i = 0; i < falseBenin.length; i++) {
        falseBenin[i].onclick = () => {
          document.querySelector(".benin").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".sudan").style.display ="block"
          
        };
      }
      //    benin

       //    sudan

    document.getElementById("true-sudan").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".sudan").style.display = "none";
        document.querySelector(".congo").style.display ="block"
      };
    
      let falseSudan = document.querySelectorAll("#false-sudan");
    
      for (let i = 0; i < falseSudan.length; i++) {
        falseSudan[i].onclick = () => {
          document.querySelector(".sudan").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".congo").style.display ="block"
          
        };
      }
      //    sudan



        //    congo

    document.getElementById("true-congo").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".congo").style.display = "none";
        document.querySelector(".cd").style.display ="block"
      };
    
      let falseCongo = document.querySelectorAll("#false-congo");
    
      for (let i = 0; i < falseCongo.length; i++) {
        falseCongo[i].onclick = () => {
          document.querySelector(".congo").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".cd").style.display ="block"
          
        };
      }
      //    congo



      //    cd

    document.getElementById("true-cd").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".cd").style.display = "none";
        document.querySelector(".nig").style.display ="block"
      };
    
      let falseCd = document.querySelectorAll("#false-cd");
    
      for (let i = 0; i < falseCd.length; i++) {
        falseCd[i].onclick = () => {
          document.querySelector(".cd").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".nig").style.display ="block"
          
        };
      }
      //    cd

         //    nig

    document.getElementById("true-nig").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".nig").style.display = "none";
        document.querySelector(".lib").style.display ="block"
      };
    
      let falseNig = document.querySelectorAll("#false-nig");
    
      for (let i = 0; i < falseNig.length; i++) {
        falseNig[i].onclick = () => {
          document.querySelector(".nig").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".lib").style.display ="block"
          
        };
      }
      //    nig



      //    lib

    document.getElementById("true-lib").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".lib").style.display = "none";
        document.querySelector(".bf").style.display ="block"
      };
    
      let falseLib = document.querySelectorAll("#false-lib");
    
      for (let i = 0; i < falseLib.length; i++) {
        falseLib[i].onclick = () => {
          document.querySelector(".lib").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".bf").style.display ="block"
          
        };
      }
      //    lib



       //    bf

    document.getElementById("true-bf").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".bf").style.display = "none";
        document.querySelector(".guinea").style.display ="block"
      };
    
      let falseBf = document.querySelectorAll("#false-bf");
    
      for (let i = 0; i < falseBf.length; i++) {
        falseBf[i].onclick = () => {
          document.querySelector(".bf").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".guinea").style.display ="block"
          
        };
      }
      //    bf




      //    guenia

    document.getElementById("true-gui").onclick = () => {
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".guinea").style.display = "none";
        document.querySelector(".restart").style.display ="block"
      };
    
      let falseGui = document.querySelectorAll("#false-gui");
    
      for (let i = 0; i < falseGui.length; i++) {
        falseGui[i].onclick = () => {
          document.querySelector(".guinea").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
         document.querySelector(".restart").style.display ="block"
  
        };

        //    guenia

        document.querySelector(".restart-game").onclick =()=>{
          document.querySelector(".restart").style.display ="none"
          trueAnswerCount.innerHTML = countTrue=0
          falseQuestionPage.innerHTML = countFalse=0
          
          startGame()
          
        }
        
      }
      
};



