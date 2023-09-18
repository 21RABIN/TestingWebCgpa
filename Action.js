  const nav = document.getElementById('creditbtn')
   var listid = document.querySelectorAll('.menu')
   for(var i=0;i<listid.length;i++)
   {
        listid[i].style.display='none';

   }
    
//view And Hide Credits Action

function toggleText()
{

   var button =document.getElementById('creditbtn');
   var text=button.innerText;
   
   if (text=='Change Credit') {

      button.innerText='Hide Credit';
        for(var i=0;i<listid.length;i++)
      {
         listid[i].style.display='block';
      }
   }
   else
   {
      button.innerText='Change Credit';
      for(var i=0;i<listid.length;i++)
      {
         listid[i].style.display='none';
      }
      
   }

}

function openm() {
   
      let navbar1=document.querySelector('.navbar1')
      let navbar2=document.querySelector('.navbar2')
      let homemenu=document.querySelector('.hmenu')
      navbar1.style.display='none'
      navbar2.style.display='flex'
      homemenu.style.display='flex'


}

function openm2()
{
   let navbar1=document.querySelector('.navbar1')
   let  navbar2=document.querySelector('.navbar2')
     let homemenu=document.querySelector('.hmenu')
   navbar1.style.display='flex'
   navbar2.style.display='none'
   homemenu.style.display='none'
}


function genrateQR() {

        var dw=document.getElementById('dw')
        var qr=document.getElementById('qr')
        

   var regno=document.getElementById('regno').value;

let selectsem=document.getElementById('selectsem').value
let selectbatch=document.getElementById('selectbatch').value
let batch=20;
 dw.style.display='inline'
if (batch==selectbatch) {


if( selectsem==1)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==2)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==3)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==4)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==5)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }





    if(selectsem==6)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }




    if(selectsem==7)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }




    if(selectsem==8)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

   }
   else
   {
      alert('Plese Select Your Batch')
   }

}


function downlod() {
let selectsem=document.getElementById('selectsem').value
let QR=document.getElementById('dw')
let imgsrc=qrcode.querySelector('img').src
QR.href=imgsrc;
QR.download='Semaster'+selectsem

}







// //Producted Website
// document.addEventListener('contextmenu',function(e){
//    e.preventDefault();
// });

// document.onkeydown=function(e){

//   if(event.keycode==123)
//   {

//    return false;
//   }

//   if (e.ctrlKey&&e.shiftKey&&e.keycode=='I'.charCodeAt(0)) {

//    return false;
//   }
//    if (e.ctrlKey&&e.shiftKey&&e.keycode=='C'.charCodeAt(0)) {

//    return false;
//      }

//       if (e.ctrlkey&&e.shiftKey&&e.keycode=='J'.charCodeAt(0)) {

//    return false;
//   }
//    if (e.ctrlkey&&e.shiftKey&&e.keycode=='U'.charCodeAt(0)) {

//    return false;
//   }

// }
