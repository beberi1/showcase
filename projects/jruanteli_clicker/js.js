var ricxvi = 0;
var ricxvib = 0;
var momatebulib = 1;
var momatebuli = 1;
var fasi1 = 10;
var fasi2 = 10;
var fasi3 = 100;
var fasi4 = 300;
var fasi5 = 900;
var fasi6 = 1500;
var fasi7 = 3500;
var adeqit = 0;
var tyemali = 0;
var ajika = 0;
var titu = 0;
var iumorina = 0;
var sicives_kliki = 0;
var yidvis_feri = document.getElementById('knopka1');
var yidvis_feri_1 = document.getElementById('knopka2');
var yidvis_feri_2 = document.getElementById('knopka3');
var mtavari_knopka= document.getElementById('damateba');
var bonus_gamochena = document.getElementById('bonusebi');
var mtavari_gverdi = document.getElementById('mtavari');
var b1 = document.getElementById('b1');
var xebi_1 = document.getElementById('x1');
var xebi_10 = document.getElementById('x10');
var xebi_100 = document.getElementById('x100');
var x_ebi = 1;


var bonus_tvla  = 0;
var b2_tv = 0;
var b3_tv = 0;
var b4_tv = 0;
var b5_tv = 0;
var b6_tv = 0;
var mtavari_knopka_shecvla = document.getElementById('klikis_adgili');
var gadzliereba = new Audio('xmebi/gadzliereba.wav');
var sicive_xma = new Audio('xmebi/kankali.mp3');
var tyemlis_xma = new Audio('xmebi/tyemlis_kbecha.wav');
var ajika_xma = new Audio('xmebi/ajika.mp3');
var gvritebo_xma = new Audio('xmebi/adeqit_gvritebo.mp3');
var titu_xma = new Audio('xmebi/tituu.mp3');
var sadac_ara_sjobs = new Audio('xmebi/sadac_ara_sjobs.mp3');
var civi_ofli = new Audio('xmebi/civi_ofli.mp3');
var rom_shemisrulda = new Audio('xmebi/rom_shemisrulda.mp3');
var iumorina_xma = new Audio('xmebi/iumorina.mp3');






function xebis_1(x) {
  x_ebi = x;
  if (x == 1){
    xebi_10 = 0;
    xebi_100 = 0;
    console.log(x);
  }

  if (x == 10){
    xebi_1 = 0;
    xebi_100 = 0;
  }

  if (x == 100){
    xebi_1 = 0;
    xebi_10 = 0;
  }
}

/* aritmetikuli progresiis jami (x(x+1))/2 
s = (fasi1 + a(N)) * n / 2 
a(n) = fasi1 + x( x - 1)  */
function xebi(x) {
    document.getElementById('xebi_x').innerHTML = x;
    document.getElementById('fasi1').innerHTML = (fasi1 + (fasi1 + x * (x - 1))*x) / 2;
    document.getElementById('fasi2').innerHTML = (fasi2 + (fasi2 + x * (x - 1))*x) / 2;
    document.getElementById('fasi3').innerHTML = (fasi3 + (fasi3 + x * (x - 1))*x) / 2;
    document.getElementById('fasi4').innerHTML = (fasi4 + (fasi4 + x * (x - 1))*x) / 2;
    document.getElementById('fasi5').innerHTML = (fasi5 + (fasi5 + x * (x - 1))*x) / 2;
    document.getElementById('fasi6').innerHTML = (fasi6 + (fasi6 + x * (x - 1))*x) / 2;
    document.getElementById('fasi7').innerHTML = (fasi7 + (fasi7 + x * (x - 1))*x) / 2;
}



// damatebisas -  (xma - ragaca_xma)    (yidva -  fasebi ramdenit_emateba  agricxvashi_damateba_html)
// gamochena

// yidva  gamochena  (mnishvnelobis gamochena/gadatana)
function damateba()
{
    ricxvi= ricxvi + momatebuli;
    ricxvib = ricxvib + momatebulib;
    document.getElementById('qula').innerHTML = ricxvi;
    document.getElementById('qulab').innerHTML = ricxvib;
}

function momateba()
{
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi1) {
        ricxvi = ricxvi - fasi1;
        fasi1= fasi1 + 10;
        momatebuli++;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('ag_kliki_p').innerHTML = momatebuli;
        const ag_kliki = document.getElementById("ag_kliki");
        ag_kliki.style.display = "inline";
        gadzliereba.play();
    }
  }
  document.getElementById('fasi1').innerHTML = (fasi1 + (fasi1 + x_ebi * (x_ebi - 1))*x_ebi) / 2;
  xebi(x_ebi);
  
}

