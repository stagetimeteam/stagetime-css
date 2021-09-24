(function($) {

    var $html = $('html');
    var $playerPlayIcon = $('.player3__action--play use');
    var $playerObject = $('.player3__widget');
    var $playerBar = $('.player3__bar');
    var playbackInterval;


    function playbackWidth() {
        $playerBar.css('width', $playerObject[0].currentTime / $playerObject[0].duration * 100 + 'px');
    }

    function playerCreate() {
        if( ! $html.hasClass('has-player3') ) {
            $html.addClass('has-player3');
        }
    }

    function playerDestroy() {
        $html.removeClass('has-player3');
    }



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
        $playerPlayIcon.attr("xlink:href", "../symbols/symbols.svg#16-pause");

        playbackInterval = setInterval(function () {
            $playerBar.css('width', $playerObject[0].currentTime / $playerObject[0].duration * 100 + 'px');
        }, 1000);

    }

    function playerPause() {
        $playerObject[0].pause();
        $playerPlayIcon.attr("xlink:href", "../symbols/symbols.svg#16-play");
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

    $('.player3__handler').on('click', function () {
        $('html').toggleClass('player3-collapsed');
    });

    $('[data-track]').on('click', function () {
        playerCreate();
        playerPlay($(this).data('track'));
    });

    $('.menu__link--close-player').on('click', function () {
        playerPause();
        playerDestroy();
    });



})(jQuery);
