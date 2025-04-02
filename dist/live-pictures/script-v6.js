addEventListener("DOMContentLoaded", (event) => {

    function now() {
        const dateValue = new Date();
        return dateValue.getFullYear() + '-' +('0' + (dateValue.getMonth()+1)).slice(-2)+ '-' +  ('0' + dateValue.getDate()).slice(-2)
            + ' '+dateValue.getHours()+ ':'+('0' + (dateValue.getMinutes())).slice(-2)+ ':'+dateValue.getSeconds()
            + '.'+dateValue.getMilliseconds();
    }

    function playVideo(video, timeoutValue = null) {
        if (timeoutValue) {
            console.log("started to play after timeout", timeoutValue, "at "+now());
        } else {
            console.log("started to play at "+now());
        }
        video.play();
    }

    function pauseVideo(video) {
        console.log("paused to play at "+now());
        video.pause();
    }

    function setTimePositionForVideo(video, timePosition) {
        console.log("set time position to", timePosition,  "at "+now());
        video.currentTime = timePosition;
    }

    function isVideoPlaying(video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }

    console.log("live pictures init at "+now());

    let hTimers = {};

    $(".container[data-variant][data-bullet]").each(function (index) {
        const variant = $(this).data("variant");
        const bullet = $(this).data("bullet");
        $(".doctors__info-name", $(this)).text("Вариант " + variant.toString());
        $(".doctors__info-spec", $(this)).text("Пункт " + bullet.toString());
        $("video", $(this)).data("bullet", bullet);
        hTimers[bullet] = 0;
    });

    $(".container[data-variant=6][data-bullet=1] .doctors__card .doctors__image video")
        .on("mouseenter touchstart", (e) => {
            const bullet = $(e.target).data("bullet");
            const timeoutValue = 350;
            if (hTimers[bullet] !== 0) {
                console.log("cancel timeout", timeoutValue, "at "+now());
                clearTimeout(hTimers[bullet]);
                hTimers[bullet] = 0;
            } else {
                console.log("set timeout", timeoutValue, "at "+now());
                hTimers[bullet] = setTimeout(() => {
                    hTimers[bullet] = 0;
                    playVideo(e.target, timeoutValue);
                }, timeoutValue)
            }
        })
        .on("ended", (e) => {
            setTimePositionForVideo(e.target, 0);
        });

    $(".container[data-variant=6][data-bullet=2] .doctors__card .doctors__image video")
        .on("mouseenter touchstart", (e) => {
            const bullet = $(e.target).data("bullet");
            const timeoutValue = 150;
            if (hTimers[bullet] !== 0) {
                console.log("cancel timeout", timeoutValue, "at "+now());
                clearTimeout(hTimers[bullet]);
                hTimers[bullet] = 0;
            } else {
                console.log("set timeout ", timeoutValue, "at "+now());
                hTimers[bullet] = setTimeout(() => {
                    hTimers[bullet] = 0;
                    playVideo(e.target, timeoutValue)
                }, timeoutValue)
            }
        })
        .on("mouseleave touchend", (e) => {
            const bullet = $(e.target).data("bullet");
            if (hTimers[bullet] !== 0) {
                console.log("cancel timeout due to leaving area at "+now());
                clearTimeout(hTimers[bullet]);
                hTimers[bullet] = 0;
            }
            if (isVideoPlaying(e.target)) {
                pauseVideo(e.target);
                setTimeout(() => {
                    setTimePositionForVideo(e.target, 1);
                });
            }
        })
        .on("ended", (e) => {
            console.log("ended to play at "+now());
            setTimePositionForVideo(e.target, 0);
        });

    $(".container[data-variant=6][data-bullet=3] .doctors__card .doctors__image video")
        .on("mouseenter touchstart", (e) => {
            const bullet = $(e.target).data("bullet");
            const timeoutValue = 150;
            if (hTimers[bullet] !== 0) {
                console.log("cancel timeout", timeoutValue, "at "+now());
                clearTimeout(hTimers[bullet]);
                hTimers[bullet] = 0;
            } else {
                console.log("set timeout", timeoutValue, "at "+now());
                hTimers[bullet] = setTimeout(() => {
                    hTimers[bullet] = 0;
                    playVideo(e.target, timeoutValue);
                }, timeoutValue)
            }
        })
        .on("mouseleave touchend", (e) => {
            const bullet = $(e.target).data("bullet");
            if (hTimers[bullet] !== 0) {
                console.log("cancel timeout due to leaving area at "+now());
                clearTimeout(hTimers[bullet]);
                hTimers[bullet] = 0;
            }
            if (isVideoPlaying(e.target)) {
                pauseVideo(e.target);
                setTimeout(() => {
                    setTimePositionForVideo(e.target, 1);
                });
            }
        })
        .on("ended", (e) => {
            console.log("ended to play at "+now());
            setTimePositionForVideo(e.target, 0);
            playVideo(e.target);
        });
});