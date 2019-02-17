$(function(){
    $("#slider").vmcSlider({
        width: 1300,
        height: 300,
        gridCol: 10,
        gridRow: 5,
        gridVertical: 20,
        gridHorizontal: 10,
        autoPlay: true,
        ascending: true,
        effects: [
            'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
            'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
            'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
        ],
        ie6Tidy: false,
        random: false,
        duration: 2000,
        speed: 900
    });
})

