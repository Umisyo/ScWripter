const text_formatter = (text) => {
    let formatted_text = ''
    let input_speech_mode = false
    let input_braces = false

    Array.prototype.forEach.call(text, (t) => {
        if (t === '!') {
            input_speech_mode = true
            input_braces = true
        } else if (
            input_speech_mode &&
            input_braces &&
            t === ' '
        ) {
            formatted_text += '「'
            input_braces = false
        } else if (input_speech_mode && t === '\n') {
            formatted_text += '」\n'
            input_speech_mode = false
        } else {
            formatted_text += t
        }
    })
    return formatted_text.split('\n')
}

export default text_formatter