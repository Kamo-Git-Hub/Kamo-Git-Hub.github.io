let trueAnswerCount = document.querySelector(".true-count-page");

let falseQuestionPage = document.querySelector(".false-count-page");

let countTrue = 0;

let countFalse = 0;



document.querySelector(".start-game").onclick = function startGame() {

    document.querySelector(".start-game").style.display = "none"

    //belgium
    document.querySelector(".belgium").style.display ="block"

    document.getElementById("true-obj").onclick = () => {
        document.querySelector(".belgium").style.display = "none";
        countTrue++;
        trueAnswerCount.innerHTML = countTrue;
        document.querySelector(".slovakia").style.display = "block";
      };
    
      let falseBelgium = document.querySelectorAll("#false-obj");
    
      for (let i = 0; i < falseBelgium.length; i++) {
        falseBelgium[i].onclick = () => {
          document.querySelector(".belgium").style.display = "none";
          countFalse++;
          falseQuestionPage.innerHTML = countFalse;
          document.querySelector(".slovakia").style.display = "block";
        };
      }
      //belgium


 //slovakia

 document.getElementById("true-slovakia").onclick = () => {
    document.querySelector(".slovakia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".greece").style.display = "block";
  };

  let falseSlovakia = document.querySelectorAll("#false-slovakia");

  for (let i = 0; i < falseSlovakia.length; i++) {
    falseSlovakia[i].onclick = () => {
      document.querySelector(".slovakia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".greece").style.display = "block";
    };
  }
  //slovakia



  //greece

 document.getElementById("true-greece").onclick = () => {
    document.querySelector(".greece").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".norway").style.display = "block";
  };

  let falseGreece = document.querySelectorAll("#false-greece");

  for (let i = 0; i < falseGreece.length; i++) {
    falseGreece[i].onclick = () => {
      document.querySelector(".greece").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".norway").style.display = "block";
    };
    
  }
  //greece



   //norway

 document.getElementById("true-norway").onclick = () => {
    document.querySelector(".norway").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".serbia").style.display = "block";
  };

  let falseNorwey = document.querySelectorAll("#false-norway");

  for (let i = 0; i < falseNorwey.length; i++) {
    falseNorwey[i].onclick = () => {
      document.querySelector(".norway").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".serbia").style.display = "block";
    };
    
  }
  //norway



     //serbia

 document.getElementById("true-serbia").onclick = () => {
    document.querySelector(".serbia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".armenia").style.display = "block";
  };

  let falseSerbia = document.querySelectorAll("#false-serbia");

  for (let i = 0; i < falseSerbia.length; i++) {
    falseSerbia[i].onclick = () => {
      document.querySelector(".serbia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".armenia").style.display = "block";
    };
    
  }
  //serbia


     //armenia

 document.getElementById("true-armenia").onclick = () => {
    document.querySelector(".armenia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".italy").style.display = "block";
  };

  let falseArm = document.querySelectorAll("#false-armenia");

  for (let i = 0; i < falseArm.length; i++) {
    falseArm[i].onclick = () => {
      document.querySelector(".armenia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".italy").style.display = "block";
    };
    
  }
  //armenia



  //italy

 document.getElementById("true-italy").onclick = () => {
    document.querySelector(".italy").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".romania").style.display = "block";
  };

  let falseItaly = document.querySelectorAll("#false-italy");

  for (let i = 0; i < falseItaly.length; i++) {
    falseItaly[i].onclick = () => {
      document.querySelector(".italy").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".romania").style.display = "block";
    };
    
  }
  //italy



    //romania

 document.getElementById("true-rom").onclick = () => {
    document.querySelector(".romania").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".georgia").style.display = "block";
  };

  let falseRom = document.querySelectorAll("#false-rom");

  for (let i = 0; i < falseRom.length; i++) {
    falseRom[i].onclick = () => {
      document.querySelector(".romania").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".georgia").style.display = "block";
    };
    
  }
  //romania


    //georgia

 document.getElementById("true-geo").onclick = () => {
    document.querySelector(".georgia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".poland").style.display = "block";
  };

  let falseGeo = document.querySelectorAll("#false-geo");

  for (let i = 0; i < falseGeo.length; i++) {
    falseGeo[i].onclick = () => {
      document.querySelector(".georgia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".poland").style.display = "block";
    };
    
  }
  //georgia



  //poland

 document.getElementById("true-pol").onclick = () => {
    document.querySelector(".poland").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".hungary").style.display = "block";
  };

  let falsePol = document.querySelectorAll("#false-pol");

  for (let i = 0; i < falsePol.length; i++) {
    falsePol[i].onclick = () => {
      document.querySelector(".poland").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".hungary").style.display = "block";
    };
    
  }
  //poland



   //hungary

 document.getElementById("true-hun").onclick = () => {
    document.querySelector(".hungary").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".vatican").style.display = "block";
  };

  let falseHun = document.querySelectorAll("#false-hun");

  for (let i = 0; i < falseHun.length; i++) {
    falseHun[i].onclick = () => {
      document.querySelector(".hungary").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".vatican").style.display = "block";
    };
    
  }
  //hungary



  //vatican

 document.getElementById("true-vat").onclick = () => {
    document.querySelector(".vatican").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".albania").style.display = "block";
  };

  let falseVat = document.querySelectorAll("#false-vat");

  for (let i = 0; i < falseVat.length; i++) {
    falseVat[i].onclick = () => {
      document.querySelector(".vatican").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".albania").style.display = "block";
    };
    
  }
  //vatican



 //albania

 document.getElementById("true-alb").onclick = () => {
    document.querySelector(".albania").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".russia").style.display = "block";
  };

  let falseAlb = document.querySelectorAll("#false-alb");

  for (let i = 0; i < falseAlb.length; i++) {
    falseAlb[i].onclick = () => {
      document.querySelector(".albania").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".russia").style.display = "block";
    };
    
  }
  //albania



   //russia

 document.getElementById("true-rus").onclick = () => {
    document.querySelector(".russia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".denmark").style.display = "block";
  };

  let falseRus = document.querySelectorAll("#false-rus");

  for (let i = 0; i < falseRus.length; i++) {
    falseRus[i].onclick = () => {
      document.querySelector(".russia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".denmark").style.display = "block";
    };
    
  }
  //russia



   //denmark

 document.getElementById("true-den").onclick = () => {
    document.querySelector(".denmark").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".estonia").style.display = "block";
  };

  let falseDen = document.querySelectorAll("#false-den");

  for (let i = 0; i < falseDen.length; i++) {
    falseDen[i].onclick = () => {
      document.querySelector(".denmark").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".estonia").style.display = "block";
    };
    
  }
  //denmark



   //estonia

 document.getElementById("true-est").onclick = () => {
    document.querySelector(".estonia").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".austria").style.display = "block";
  };

  let falseEst = document.querySelectorAll("#false-est");

  for (let i = 0; i < falseEst.length; i++) {
    falseEst[i].onclick = () => {
      document.querySelector(".estonia").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".austria").style.display = "block";
    };
    
  }
  //estonia



   //austria

 document.getElementById("true-au").onclick = () => {
    document.querySelector(".austria").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".spain").style.display = "block";
  };

  let falseAu = document.querySelectorAll("#false-au");

  for (let i = 0; i < falseAu.length; i++) {
    falseAu[i].onclick = () => {
      document.querySelector(".austria").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".spain").style.display = "block";
    };
    
  }
  //austria



  //spain

 document.getElementById("true-spain").onclick = () => {
    document.querySelector(".spain").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".franse").style.display = "block";
  };

  let falseSpain = document.querySelectorAll("#false-spain");

  for (let i = 0; i < falseSpain.length; i++) {
    falseSpain[i].onclick = () => {
      document.querySelector(".spain").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".franse").style.display = "block";
    };
    
  }
  //spain



  //franse

 document.getElementById("true-fr").onclick = () => {
    document.querySelector(".franse").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".luxembourg").style.display = "block";
  };

  let falseFr = document.querySelectorAll("#false-fr");

  for (let i = 0; i < falseFr.length; i++) {
    falseFr[i].onclick = () => {
      document.querySelector(".franse").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".luxembourg").style.display = "block";
    };
    
  }
  //franse




  //luxembourg

 document.getElementById("true-lux").onclick = () => {
    document.querySelector(".luxembourg").style.display = "none";
    countTrue++;
    trueAnswerCount.innerHTML = countTrue;
    document.querySelector(".azeri").style.display = "block";
  };

  let falseLux = document.querySelectorAll("#false-lux");

  for (let i = 0; i < falseLux.length; i++) {
    falseLux[i].onclick = () => {
      document.querySelector(".luxembourg").style.display = "none";
      countFalse++;
      falseQuestionPage.innerHTML = countFalse;
      document.querySelector(".azeri").style.display = "block";
    };
    
  }
  //luxembourg



