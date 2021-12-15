export const getRoute = (origin_destination) => {
    let result = '';
    let origin = origin_destination.find(x => x.type_data === "o").name;
    let destination = origin_destination.find(x => x.type_data === "d").name;

    result = origin+' - '+destination;
    return result;
}

export const getColorStatus = (status) => {
    let color = 'green';
    if (status === "open") {
        color = 'green';
    }
    else if (status === "confirm") {
        color = "orange";
    }
    else if (status === "closed") {
        color = "red";
    }
    else if (status === "cancel") {
        color = "red";
    }
    else if (status === "accept") {
        color = "grey";
    }
    else if (status === "reject") {
        color = "grey";
    }

    return color;
}

export const formatRupiahToInteger = (originValue) => {
    let newValue = '';
    newValue = originValue.replace(/[^0-9]/g, '')
    return newValue;
}