function sicive_yidva()
{
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi2) {
      ricxvi = ricxvi - fasi2;
      fasi2 = fasi2 + 10;
      sicives_kliki++;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi2').innerHTML = fasi2;
      document.getElementById('ag_sicive_p').innerHTML = sicives_kliki;
      const ag_sicive = document.getElementById("ag_sicive");
      ag_sicive.style.display = "inline";
      sicive_xma.play();
  }
  }
  xebi(x_ebi);
  
}

function tyemali_yidva() {
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi3){
      ricxvi = ricxvi - fasi3;
      fasi3 = fasi3 + 100;
      tyemali= tyemali + 5;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi3').innerHTML = fasi3;
      document.getElementById('ag_tyemali_p').innerHTML = tyemali;
      const ag_tyemali = document.getElementById("ag_tyemali");
      ag_tyemali.style.display = "inline";
      tyemlis_xma.play(); 
  }
  }
  xebi(x_ebi);
  
}

function ajika_yidva() {
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi4){
      ricxvi = ricxvi - fasi4;
      fasi4 = fasi4 + 300;
      ajika= ajika + 15;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi4').innerHTML = fasi4;
      document.getElementById('ag_ajika_p').innerHTML = ajika;
      const ag_ajika = document.getElementById("ag_ajika");
      ag_ajika.style.display = "inline";
      ajika_xma.play();
      
  }
  }
  xebi(x_ebi);
  
}

function adeqit_yidva() {
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi5){
      ricxvi = ricxvi - fasi5;
      fasi5 = fasi5 + 400;
      adeqit = adeqit + 50;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi5').innerHTML = fasi5;
      document.getElementById('ag_adeqit_p').innerHTML = adeqit;
      const ag_adeqit = document.getElementById("ag_adeqit");
      ag_adeqit.style.display = "inline";
      gvritebo_xma.play();
    }
  }
  xebi(x_ebi);
  
}

function titu_yidva() {
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi6){
      ricxvi = ricxvi - fasi6;
      fasi6 = fasi6 + 400;
      titu = titu + 100;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi6').innerHTML = fasi6;
      document.getElementById('ag_titu_p').innerHTML = titu;
      const ag_titu = document.getElementById("ag_titu");
      ag_titu.style.display = "inline";
      titu_xma.play(); 
  }
  }
  xebi(x_ebi);
  
}

function iumorina_yidva() {
  for (var i = 0; i < x_ebi; i++){
    if (ricxvi >= fasi7){
      ricxvi = ricxvi - fasi7;
      fasi7 = fasi7 + 700;
      iumorina = iumorina + 300;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi7').innerHTML = fasi7;
      document.getElementById('ag_iumorina_p').innerHTML = iumorina;
      const ag_iumorina = document.getElementById("ag_iumorina");
      ag_iumorina.style.display = "inline";
      iumorina_xma.play(); 
  }
  }
  xebi(x_ebi);
  
}

// function ferebi() {

//     if (ricxvi >= fasi1) {
//         yidvis_feri.style.backgroundColor = "yellow";
//       } else {
//         yidvis_feri.style.backgroundColor = "gray";
//       } 
    
//       if (ricxvi >= fasi2) {
//         yidvis_feri_1.style.backgroundColor = "yellow";
//       } else {
//         yidvis_feri_1.style.backgroundColor = "gray";
//       }

//       if (ricxvi >= fasi3) {
//         yidvis_feri_2.style.backgroundColor = "yellow";
//       } else {
//         yidvis_feri_2.style.backgroundColor = "gray";
//       }
      
//       if (ricxvi < fasi3) {
//         // call the function again after a delay, to avoid infinite recursion
//         setTimeout(ferebi, 100);
//       }
// }


function vibracia() {
  const mfoto = document.getElementById("damateba");
  mfoto.classList.add("vibrate");

  setTimeout(function vibracia() {
    mfoto.classList.remove("vibrate");
  }, 200);
}

function siaxleebi() {
  // bg.play();
  // bg.volume = 0.1;
  //bonusebi
  if (ricxvib >= 500){
    //klikis
    bonusebi_gamochena();
  }

  if (ricxvib >= 900 & b2_tv == 0){
    //tyemlis
    bonus2_damateba();
    b2_tv++;
  }

  if (ricxvib >= 4000 & b3_tv == 0){
    //titus
    bonus3_damateba();
    b3_tv++;
  }

  if (ricxvib >= 4500 & b4_tv == 0){
    //sicivis
    bonus4_damateba();
    b4_tv++;
  }

  if (ricxvib >= 1000 & b5_tv == 0){
    bonus5_damateba();
    b5_tv++;
  }

  if (ricxvib >= 2500 & b6_tv == 0){
    bonus6_damateba();
    b6_tv++;
  }



  //chveulebrivebi
  if (ricxvi >= 200){
    u1_damateba();
  }

  if (ricxvi >= 750){
    u2_damateba();
  }

  if (ricxvi >= 1300){
    u3_damateba();
  }

  if (ricxvi >= 3000){
    u4_damateba();
  }

  

}


