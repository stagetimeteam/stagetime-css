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

    $('#temp-play').on('click', function (){
        wavesurfer.playPause();
    });



    /* When song is loaded, decoded and the waveform add class .player--init */
    wavesurfer.on('ready', function () {
        var $player = $(wavesurfer.params.container).parents('.player');
        $player.addClass('player--init');
        $player.find('.player__action--play').removeClass('player__action--disabled');
    });

    /* Prev track */
    $('#temp-backward').on('click', function () {
        var $player = $(wavesurfer.params.container).parents('.player');
        $player.removeClass('player--init');
        $player.find('.player__action--play').addClass('player__action--disabled');

        if (currentTrack > 0) {
            currentTrack--;
        } else {
            currentTrack = trackList.length - 1;
        }
        wavesurfer.load(trackList[currentTrack]);
    });

    /* Next track */
    $('#temp-forward').on('click', function () {
        var $player = $(wavesurfer.params.container).parents('.player');
        $player.removeClass('player--init');
        $player.find('.player__action--play').addClass('player__action--disabled');

        $(wavesurfer.params.container).parents('.player').removeClass('player--init');
        if (currentTrack < trackList.length - 1) {
            currentTrack++;
        } else {
            currentTrack = 0;
        }
        wavesurfer.load(trackList[currentTrack]);
    });


    /* Toggle Play/Pause icon */
    wavesurfer.on('play', function () {
        var $playButton = $(wavesurfer.params.container).parents('.player').find('#temp-play')
        $playButton.find('svg use').attr("xlink:href", "../symbols/symbols.svg#16-pause");
    })

    wavesurfer.on('pause', function () {
        var $playButton = $(wavesurfer.params.container).parents('.player').find('#temp-play')
        $playButton.find('svg use').attr("xlink:href", "../symbols/symbols.svg#16-play-rounded");
    });




})(jQuery);
