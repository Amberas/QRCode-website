{

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const init = () => {
        new QRCode(document.getElementById("qrcode"), {
            text: `https://qr-code-six.vercel.app/?id=${id}`,
            width: 800,
            height: 800
        });
    }

    init();
}