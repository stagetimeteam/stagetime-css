(function($) {

    var forwardButtonPressed = 0;

    var playerObject = $('.player3__widget')[0];
    var playerPlayIcon = $('.player3__action--play use');
    var playbackInterval;


    $('[data-track]').on('click', function () {
        playerPlay($(this).data('track'));
    });


    function playerPlay(newTrack) {

        if(newTrack) {
            playerObject.setAttribute('src', newTrack);
            playerObject.pause();
            playerObject.load();
            // possible change to: playerObject.oncanplaythrough = playerObject.play();
            // or do file download indicator here
        }

        playerObject.play();
        playerPlayIcon.attr("xlink:href", "../symbols/symbols.svg#16-pause");

        playbackInterval = setInterval(function () {
            console.log($('.player3__widget')[0].currentTime);
        }, 1000);

    }

    function playerPause() {
        playerObject.pause();
        playerPlayIcon.attr("xlink:href", "../symbols/symbols.svg#16-play");
        clearInterval(playbackInterval);
    }



    /* Controls */

    $('.player3__action--play').on('click', function () {
        if( ! playerObject.paused == false ) {
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

    $('.player3__action--forward').on('click', function () {
        $('.player3__action--backward').removeClass('player3__action--disabled');
        forwardButtonPressed++;
        if(forwardButtonPressed === 3) {
            $('.player3__action--forward').addClass('player3__action--disabled');
        }
    });


    /* Collapsed case */

    $('.player3__handler').on('click', function () {
        $('html').toggleClass('player3-collapsed');
    });


})(jQuery);
