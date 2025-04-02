addEventListener("DOMContentLoaded", (event) => {
    console.log("live pictures init");
    $(".doctors__card .doctors__image video.preview-frame")
        .on("mouseenter", (e) => {
            if (e.target.src.includes("_one_frame")) {
                console.log("change source");
                e.target.src = e.target.src.replace("_one_frame","");
                setTimeout(() => {
                    console.log("play source");
                    e.target.play();
                },200)
            } else {
                console.log("play source");
                setTimeout(() => {
                    e.target.play();
                }, 200);
            }
        })
        .on("touchstart", (e) => {
            if (e.target.src.includes("_one_frame")) {
                console.log("change source");
                e.target.src = e.target.src.replace("_one_frame","");
                setTimeout(() => {
                    console.log("play source");
                    setTimeout(() => {
                        e.target.play();
                    }, 200);
                },0.1)
            } else {
                console.log("play source");
                setTimeout(() => {
                    e.target.play();
                }, 200);
            }
        })
    $(".doctors__card .doctors__image video:not(.preview-frame)")
        .on("mouseenter", (e) => {
            setTimeout(() => {
                e.target.play();
            }, 200);
        })
        .on("touchstart", (e) => {
            setTimeout(() => {
                e.target.play();
            }, 200);
        })
        .on("ended", (e) => {
            if (e.target.dataset["options"]==="rewind-after-playing") {
                e.target.currentTime = 0;
            }
        });
});