//azeri

document.getElementById("true-az").onclick = () => {
  document.querySelector(".azeri").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".liechtenstein").style.display = "block";
};

let falseAz = document.querySelectorAll("#false-az");

for (let i = 0; i < falseAz.length; i++) {
  falseAz[i].onclick = () => {
    document.querySelector(".azeri").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".liechtenstein").style.display = "block";
  };
  
}
//azeri




//liechtenstein

document.getElementById("true-lie").onclick = () => {
  document.querySelector(".liechtenstein").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".cyprus").style.display = "block";
};

let falseLie = document.querySelectorAll("#false-lie");

for (let i = 0; i < falseLie.length; i++) {
  falseLie[i].onclick = () => {
    document.querySelector(".liechtenstein").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".cyprus").style.display = "block";
  };
  
}
//liechtenstein



//cyprus

document.getElementById("true-cyp").onclick = () => {
  document.querySelector(".cyprus").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".bulgaria").style.display = "block";
};

let falseCyp = document.querySelectorAll("#false-cyp");

for (let i = 0; i < falseCyp.length; i++) {
  falseCyp[i].onclick = () => {
    document.querySelector(".cyprus").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".bulgaria").style.display = "block";
  };
  
}
//cyprus



//bulgaria

document.getElementById("true-bul").onclick = () => {
  document.querySelector(".bulgaria").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".moldova").style.display = "block";
};

