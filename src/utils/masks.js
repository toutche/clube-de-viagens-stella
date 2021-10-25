export const maskPhone = text => {
    let mask = text.replace(/\D/g, "")
    mask = mask.replace(/^(\d{2})(\d)/g, "($1) $2")
    if (mask.length == 14) mask = mask.replace(/(\d)(\d{4})$/, "$1-$2")
    else if (mask.length == 13) mask = mask.replace(/(\d)(\d{3})$/, "$1-$2")
    else if (mask.length == 12) mask = mask.replace(/(\d)(\d{2})$/, "$1-$2")
    else if (mask.length == 11) mask = mask.replace(/(\d)(\d{1})$/, "$1-$2")
    return mask
}