function dateFormatOne(Datee){
    const year = Datee.getFullYear();
    const month = Datee.getMonth() + 1 > 9 ? `${Datee.getMonth() + 1}` : `0${Datee.getMonth() + 1}`
    const day =  Datee.getDate() > 9 ? `${Datee.getDate()}` : `0${Datee.getDate()}`
    const min = Datee.getMinutes() > 9 ? `${Datee.getMinutes()}` : `0${Datee.getMinutes()}`
    const hour = Datee.getHours() > 9 ? `${Datee.getHours()}` : `0${Datee.getHours()}`

    return `${year}-${month}-${day} ${hour}:${min}`
}
function dateFormatTwo(Datee){
    const year = Datee.getFullYear();
    const month = Datee.getMonth() + 1 > 9 ? `${Datee.getMonth() + 1}` : `0${Datee.getMonth() + 1}`
    const day =  Datee.getDate() > 9 ? `${Datee.getDate()}` : `0${Datee.getDate()}`
    const min = Datee.getMinutes() > 9 ? `${Datee.getMinutes()}` : `0${Datee.getMinutes()}`
    const hour = Datee.getHours() > 9 ? `${Datee.getHours()}` : `0${Datee.getHours()}`

    return `${day}/${month}/${year} ${hour}:${min}`
}
function dateFormatThree(Datee){
    const year = Datee.getFullYear();
    const month = Datee.getMonth() + 1 > 9 ? `${Datee.getMonth() + 1}` : `0${Datee.getMonth() + 1}`
    const day =  Datee.getDate() > 9 ? `${Datee.getDate()}` : `0${Datee.getDate()}`
    const min = Datee.getMinutes() > 9 ? `${Datee.getMinutes()}` : `0${Datee.getMinutes()}`
    const hour = Datee.getHours() > 9 ? `${Datee.getHours()}` : `0${Datee.getHours()}`

    return `${day}-${month}-${year} ${hour}:${min}`
}