let falseBul = document.querySelectorAll("#false-bul");

for (let i = 0; i < falseBul.length; i++) {
  falseBul[i].onclick = () => {
    document.querySelector(".bulgaria").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".moldova").style.display = "block";
  };
  
}
//bulgaria




//moldova

document.getElementById("true-mol").onclick = () => {
  document.querySelector(".moldova").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".ukd").style.display = "block";
};

let falseMol = document.querySelectorAll("#false-mol");

for (let i = 0; i < falseMol.length; i++) {
  falseMol[i].onclick = () => {
    document.querySelector(".moldova").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".ukd").style.display = "block";
  };
  
}
//moldova



//ukd

document.getElementById("true-ukd").onclick = () => {
  document.querySelector(".ukd").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".belarus").style.display = "block";
};

let falseUkd = document.querySelectorAll("#false-ukd");

for (let i = 0; i < falseUkd.length; i++) {
  falseUkd[i].onclick = () => {
    document.querySelector(".ukd").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".belarus").style.display = "block";
  };
  
}
//ukd



//belarus

document.getElementById("true-bel").onclick = () => {
  document.querySelector(".belarus").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".netherlands").style.display = "block";
};

let falseBel = document.querySelectorAll("#false-bel");

for (let i = 0; i < falseBel.length; i++) {
  falseBel[i].onclick = () => {
    document.querySelector(".belarus").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".netherlands").style.display = "block";
  };
  
}
//belarus



//netherlands

document.getElementById("true-net").onclick = () => {
  document.querySelector(".netherlands").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".latvia").style.display = "block";
};

let falseNet = document.querySelectorAll("#false-net");

for (let i = 0; i < falseNet.length; i++) {
  falseNet[i].onclick = () => {
    document.querySelector(".netherlands").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".latvia").style.display = "block";
  };
  
}
//netherlands



//latvia

document.getElementById("true-lat").onclick = () => {
  document.querySelector(".latvia").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".croatia").style.display = "block";
};

let falseLat = document.querySelectorAll("#false-lat");

for (let i = 0; i < falseLat.length; i++) {
  falseLat[i].onclick = () => {
    document.querySelector(".latvia").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".croatia").style.display = "block";
  };
  
}
//latvia



//croatia

document.getElementById("true-cro").onclick = () => {
  document.querySelector(".croatia").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".switzerland").style.display = "block";
};

let falseCro = document.querySelectorAll("#false-cro");

for (let i = 0; i < falseCro.length; i++) {
  falseCro[i].onclick = () => {
    document.querySelector(".croatia").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".switzerland").style.display = "block";
  };
  
}
//croatia



//switzerland

document.getElementById("true-swi").onclick = () => {
  document.querySelector(".switzerland").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".b-h").style.display = "block";
};

let falseSwi = document.querySelectorAll("#false-swi");

for (let i = 0; i < falseSwi.length; i++) {
  falseSwi[i].onclick = () => {
    document.querySelector(".switzerland").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".b-h").style.display = "block";
  };
  
}
//switzerland



//b-h

document.getElementById("true-b-h").onclick = () => {
  document.querySelector(".b-h").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".turkey").style.display = "block";
};

let falseBH = document.querySelectorAll("#false-b-h");

for (let i = 0; i < falseBH.length; i++) {
  falseBH[i].onclick = () => {
    document.querySelector(".b-h").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".turkey").style.display = "block";
  };
  
}
//b-h




//turkey

document.getElementById("true-tur").onclick = () => {
  document.querySelector(".turkey").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".icelend").style.display = "block";
};

let falseTur = document.querySelectorAll("#false-tur");

for (let i = 0; i < falseTur.length; i++) {
  falseTur[i].onclick = () => {
    document.querySelector(".turkey").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".icelend").style.display = "block";
  };
  
}
//turkey



