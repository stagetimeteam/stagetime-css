(function($) {

    var wavesurfer = WaveSurfer.create({
        container: '.player__progress',
        barWidth: 1,
        barGap: 2,
        height: '49',
        waveColor: '#FFFFFF',
        progressColor: '#BFD7E3',
        cursorColor: '#FFFFFF'
    });

    var currentTrack = 0;
    var trackList = ['../temp/audio/epic.mp3', '../temp/audio/scream.mp3', '../temp/audio/reading.mp3'];

    wavesurfer.load(trackList[currentTrack]);

    $('.player__action--play').on('click', function () {
        wavesurfer.playPause();
    });



    /* When song is loaded, decoded and the waveform add class .player--ready (and remove player--loading) */
    wavesurfer.on('ready', function () {
        var $player = $(wavesurfer.params.container).parents('.player');
        $player.addClass('player--ready').removeClass('player--loading');
        $player.find('.player__action--play').removeClass('player__action--disabled');
    });


    /* Next track */
    $('.player__action--backward, .player__action--forward').on('click', function () {

        /* if not disabled */
        if( ! $(this).hasClass('player__action--disabled') ) {

            var $player = $(wavesurfer.params.container).parents('.player');

            /* Count new track id in array */
            if ( $(this).hasClass('player__action--backward') && currentTrack > 0 ) {
                currentTrack--;
            }

            if ( $(this).hasClass('player__action--forward') && currentTrack < trackList.length - 1) {
                currentTrack++;
            }


            /* Start loading news track */

            $player.removeClass('player--ready').addClass('player--loading');
            $player.find('.player__action--play').addClass('player__action--disabled');
            wavesurfer.load(trackList[currentTrack]);


            /* Disable buttons */

            if (currentTrack === trackList.length - 1) {
                $player.find('.player__action--forward').addClass('player__action--disabled');
            } else {
                $player.find('.player__action--forward').removeClass('player__action--disabled');
            }

            if (currentTrack === 0) {
                $player.find('.player__action--backward').addClass('player__action--disabled');
            } else {
                $player.find('.player__action--backward').removeClass('player__action--disabled');
            }

        }
    });




    /* Toggle Play/Pause icon */
    wavesurfer.on('play', function () {
        var $playButton = $(wavesurfer.params.container).parents('.player').find('.player__action--play');
        $playButton.find('use').attr("xlink:href", "../symbols/symbols.svg#16-pause");
    })

    wavesurfer.on('pause', function () {
        var $playButton = $(wavesurfer.params.container).parents('.player').find('.player__action--play');
        $playButton.find('use').attr("xlink:href", "../symbols/symbols.svg#16-play");
    });

    $('.player__action--bookmark').on('click', function (){
        $(this).find('use').attr("xlink:href", "../symbols/symbols.svg#16-bookmarked");
    });

    $('.player__action--shuffle').on('click', function (){
        $(this).find('use').attr("xlink:href", "../symbols/symbols.svg#16-shuffled");
    });


    /* Collapsed case */

    $('.player__handler').on('click', function () {
        $(this).parents('.player').toggleClass('player--collapsed');
    });

    $('.player').on('click', function () {
        if (!$(event.target).closest('.player__handler, .player__action--play').length) {
            $(this).removeClass('player--collapsed');
        }
    });

})(jQuery);
