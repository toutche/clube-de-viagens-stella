export const maskPhone = text => {
    let mask = text.replace(/\D/g, "")
    mask = mask.replace(/^(\d{2})(\d)/g, "($1) $2")
    if (mask.length == 14) mask = mask.replace(/(\d)(\d{4})$/, "$1-$2")
    else if (mask.length == 13) mask = mask.replace(/(\d)(\d{3})$/, "$1-$2")
    else if (mask.length == 12) mask = mask.replace(/(\d)(\d{2})$/, "$1-$2")
    else if (mask.length == 11) mask = mask.replace(/(\d)(\d{1})$/, "$1-$2")
    return mask
}

export const maskDocument = text => {
    let mask = text.replace(/\D/g, "")
    mask = mask.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
    if (mask.length >= 10) mask = mask.replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
    else if (mask.length >= 7) mask = mask.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3")
    else if (mask.length >= 4) mask = mask.replace(/(\d{3})(\d)/, "$1.$2")
    return mask
}

export const maskDate = text => {
    let mask = text.replace(/\D/g, "")
    mask = mask.replace(/^(\d{2})(\d{2})(\d{4})/g, "$1/$2/$3")
    if (mask.length >= 5) mask = mask.replace(/(\d{2})(\d{2})(\d)/, "$1/$2/$3")
    else if (mask.length >= 3) mask = mask.replace(/(\d{2})(\d)/, "$1/$2")
    return mask
}