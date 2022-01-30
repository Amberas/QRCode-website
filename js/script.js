{

    const id = location.pathname.split('/')[2];

    const init = () => {
        new QRCode(document.getElementById("qrcode"), `https://qr-code-six.vercel.app/?id=${id}`);
    }

    init();
}