//icelend
document.getElementById("true-icelend").onclick = () => {
  document.querySelector(".icelend").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".germany").style.display = "block";
};

let falseIse = document.querySelectorAll("#false-icelend");

for (let i = 0; i < falseIse.length; i++) {
  falseIse[i].onclick = () => {
    document.querySelector(".icelend").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".germany").style.display = "block";
  };
  
}
//icelend




//germany
document.getElementById("true-ger").onclick = () => {
  document.querySelector(".germany").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".portugal").style.display = "block";
};

let falseGer = document.querySelectorAll("#false-ger");

for (let i = 0; i < falseGer.length; i++) {
  falseGer[i].onclick = () => {
    document.querySelector(".germany").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".portugal").style.display = "block";
  };
  
}
//germany




//portugal
document.getElementById("true-por").onclick = () => {
  document.querySelector(".portugal").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".lithuania").style.display = "block";
};

let falsePor = document.querySelectorAll("#false-por");

for (let i = 0; i < falsePor.length; i++) {
  falsePor[i].onclick = () => {
    document.querySelector(".portugal").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".lithuania").style.display = "block";
  };
  
}
//portugal



//lithuania
document.getElementById("true-lit").onclick = () => {
  document.querySelector(".lithuania").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".ireland").style.display = "block";
};

let falseLit = document.querySelectorAll("#false-lit");

for (let i = 0; i < falseLit.length; i++) {
  falseLit[i].onclick = () => {
    document.querySelector(".lithuania").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".ireland").style.display = "block";
  };
  
}
//lithuania




//ireland
document.getElementById("true-irl").onclick = () => {
  document.querySelector(".ireland").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".ukraine").style.display = "block";
};

let falseIrl = document.querySelectorAll("#false-irl");

for (let i = 0; i < falseIrl.length; i++) {
  falseIrl[i].onclick = () => {
    document.querySelector(".ireland").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".ukraine").style.display = "block";
  };
  
}
//ireland



//ukraine
document.getElementById("true-ukr").onclick = () => {
  document.querySelector(".ukraine").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".montenegro").style.display = "block";
};

let falseUkr = document.querySelectorAll("#false-ukr");

for (let i = 0; i < falseUkr.length; i++) {
  falseUkr[i].onclick = () => {
    document.querySelector(".ukraine").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".montenegro").style.display = "block";
  };
  
}
//ukraine




//montenegro
document.getElementById("true-mon").onclick = () => {
  document.querySelector(".montenegro").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".finland").style.display = "block";
};

let falseMon = document.querySelectorAll("#false-mon");

for (let i = 0; i < falseMon.length; i++) {
  falseMon[i].onclick = () => {
    document.querySelector(".montenegro").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".finland").style.display = "block";
  };
  
}
//montenegro



//finland
document.getElementById("true-fin").onclick = () => {
  document.querySelector(".finland").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".andorra").style.display = "block";
};

let falseFin = document.querySelectorAll("#false-fin");

for (let i = 0; i < falseFin.length; i++) {
  falseFin[i].onclick = () => {
    document.querySelector(".finland").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".andorra").style.display = "block";
  };
  
}
//finland




//andorra
document.getElementById("true-and").onclick = () => {
  document.querySelector(".andorra").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".sweden").style.display = "block";
};

let falseAnd = document.querySelectorAll("#false-and");

for (let i = 0; i < falseAnd.length; i++) {
  falseAnd[i].onclick = () => {
    document.querySelector(".andorra").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".sweden").style.display = "block";
  };
  
}
//andorra




//sweden
document.getElementById("true-swd").onclick = () => {
  document.querySelector(".sweden").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".czechia").style.display = "block";
};

let falseSwe = document.querySelectorAll("#false-swd");

for (let i = 0; i < falseSwe.length; i++) {
  falseSwe[i].onclick = () => {
    document.querySelector(".sweden").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".czechia").style.display = "block";
  };
  
}
//sweden



//czechia
document.getElementById("true-cze").onclick = () => {
  document.querySelector(".czechia").style.display = "none";
  countTrue++;
  trueAnswerCount.innerHTML = countTrue;
  document.querySelector(".restart").style.display ="block"};

let falseCze = document.querySelectorAll("#false-cze");

for (let i = 0; i < falseCze.length; i++) {
  falseCze[i].onclick = () => {
    document.querySelector(".czechia").style.display = "none";
    countFalse++;
    falseQuestionPage.innerHTML = countFalse;
    document.querySelector(".restart").style.display ="block"  };
  
}
//czechia

document.querySelector(".restart-game").onclick =()=>{
  document.querySelector(".restart").style.display ="none"
  trueAnswerCount.innerHTML = countTrue=0
  falseQuestionPage.innerHTML = countFalse=0
  
  startGame()
}
}