(function($) {

    var wavesurfer = WaveSurfer.create({
        container: '.player__progress',
        barWidth: 1,
        barHeight: 1, // the height of the wave
        barGap: 2, // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
        waveColor: '#FFFFFF',
        progressColor: '#BFD7E3',
        cursorColor: 'red'
    });

    wavesurfer.load('../temp/epic.mp3');

    $('#temp-play').on('click', function (){
        wavesurfer.playPause();
    });


})(jQuery);
