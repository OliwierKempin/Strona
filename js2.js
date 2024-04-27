function convertUnits() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    let amountInMeters;
    switch (fromUnit) {
        case 'm':
            amountInMeters = amount;
            break;
        case 'km':
            amountInMeters = amount * 1000;
            break;
        case 'cm':
            amountInMeters = amount / 100;
            break;
        case 'ft':
            amountInMeters = amount / 3.28084;
            break;
        case 'mi':
            amountInMeters = amount * 1609.34;
            break;
        default:
            result = 'Nieprawidłowa jednostka źródłowa';
            break;
    }

    switch (toUnit) {
        case 'm':
            result = `${amountInMeters} m`;
            break;
        case 'km':
            result = `${amountInMeters / 1000} km`;
            break;
        case 'cm':
            result = `${amountInMeters * 100} cm`;
            break;
        case 'ft':
            result = `${amountInMeters * 3.28084} ft`;
            break;
        case 'mi':
            result = `${amountInMeters / 1609.34} mi`;
            break;
        default:
            result = 'Nieprawidłowa jednostka docelowa';
            break;
    }

    document.getElementById('result').textContent = result;
}
