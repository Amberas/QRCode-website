{

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const init = () => {
        new QRCode(document.getElementById("qrcode"), {
            text: "http://jindo.dev.naver.com/collie",
            width: 800,
            height: 800
        });
    }

    init();
}