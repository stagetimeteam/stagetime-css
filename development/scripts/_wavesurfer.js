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

    var current = 0;
    var trackList = ['../temp/audio/epic.mp3', '../temp/audio/scream.mp3', '../temp/audio/reading.mp3'];

    wavesurfer.load(trackList[current]);

    $('#temp-play').on('click', function (){
        wavesurfer.playPause();
    });



    /* When song is loaded, decoded and the waveform add class .player--init */
    wavesurfer.on('ready', function () {
        $(wavesurfer.params.container).parents('.player').addClass('player--init')
    });

    /* Prev track */
    $('#temp-backward').on('click', function () {
        $(wavesurfer.params.container).parents('.player').removeClass('player--init')
        if (current > 0) {
            current--;
        } else {
            current = trackList.length - 1;
        }
        wavesurfer.load(trackList[current]);
    });

    /* Next track */
    $('#temp-forward').on('click', function () {
        $(wavesurfer.params.container).parents('.player').removeClass('player--init')
        if (current < trackList.length - 1) {
            current++;
        } else {
            current = 0;
        }
        wavesurfer.load(trackList[current]);
    });


    /* Toggle Play/Pause icon */
    wavesurfer.on('play', function () {
        var $playButton = $(wavesurfer.params.container).parents('.player').find('#temp-play')
        $playButton.find('svg use').attr("xlink:href", "../symbols/symbols.svg#16-pause");
    }).on('pause', function () {
        var $playButton = $(wavesurfer.params.container).parents('.player').find('#temp-play')
        $playButton.find('svg use').attr("xlink:href", "../symbols/symbols.svg#16-play-rounded");
    });




})(jQuery);
