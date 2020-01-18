let trueAnswerCount = document.querySelector(".true-count-page");

let falseQuestionPage = document.querySelector(".false-count-page");

let countTrue = 0;

let countFalse = 0;



document.querySelector(".start-game").onclick = function startGame() {

    document.querySelector(".start-game").style.display = "none"

  //    nepal

  document.querySelector(".nepal").style.display = "block";

  document.getElementById("true-nepal").onclick = () => {
    document.querySelector(".nepal").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".pakistan").style.display = "block";
  };

  let falseNepal = document.querySelectorAll("#false-nepal");

  for (let i = 0; i < falseNepal.length; i++) {
    falseNepal[i].onclick = () => {
      document.querySelector(".nepal").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".pakistan").style.display = "block";
    };
  }

  //    nepal



  //    pakistan

  document.getElementById("true-pak").onclick = () => {
    document.querySelector(".pakistan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".syria").style.display = "block";
  };

  let falsePak = document.querySelectorAll("#false-pak");

  for (let i = 0; i < falsePak.length; i++) {
    falsePak[i].onclick = () => {
      document.querySelector(".pakistan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".syria").style.display = "block";
    };
  }

  //    pakistan



  //    syria

  document.getElementById("true-syria").onclick = () => {
    document.querySelector(".syria").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".yemen").style.display = "block";
  };

  let falseSyr = document.querySelectorAll("#false-syria");

  for (let i = 0; i < falseSyr.length; i++) {
    falseSyr[i].onclick = () => {
      document.querySelector(".syria").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".yemen").style.display = "block";
    };
  }

  //    syria



  //    yemen

  document.getElementById("true-yemen").onclick = () => {
    document.querySelector(".yemen").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".uae").style.display = "block";
  };

  let falseYemen = document.querySelectorAll("#false-yemen");

  for (let i = 0; i < falseYemen.length; i++) {
    falseYemen[i].onclick = () => {
      document.querySelector(".yemen").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".uae").style.display = "block";
    };
  }

  //    yemen



  //    uae

  document.getElementById("true-uae").onclick = () => {
    document.querySelector(".uae").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".kuwait").style.display = "block";
  };

  let falseUae = document.querySelectorAll("#false-uae");

  for (let i = 0; i < falseUae.length; i++) {
    falseUae[i].onclick = () => {
      document.querySelector(".uae").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".kuwait").style.display = "block";
    };
  }

  //    uae



  //    uae

  document.getElementById("true-kuw").onclick = () => {
    document.querySelector(".kuwait").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".jordan").style.display = "block";
  };

  let falseKuw = document.querySelectorAll("#false-kuw");

  for (let i = 0; i < falseKuw.length; i++) {
    falseKuw[i].onclick = () => {
      document.querySelector(".kuwait").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".jordan").style.display = "block";
    };
  }

  //    uae



   //    jordan

   document.getElementById("true-jor").onclick = () => {
    document.querySelector(".jordan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".combodida").style.display = "block";
  };

  let falseJor = document.querySelectorAll("#false-jor");

  for (let i = 0; i < falseJor.length; i++) {
    falseJor[i].onclick = () => {
      document.querySelector(".jordan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".combodida").style.display = "block";
    };
  }

  //    jordan



   //    combodida

   document.getElementById("true-com").onclick = () => {
    document.querySelector(".combodida").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".brunei").style.display = "block";
  };

  let falseCom = document.querySelectorAll("#false-com");

  for (let i = 0; i < falseCom.length; i++) {
    falseCom[i].onclick = () => {
      document.querySelector(".combodida").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".brunei").style.display = "block";
    };
  }

  //    combodida



  //    brunei

  document.getElementById("true-bru").onclick = () => {
    document.querySelector(".brunei").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".china").style.display = "block";
  };

  let falseBru = document.querySelectorAll("#false-bru");

  for (let i = 0; i < falseBru.length; i++) {
    falseBru[i].onclick = () => {
      document.querySelector(".brunei").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".china").style.display = "block";
    };
  }

  //    brunei



  //    china

  document.getElementById("true-china").onclick = () => {
    document.querySelector(".china").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".philippines").style.display = "block";
  };

  let falseChina = document.querySelectorAll("#false-china");

  for (let i = 0; i < falseChina.length; i++) {
    falseChina[i].onclick = () => {
      document.querySelector(".china").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".philippines").style.display = "block";
    };
  }

  //    china



  //    philippines

  document.getElementById("true-phi").onclick = () => {
    document.querySelector(".philippines").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".india").style.display = "block";
  };

  let falsePhi = document.querySelectorAll("#false-phi");

  for (let i = 0; i < falsePhi.length; i++) {
    falsePhi[i].onclick = () => {
      document.querySelector(".philippines").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".india").style.display = "block";
    };
  }

  //    philippines



  //    india

  document.getElementById("true-india").onclick = () => {
    document.querySelector(".india").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".s-korea").style.display = "block";
  };

  let falseIndia = document.querySelectorAll("#false-india");

  for (let i = 0; i < falseIndia.length; i++) {
    falseIndia[i].onclick = () => {
      document.querySelector(".india").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".s-korea").style.display = "block";
    };
  }

  //    india



  //    s-korea

  document.getElementById("true-sk").onclick = () => {
    document.querySelector(".s-korea").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".bahrein").style.display = "block";
  };

  let falseSk = document.querySelectorAll("#false-sk");

  for (let i = 0; i < falseSk.length; i++) {
    falseSk[i].onclick = () => {
      document.querySelector(".s-korea").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".bahrein").style.display = "block";
    };
  }

  //    s-korea



  //    bahrein

  document.getElementById("true-bh").onclick = () => {
    document.querySelector(".bahrein").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".mongolia").style.display = "block";
  };

  let falseBh = document.querySelectorAll("#false-bh");

  for (let i = 0; i < falseBh.length; i++) {
    falseBh[i].onclick = () => {
      document.querySelector(".bahrein").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".mongolia").style.display = "block";
    };
  }

  //    bahrein



  //    mongolia

  document.getElementById("true-mon").onclick = () => {
    document.querySelector(".mongolia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".sri-lanka").style.display = "block";
  };

  let falseMon = document.querySelectorAll("#false-mon");

  for (let i = 0; i < falseMon.length; i++) {
    falseMon[i].onclick = () => {
      document.querySelector(".mongolia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".sri-lanka").style.display = "block";
    };
  }

  //    mongolia



  //    sri-lanka

  document.getElementById("true-srl").onclick = () => {
    document.querySelector(".sri-lanka").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".kazakhstan").style.display = "block";
  };

  let falseSrl = document.querySelectorAll("#false-srl");

  for (let i = 0; i < falseSrl.length; i++) {
    falseSrl[i].onclick = () => {
      document.querySelector(".sri-lanka").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".kazakhstan").style.display = "block";
    };
  }

  //    sri-lanka



  //    kazakhstan

  document.getElementById("true-kaz").onclick = () => {
    document.querySelector(".kazakhstan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".laos").style.display = "block";
  };

  let falseKaz = document.querySelectorAll("#false-kaz");

  for (let i = 0; i < falseKaz.length; i++) {
    falseKaz[i].onclick = () => {
      document.querySelector(".kazakhstan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".laos").style.display = "block";
    };
  }

  //    kazakhstan



  //    laos

  document.getElementById("true-laos").onclick = () => {
    document.querySelector(".laos").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".israel").style.display = "block";
  };

  let falseLaos = document.querySelectorAll("#false-laos");

  for (let i = 0; i < falseLaos.length; i++) {
    falseLaos[i].onclick = () => {
      document.querySelector(".laos").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".israel").style.display = "block";
    };
  }

  //    laos



  //    israel

  document.getElementById("true-isr").onclick = () => {
    document.querySelector(".israel").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".tajikistan").style.display = "block";
  };

  let falseIsr = document.querySelectorAll("#false-isr");

  for (let i = 0; i < falseIsr.length; i++) {
    falseIsr[i].onclick = () => {
      document.querySelector(".israel").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".tajikistan").style.display = "block";
    };
  }

  //    israel




  //    tajikistan

  document.getElementById("true-taj").onclick = () => {
    document.querySelector(".tajikistan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".singapore").style.display = "block";
  };

  let falseTaj = document.querySelectorAll("#false-taj");

  for (let i = 0; i < falseTaj.length; i++) {
    falseTaj[i].onclick = () => {
      document.querySelector(".tajikistan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".singapore").style.display = "block";
    };
  }

  //    tajikistan



  //    singapore

  document.getElementById("true-sin").onclick = () => {
    document.querySelector(".singapore").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".iraq").style.display = "block";
  };

  let falseSin = document.querySelectorAll("#false-sin");

  for (let i = 0; i < falseSin.length; i++) {
    falseSin[i].onclick = () => {
      document.querySelector(".singapore").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".iraq").style.display = "block";
    };
  }

  //    singapore




  //    iraq

  document.getElementById("true-iraq").onclick = () => {
    document.querySelector(".iraq").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".indonesia").style.display = "block";
  };

  let falseIraq = document.querySelectorAll("#false-iraq");

  for (let i = 0; i < falseIraq.length; i++) {
    falseIraq[i].onclick = () => {
      document.querySelector(".iraq").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".indonesia").style.display = "block";
    };
  }

  //    iraq



  //    indonesia

  document.getElementById("true-ind").onclick = () => {
    document.querySelector(".indonesia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".bangladesh").style.display = "block";
  };

  let falseInd = document.querySelectorAll("#false-ind");

  for (let i = 0; i < falseInd.length; i++) {
    falseInd[i].onclick = () => {
      document.querySelector(".indonesia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".bangladesh").style.display = "block";
    };
  }

  //    indonesia



  //    bangladesh

  document.getElementById("true-ban").onclick = () => {
    document.querySelector(".bangladesh").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".uzbekistan").style.display = "block";
  };

  let falseBan = document.querySelectorAll("#false-ban");

  for (let i = 0; i < falseBan.length; i++) {
    falseBan[i].onclick = () => {
      document.querySelector(".bangladesh").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".uzbekistan").style.display = "block";
    };
  }

  //    bangladesh



  //    uzbekistan

  document.getElementById("true-uzb").onclick = () => {
    document.querySelector(".uzbekistan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".maldives").style.display = "block";
  };

  let falseUzb = document.querySelectorAll("#false-uzb");

  for (let i = 0; i < falseUzb.length; i++) {
    falseUzb[i].onclick = () => {
      document.querySelector(".uzbekistan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".maldives").style.display = "block";
    };
  }

  //    uzbekistan



   //    maldives

   document.getElementById("true-mal").onclick = () => {
    document.querySelector(".maldives").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".n-k").style.display = "block";
  };

  let falseMal = document.querySelectorAll("#false-mal");

  for (let i = 0; i < falseMal.length; i++) {
    falseMal[i].onclick = () => {
      document.querySelector(".maldives").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".n-k").style.display = "block";
    };
  }

  //    maldives



  //    n-k

  document.getElementById("true-n-k").onclick = () => {
    document.querySelector(".n-k").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".japan").style.display = "block";
  };

  let falseNk = document.querySelectorAll("#false-n-k");

  for (let i = 0; i < falseNk.length; i++) {
    falseNk[i].onclick = () => {
      document.querySelector(".n-k").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".japan").style.display = "block";
    };
  }

  //    n-k



  //    japan

  document.getElementById("true-japan").onclick = () => {
    document.querySelector(".japan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".iran").style.display = "block";
  };

  let falseJapan = document.querySelectorAll("#false-japan");

  for (let i = 0; i < falseJapan.length; i++) {
    falseJapan[i].onclick = () => {
      document.querySelector(".japan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".iran").style.display = "block";
    };
  }

  //    japan




  //    iran

  document.getElementById("true-iran").onclick = () => {
    document.querySelector(".iran").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".afganistan").style.display = "block";
  };

  let falseIran = document.querySelectorAll("#false-iran");

  for (let i = 0; i < falseIran.length; i++) {
    falseIran[i].onclick = () => {
      document.querySelector(".iran").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".afganistan").style.display = "block";
    };
  }

  //    iran



   //    afganistan

   document.getElementById("true-afg").onclick = () => {
    document.querySelector(".afganistan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".lebanon").style.display = "block";
  };

  let falseAfg = document.querySelectorAll("#false-afg");

  for (let i = 0; i < falseAfg.length; i++) {
    falseAfg[i].onclick = () => {
      document.querySelector(".afganistan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".lebanon").style.display = "block";
    };
  }

  //    afganistan




  //    lebanon

  document.getElementById("true-leb").onclick = () => {
    document.querySelector(".lebanon").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".turkmenistan").style.display = "block";
  };

  let falseLeb = document.querySelectorAll("#false-leb");

  for (let i = 0; i < falseLeb.length; i++) {
    falseLeb[i].onclick = () => {
      document.querySelector(".lebanon").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".turkmenistan").style.display = "block";
    };
  }

  //    lebanon




  //    turkmenistan

  document.getElementById("true-tur").onclick = () => {
    document.querySelector(".turkmenistan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".oman").style.display = "block";
  };

  let falseTur = document.querySelectorAll("#false-tur");

  for (let i = 0; i < falseTur.length; i++) {
    falseTur[i].onclick = () => {
      document.querySelector(".turkmenistan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".oman").style.display = "block";
    };
  }

  //    turkmenistan



  //    oman

  document.getElementById("true-oman").onclick = () => {
    document.querySelector(".oman").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".kyrgyzstan").style.display = "block";
  };

  let falseOman = document.querySelectorAll("#false-oman");

  for (let i = 0; i < falseOman.length; i++) {
    falseOman[i].onclick = () => {
      document.querySelector(".oman").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".kyrgyzstan").style.display = "block";
    };
  }

  //    oman



  //    kyrgyzstan

  document.getElementById("true-kyr").onclick = () => {
    document.querySelector(".kyrgyzstan").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".s-a").style.display = "block";
  };

  let falseKyr = document.querySelectorAll("#false-kyr");

  for (let i = 0; i < falseKyr.length; i++) {
    falseKyr[i].onclick = () => {
      document.querySelector(".kyrgyzstan").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".s-a").style.display = "block";
    };
  }

  //    kyrgyzstan



  //    s-a

  document.getElementById("true-s-a").onclick = () => {
    document.querySelector(".s-a").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".thailand").style.display = "block";
  };

  let falseSA = document.querySelectorAll("#false-s-a");

  for (let i = 0; i < falseSA.length; i++) {
    falseSA[i].onclick = () => {
      document.querySelector(".s-a").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".thailand").style.display = "block";
    };
  }

  //    s-a



  //    thailand

  document.getElementById("true-tha").onclick = () => {
    document.querySelector(".thailand").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".malaysia").style.display = "block";
  };

  let falseTha = document.querySelectorAll("#false-tha");

  for (let i = 0; i < falseTha.length; i++) {
    falseTha[i].onclick = () => {
      document.querySelector(".thailand").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".malaysia").style.display = "block";
    };
  }

  //    thailand



  //    malaysia

  document.getElementById("true-malaysia").onclick = () => {
    document.querySelector(".malaysia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".vietnam").style.display = "block";
  };

  let falseMalaysia = document.querySelectorAll("#false-malaysia");

  for (let i = 0; i < falseMalaysia.length; i++) {
    falseMalaysia[i].onclick = () => {
      document.querySelector(".malaysia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".vietnam").style.display = "block";
    };
  }

  //    malaysia



  //    vietnam

  document.getElementById("true-vie").onclick = () => {
    document.querySelector(".vietnam").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".qatar").style.display = "block";
  };

  let falseVie = document.querySelectorAll("#false-vie");

  for (let i = 0; i < falseVie.length; i++) {
    falseVie[i].onclick = () => {
      document.querySelector(".vietnam").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".qatar").style.display = "block";
    };
  }

  //    vietnam



  //    qatar

  document.getElementById("true-qatar").onclick = () => {
    document.querySelector(".qatar").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".restart").style.display ="block"  };

  let falseQatar = document.querySelectorAll("#false-qatar");

  for (let i = 0; i < falseQatar.length; i++) {
    falseQatar[i].onclick = () => {
      document.querySelector(".qatar").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".restart").style.display ="block"   
     };

     //    qatar

     document.querySelector(".restart-game").onclick =()=>{
      document.querySelector(".restart").style.display ="none"
      trueAnswerCount.innerHTML = countTrue=0
      falseQuestionPage.innerHTML = countFalse=0
      
      startGame()
  }
}
  

}