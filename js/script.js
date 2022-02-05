{

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const init = () => {
        new QRCode(document.getElementById("qrcode"), {
            text: "http://jindo.dev.naver.com/collie",
            width: 1000,
            height: 1000
        });
    }

    init();
}