//bonusebis gamochena
function bonusebi_gamochena() {
  const bonus_gamochena = document.getElementById("bonusebi");
  bonus_gamochena.style.display = "flex";
}

function bonus2_damateba() {
  const b2 = document.getElementById('b2');
  b2.style.display = "flex";
}

function bonus3_damateba() {
  const b3 = document.getElementById('b3');
  b3.style.display = "flex";
}

function bonus4_damateba() {
  const b3 = document.getElementById('b4');
  b3.style.display = "flex";
}

function bonus5_damateba() {
  const b5 = document.getElementById('b5');
  b5.style.display = "flex";
}

function bonus6_damateba() {
  const b3 = document.getElementById('b6');
  b3.style.display = "flex";
}

//bonusebi ras shvebian
function bonus1(){
  if ( ricxvib >= 600){
    momatebuli = momatebuli * 2;
    ricxvib = ricxvib - 600;
    const b1 = document.getElementById('b1');
    b1.style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    document.getElementById('ag_kliki_p').innerHTML = momatebuli;
  }
}

function bonus2(){
  //tyemlis xe
  if ( ricxvib >= 1000){
    fasi3 = fasi3 / 2;
    ricxvib = ricxvib - 1000;
    const b1 = document.getElementById('b2');
    b1.style.display = "none";
    document.getElementById('b2_gamyofi').style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    xebi(x_ebi);
  }
  tyemlis_xma.play();
}

function bonus3(){
  //titu
  if ( ricxvib >= 10000){
    titu = titu * 1.5;
    ricxvib = ricxvib - 4000;
    const b1 = document.getElementById('b3');
    b1.style.display = "none";
    document.getElementById('b3_gamyofi').style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    document.getElementById('ag_titu_p').innerHTML = titu;
    xebi(x_ebi);
    sadac_ara_sjobs.play();
  }
  
}

function bonus4(){
  //cici_ofli
  if ( ricxvib >= 800){
    sicives_kliki = sicives_kliki * 1.5;
    ricxvib = ricxvib - 800;
    const b1 = document.getElementById('b4');
    b1.style.display = "none";
    document.getElementById('b4_gamyofi').style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    document.getElementById('ag_sicive_p').innerHTML = sicives_kliki;
    xebi(x_ebi);
    civi_ofli.play();
  }
  
  
}

function bonus5(){
  // ajika
  if ( ricxvib >= 1200){
    ajika = ajika * 2;
    ricxvib = ricxvib - 1200;
    const b1 = document.getElementById('b5');
    b1.style.display = "none";
    document.getElementById('b5_gamyofi').style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    document.getElementById('ag_ajika_p').innerHTML = ajika;
    xebi(x_ebi);
    ajika_xma.play();
  }
  
}

function bonus6(){
  // rom shemisrulda
  if ( ricxvib >= 3000){
    adeqit = adeqit * 1.5;
    ricxvib = ricxvib - 3000;
    const b1 = document.getElementById('b6');
    b1.style.display = "none";
    document.getElementById('b6_gamyofi').style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    document.getElementById('ag_adeqit_p').innerHTML = adeqit;
    xebi(x_ebi);
    rom_shemisrulda.play();
  }
  
}


// gamochena
function u1_damateba(){
  const u1 = document.getElementById('u1');
  u1.style.display = "flex";
}

function u2_damateba(){
  const u2 = document.getElementById('u2');
  u2.style.display = "flex";
}

function u3_damateba(){
  const u2 = document.getElementById('u3');
  u2.style.display = "flex";
}

function u4_damateba(){
  const u4 = document.getElementById('u4');
  u4.style.display = "flex";
}



// droitebis mushaoba
function droiti_momateba() {
  ricxvi = ricxvi + sicives_kliki;
  ricxvi = ricxvi + tyemali;
  ricxvi = ricxvi + ajika;
  ricxvi = ricxvi + adeqit;
  ricxvi = ricxvi + titu;
  ricxvi = ricxvi + iumorina;
  

  if (sicives_kliki > 0 || tyemali > 0 || ajika > 0 || adeqit > 0 || titu > 0){
   vibracia();
  } 
    
    document.getElementById('qula').innerHTML = ricxvi;
}








setInterval(siaxleebi, 1000)
setInterval(droiti_momateba, 1000)
