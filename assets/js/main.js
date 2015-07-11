/*global $ history window document*/
// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.

(function() {

    "use strict";

    function isRetina() {
        var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";

        if (window.devicePixelRatio > 1) {
            return true;
        }

        if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
            return true;
        }

        return false;
    }


    function hook() {
        $("#toc-top").toc({title: "<h2>Table of Contents</h2>", showEffect: "fadeIn", headers: "h2, h3, h4, h5, h6"});
        $("#toc-bottom").toc({title: "<h2>Maybe you missed it</h2>", showEffect: "fadeIn", headers: "h2, h3, h4, h5, h6"});
        $(window).scroll(function() {
			if (window.innerWidth > 600) {
				$("#toc-top").css("padding-top", $("body").scrollTop() + "px");
			} else {
				$("#toc-top").css("padding-top", "0px");
			}
        });

        $(".toc a").click(function() {
            var href = $.attr(this, "href");
            $("html, body").animate({
                scrollTop: $( href ).offset().top
            }, 500);
            history.pushState(null, null, href);
            return false;
        });

        if (!isRetina()) {
            return;
        }

        $("img.2x").map(function(i, image) {

            var path = $(image).attr("src");

            path = path.replace(".png", "@2x.png");
            path = path.replace(".jpg", "@2x.jpg");

            $(image).attr("src", path);
        });
    }

    $(document).ready(hook);
})();
