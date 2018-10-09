const leftPad = number => {
    const pad = '00'
    return pad.substr(0, pad.length -number.length) + number
}

const FormattedTime = secs => {
    const minutes = parseInt(secs / 60, 10)
    const seconds = parseInt(secs % 60, 10)
    return `${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`
}

export default FormattedTime