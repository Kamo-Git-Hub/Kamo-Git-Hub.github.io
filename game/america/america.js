let trueAnswerCount = document.querySelector(".true-count-page");

let falseQuestionPage = document.querySelector(".false-count-page");

let countTrue = 0;

let countFalse = 0;




document.querySelector(".start-game").onclick = function startGame() {

    document.querySelector(".start-game").style.display = "none"

    //chile
    document.querySelector(".chile").style.display ="block"

    document.getElementById("true-chile").onclick = () => {
        document.querySelector(".chile").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".cuba").style.display = "block";
      };
    
      let falseChile = document.querySelectorAll("#false-chile");
    
      for (let i = 0; i < falseChile.length; i++) {
        falseChile[i].onclick = () => {
          document.querySelector(".chile").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".cuba").style.display = "block";
        };
      }
      //chile



      //cuba
    document.getElementById("true-cuba").onclick = () => {
        document.querySelector(".cuba").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".barbados").style.display = "block";
      };
    
      let falseCuba = document.querySelectorAll("#false-cuba");
    
      for (let i = 0; i < falseCuba.length; i++) {
        falseCuba[i].onclick = () => {
          document.querySelector(".cuba").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".barbados").style.display = "block";
        };
      }
      //cuba



      //barbados
    document.getElementById("true-bar").onclick = () => {
        document.querySelector(".barbados").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".nicaragua").style.display = "block";
      };
    
      let falseBar = document.querySelectorAll("#false-bar");
    
      for (let i = 0; i < falseBar.length; i++) {
        falseBar[i].onclick = () => {
          document.querySelector(".barbados").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".nicaragua").style.display = "block";
        };
      }
      //barbados


      //nicaragua
    document.getElementById("true-nic").onclick = () => {
        document.querySelector(".nicaragua").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".haiti").style.display = "block";
      };
    
      let falseNic = document.querySelectorAll("#false-nic");
    
      for (let i = 0; i < falseNic.length; i++) {
        falseNic[i].onclick = () => {
          document.querySelector(".nicaragua").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".haiti").style.display = "block";
        };
      }
      //nicaragua



      //haiti
    document.getElementById("true-haiti").onclick = () => {
        document.querySelector(".haiti").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".peru").style.display = "block";
      };
    
      let falseHaiti = document.querySelectorAll("#false-haiti");
    
      for (let i = 0; i < falseHaiti.length; i++) {
        falseHaiti[i].onclick = () => {
          document.querySelector(".haiti").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".peru").style.display = "block";
        };
      }
      //haiti



      //peru
    document.getElementById("true-peru").onclick = () => {
      document.querySelector(".peru").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".guatemala").style.display = "block";
    };
  
    let falsePeru = document.querySelectorAll("#false-peru");
  
    for (let i = 0; i < falsePeru.length; i++) {
      falsePeru[i].onclick = () => {
        document.querySelector(".peru").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".guatemala").style.display = "block";
      };
    }
    //peru




     //guatemala
     document.getElementById("true-gua").onclick = () => {
      document.querySelector(".guatemala").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".venezuela").style.display = "block";
    };
  
    let falseGua = document.querySelectorAll("#false-gua");
  
    for (let i = 0; i < falseGua.length; i++) {
      falseGua[i].onclick = () => {
        document.querySelector(".guatemala").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".venezuela").style.display = "block";
      };
    }
    //guatemala



    //venezuela
    document.getElementById("true-ven").onclick = () => {
      document.querySelector(".venezuela").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".d-r").style.display = "block";
    };
  
    let falseVen = document.querySelectorAll("#false-ven");
  
    for (let i = 0; i < falseVen.length; i++) {
      falseVen[i].onclick = () => {
        document.querySelector(".venezuela").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".d-r").style.display = "block";
      };
    }
    //venezuela



    //d-r
    document.getElementById("true-d-r").onclick = () => {
      document.querySelector(".d-r").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".panama").style.display = "block";
    };
  
    let falseDR = document.querySelectorAll("#false-d-r");
  
    for (let i = 0; i < falseDR.length; i++) {
      falseDR[i].onclick = () => {
        document.querySelector(".d-r").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".panama").style.display = "block";
      };
    }
    //d-r



    //panama
    document.getElementById("true-panama").onclick = () => {
      document.querySelector(".panama").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".ecuador").style.display = "block";
    };
  
    let falsePanama = document.querySelectorAll("#false-panama");
  
    for (let i = 0; i < falsePanama.length; i++) {
      falsePanama[i].onclick = () => {
        document.querySelector(".panama").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".ecuador").style.display = "block";
      };
    }
    //panama



    //ecuador
    document.getElementById("true-ecu").onclick = () => {
      document.querySelector(".ecuador").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".canada").style.display = "block";
    };
  
    let falseEcu = document.querySelectorAll("#false-ecu");
  
    for (let i = 0; i < falseEcu.length; i++) {
      falseEcu[i].onclick = () => {
        document.querySelector(".ecuador").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".canada").style.display = "block";
      };
    }
    //ecuador



    //canada
    document.getElementById("true-can").onclick = () => {
      document.querySelector(".canada").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".argentina").style.display = "block";
    };
  
    let falseCan = document.querySelectorAll("#false-can");
  
    for (let i = 0; i < falseCan.length; i++) {
      falseCan[i].onclick = () => {
        document.querySelector(".canada").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".argentina").style.display = "block";
      };
    }
    //canada



    //argentina
    document.getElementById("true-arg").onclick = () => {
      document.querySelector(".argentina").style.display = "none";
      countTrue++;
      trueAnswerCount.innerHTML = countTrue;
      document.querySelector(".jamaica").style.display = "block";
    };
  
    let falseArg = document.querySelectorAll("#false-arg");
  
    for (let i = 0; i < falseArg.length; i++) {
      falseArg[i].onclick = () => {
        document.querySelector(".argentina").style.display = "none";
        countFalse++;
        falseQuestionPage.innerHTML = countFalse;
        document.querySelector(".jamaica").style.display = "block";
      };
    }
    //argentina



      //jamaica
      document.getElementById("true-jam").onclick = () => {
        document.querySelector(".jamaica").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".usa").style.display = "block";
      };
    
      let falseJam = document.querySelectorAll("#false-jam");
    
      for (let i = 0; i < falseJam.length; i++) {
        falseJam[i].onclick = () => {
          document.querySelector(".jamaica").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".usa").style.display = "block";
        };
      }
      //jamaica



      //usa
      document.getElementById("true-usa").onclick = () => {
        document.querySelector(".usa").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".costa-rica").style.display = "block";
      };
    
      let falseUSA = document.querySelectorAll("#false-usa");
    
      for (let i = 0; i < falseUSA.length; i++) {
        falseUSA[i].onclick = () => {
          document.querySelector(".usa").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".costa-rica").style.display = "block";
        };
      }
      //usa



      //costa-rica
      document.getElementById("true-cr").onclick = () => {
        document.querySelector(".costa-rica").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".grenada").style.display = "block";
      };
    
      let falseCr = document.querySelectorAll("#false-cr");
    
      for (let i = 0; i < falseCr.length; i++) {
        falseCr[i].onclick = () => {
          document.querySelector(".costa-rica").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".grenada").style.display = "block";
        };
      }
      //costa-rica


      //grenada-rica
      document.getElementById("true-gr").onclick = () => {
        document.querySelector(".grenada").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".bolivia").style.display = "block";
      };
    
      let falseGr = document.querySelectorAll("#false-gr");
    
      for (let i = 0; i < falseGr.length; i++) {
        falseGr[i].onclick = () => {
          document.querySelector(".grenada").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".bolivia").style.display = "block";
        };
      }
      //grenada-rica



      //bolivia
      document.getElementById("true-bol").onclick = () => {
        document.querySelector(".bolivia").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".mexico").style.display = "block";
      };
    
      let falseBol = document.querySelectorAll("#false-bol");
    
      for (let i = 0; i < falseBol.length; i++) {
        falseBol[i].onclick = () => {
          document.querySelector(".bolivia").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".mexico").style.display = "block";
        };
      }
      //bolivia


       //mexico
       document.getElementById("true-mex").onclick = () => {
        document.querySelector(".mexico").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".brazil").style.display = "block";
      };
    
      let falseMex = document.querySelectorAll("#false-mex");
    
      for (let i = 0; i < falseMex.length; i++) {
        falseMex[i].onclick = () => {
          document.querySelector(".mexico").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".brazil").style.display = "block";
        };
      }
      //mexico



      //brazil
      document.getElementById("true-bra").onclick = () => {
        document.querySelector(".brazil").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".greenland").style.display = "block";
      };
    
      let falseBra = document.querySelectorAll("#false-bra");
    
      for (let i = 0; i < falseBra.length; i++) {
        falseBra[i].onclick = () => {
          document.querySelector(".brazil").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".greenland").style.display = "block";
        };
      }
      //brazil



      //greenland
      document.getElementById("true-gre").onclick = () => {
        document.querySelector(".greenland").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".paraguay").style.display = "block";
      };
    
      let falseGre = document.querySelectorAll("#false-gre");
    
      for (let i = 0; i < falseGre.length; i++) {
        falseGre[i].onclick = () => {
          document.querySelector(".greenland").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".paraguay").style.display = "block";
        };
      }
      //greenland



      //paraguay
      document.getElementById("true-par").onclick = () => {
        document.querySelector(".paraguay").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".sl").style.display = "block";
      };
    
      let falsePar = document.querySelectorAll("#false-par");
    
      for (let i = 0; i < falsePar.length; i++) {
        falsePar[i].onclick = () => {
          document.querySelector(".paraguay").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".sl").style.display = "block";
        };
      }
      //paraguay



       //sl
       document.getElementById("true-sl").onclick = () => {
        document.querySelector(".sl").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".dominica").style.display = "block";
      };
    
      let falseSL = document.querySelectorAll("#false-sl");
    
      for (let i = 0; i < falseSL.length; i++) {
        falseSL[i].onclick = () => {
          document.querySelector(".sl").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".dominica").style.display = "block";
        };
      }
      //sl


      //dominica
      document.getElementById("true-dom").onclick = () => {
        document.querySelector(".dominica").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".uruguay").style.display = "block";
      };
    
      let falseDom = document.querySelectorAll("#false-dom");
    
      for (let i = 0; i < falseDom.length; i++) {
        falseDom[i].onclick = () => {
          document.querySelector(".dominica").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".uruguay").style.display = "block";
        };
      }
      //dominica



      //uruguay
      document.getElementById("true-uru").onclick = () => {
        document.querySelector(".uruguay").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".colombia").style.display = "block";
      };
    
      let falseUru = document.querySelectorAll("#false-uru");
    
      for (let i = 0; i < falseUru.length; i++) {
        falseUru[i].onclick = () => {
          document.querySelector(".uruguay").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".colombia").style.display = "block";
        };
      }
      //uruguay



       //colombia
       document.getElementById("true-col").onclick = () => {
        document.querySelector(".colombia").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".handuras").style.display = "block";
      };
    
      let falseCol = document.querySelectorAll("#false-col");
    
      for (let i = 0; i < falseCol.length; i++) {
        falseCol[i].onclick = () => {
          document.querySelector(".colombia").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".handuras").style.display = "block";
        };
      }
      //colombia



      //handuras
      document.getElementById("true-han").onclick = () => {
        document.querySelector(".handuras").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".restart").style.display ="block"
      };
    
      let falseHan = document.querySelectorAll("#false-han");
    
      for (let i = 0; i < falseHan.length; i++) {
        falseHan[i].onclick = () => {
          document.querySelector(".handuras").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".restart").style.display ="block"
        };

        //handuras

        document.querySelector(".restart-game").onclick =()=>{
          document.querySelector(".restart").style.display ="none"
          trueAnswerCount.innerHTML = countTrue=0
          falseQuestionPage.innerHTML = countFalse=0
          
          startGame()
          
        }
      }
      

    }
  