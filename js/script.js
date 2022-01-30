{

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const init = () => {
        new QRCode(document.getElementById("qrcode"), `https://qr-code-six.vercel.app/?id=${id}`);
    }

    init();
}