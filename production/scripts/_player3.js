(function($) {

    var forwardButtonPressed = 0;

    // var wavesurfer = WaveSurfer.create({
    //     container: '.player__progress',
    //     barWidth: 1,
    //     barGap: 2,
    //     height: '49',
    //     waveColor: '#FFFFFF',
    //     progressColor: '#BFD7E3',
    //     cursorColor: '#FFFFFF'
    // });
    //
    // var currentTrack = 0;
    // var trackList = ['../temp/audio/epic.mp3', '../temp/audio/scream.mp3', '../temp/audio/reading.mp3'];
    //
    // wavesurfer.load(trackList[currentTrack]);
    //
    // $('.player__action--play').on('click', function () {
    //     wavesurfer.playPause();
    // });
    //
    //
    //
    // /* When song is loaded, decoded and the waveform add class .player--ready (and remove player--loading) */
    // wavesurfer.on('ready', function () {
    //     var $player = $(wavesurfer.params.container).parents('.player');
    //     $player.addClass('player--ready').removeClass('player--loading');
    //     $player.find('.player__action--play').removeClass('player__action--disabled');
    // });
    //
    //
    // /* Next track */
    // $('.player__action--backward, .player__action--forward').on('click', function () {
    //
    //     /* if not disabled */
    //     if( ! $(this).hasClass('player__action--disabled') ) {
    //
    //         var $player = $(wavesurfer.params.container).parents('.player');
    //
    //         /* Count new track id in array */
    //         if ( $(this).hasClass('player__action--backward') && currentTrack > 0 ) {
    //             currentTrack--;
    //         }
    //
    //         if ( $(this).hasClass('player__action--forward') && currentTrack < trackList.length - 1) {
    //             currentTrack++;
    //         }
    //
    //
    //         /* Start loading news track */
    //
    //         $player.removeClass('player--ready').addClass('player--loading');
    //         $player.find('.player__action--play').addClass('player__action--disabled');
    //         wavesurfer.load(trackList[currentTrack]);
    //
    //
    //         /* Disable buttons */
    //
    //         if (currentTrack === trackList.length - 1) {
    //             $player.find('.player__action--forward').addClass('player__action--disabled');
    //         } else {
    //             $player.find('.player__action--forward').removeClass('player__action--disabled');
    //         }
    //
    //         if (currentTrack === 0) {
    //             $player.find('.player__action--backward').addClass('player__action--disabled');
    //         } else {
    //             $player.find('.player__action--backward').removeClass('player__action--disabled');
    //         }
    //
    //     }
    // });
    //
    //
    //
    //
    // /* Toggle Play/Pause icon */
    // wavesurfer.on('play', function () {
    //     $(wavesurfer.params.container).parents('.player').addClass('player--playing').removeClass('player--paused');
    // })
    //
    // wavesurfer.on('pause', function () {
    //     $(wavesurfer.params.container).parents('.player').addClass('player--paused').removeClass('player--playing');
    // });
    //

    $('.player3__action--play').on('click', function () {
        $(this).find('use').attr("xlink:href", "../symbols/symbols.svg#16-pause");
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

    // $('.player').on('click', function () {
    //     if (!$(event.target).closest('.player__handler, .player__action--play, .up-next').length) {
    //         $(this).removeClass('player--collapsed');
    //         if ( $(document).find('.up-next').length ) {
    //             $('html').toggleClass('playlist-expanded');
    //         }
    //     }
    // });
    //
    //
    // /* Collapse on mobile */
    //
    // function playerCollapseOnMobiles() {
    //     if( mobileMediaQuery.matches && ! $('html').hasClass('playlist-expanded') ) {
    //         $('.player').addClass('player--collapsed');
    //     } else {
    //         $('.player').removeClass('player--collapsed');
    //     }
    // }
    //
    // $(window).on('resize', playerCollapseOnMobiles);
    // $(document).ready(playerCollapseOnMobiles);

})(jQuery);
