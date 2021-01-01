let qrcode = new QRCode("qrcode");

function generator () {    
  let qrData = document.getElementById('qrData')
  
  if (!qrData.value) {
    alert("Input a text");
    qrData.focus();
    return;
  }
  
  qrcode.makeCode(qrData.value);
}
