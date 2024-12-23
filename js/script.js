function insrt (num) {
        $('.calc-display').val($('.calc-display').val() + num)
    }

function eql () {
    $('.calc-display').val(eval($('.calc-display').val()))
}

function clearDisplay () {
    $('.calc-display').val('')
}

function del () {
    $('.calc-display').val($('.calc-display').val().substring(0, $('.calc-display').val().length - 1))
}