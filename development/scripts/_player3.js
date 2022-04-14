(function($) {

    if( $('.player3').length ) {

        var $html = $('html');
        var $playerPlayIcon = $('.player3__action--play use');
        var $playerObject = $('.player3__widget');
        var $playerProgress = $('.player3 .playthrough__bar');
        var $playerBar = $('.player3 .playthrough__progress');

        var playbackInterval;


        function playbackWidth() {
            $playerBar.css('width', $playerObject[0].currentTime / $playerObject[0].duration * 100 + '%');
        }

        function playerCreate() {
            if( ! $html.hasClass('has-player3') ) {
                $html.addClass('has-player3');
            }
        }

        function playerDestroy() {
            $html.removeClass('has-player3');
        }



        /* This function can be run with or without newTrack parameter.
         * If run without newTrack just unpause current track.
         * If run with newTrack then stop old one and start new one */
        function playerPlay(newTrack) {

            if(newTrack) {
                $playerBar.css('width', 0);
                $playerObject[0].setAttribute('src', newTrack);
                $playerObject[0].pause();
                $playerObject[0].load();
                // possible change to: playerJsObject.oncanplaythrough = playerJsObject.play();
                // or do file download indicator here
            }

            $playerObject[0].play();
            $playerPlayIcon.attr("xlink:href", "../symbols/symbols.svg#16-pause-2");

            clearInterval(playbackInterval);
            playbackWidth();
            playbackInterval = setInterval(playbackWidth, 1000);
        }


        function playerPause() {
            $playerObject[0].pause();
            $playerPlayIcon.attr("xlink:href", "../symbols/symbols.svg#16-play-2");
            clearInterval(playbackInterval);
        }


        /* Controls */

        $('.player3__action--play').on('click', function () {
            if( ! $playerObject[0].paused === false ) {
                playerPlay();
            } else {
                playerPause();
            }
        });

        $('.player3__action--bookmark').on('click', function () {
            $(this).find('use').attr("xlink:href", "../symbols/symbols.svg#16-smaller-heart");
        });

        $('.player3__action--shuffle').on('click', function () {
            $(this).find('use').attr("xlink:href", "../symbols/symbols.svg#16-shuffled");
        });

        var forwardButtonPressed = 0;
        $('.player3__action--forward').on('click', function () {
            $('.player3__action--backward').removeClass('player3__action--disabled');
            forwardButtonPressed++;
            if(forwardButtonPressed === 3) {
                $('.player3__action--forward').addClass('player3__action--disabled');
            }
        });


        /* Inits */

        $('[data-track]').on('click', function () {
            playerCreate();
            playerPlay($(this).data('track'));
        });

        $('.menu__link--close-player').on('click', function () {
            playerPause();
            playerDestroy();
        });


        /* Clicking on bar */

        var barLeft;
        var barWidth;
        var barClicked

        function initBar() {
            barLeft = $playerProgress.offset().left; /* left coordinates changes on window resize */
            barWidth = $playerProgress.outerWidth(); /* bar width can be changed if player is smaller on smartphone, for example */
        }

        $(document).ready(initBar);
        $(window).on('resize', initBar);

        /* Jump to */

        $playerProgress.on('click', function (event) {
            barClicked = event.clientX - barLeft;  /* This is coordinate of click inside of bar. Somewhere in between [0 to barWidth] */

            if (barClicked < 0) { /* Clicking on the left edge sometimes can give -1 value. */
                barClicked = 0;
            }
            if (barClicked > barWidth) {
                barClicked = barWidth;
            }
            $playerObject[0].currentTime = $playerObject[0].duration * barClicked / barWidth;

            clearInterval(playbackInterval);
            playbackWidth();
            playbackInterval = setInterval(playbackWidth, 1000);

        });

    }

})(jQuery);
