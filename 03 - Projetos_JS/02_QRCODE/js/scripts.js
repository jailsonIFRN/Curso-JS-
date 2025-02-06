const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");
// Eventos
// Gerar QR Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";
// https://goqr.me/api/
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {

        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    })
    
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("Keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});
// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {

    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});
// gerador de QR code par empresa quando tem eventos
// para as pessoas para gerar URL, facelita muito para
// eventos presenciais


