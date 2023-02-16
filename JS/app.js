function getPin() {
    let pin = getRandomGenaretPin()
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function getRandomGenaretPin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('generate-Pin').addEventListener('click', function () {
    let pin = getPin()

    const showPinField = document.getElementById('show-pin');
    showPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (even) {

    const number = even.target.innerText;
    const perviousFormInput = document.getElementById('form-input')
    const currentTypeNumber = perviousFormInput.value;

    if (isNaN(number)) {
        if (number === 'C') {
            perviousFormInput.value = '';
        }
        else {
            const degites = currentTypeNumber.split('')
            degites.pop();
            const remaining = degites.join('')
            perviousFormInput.value = remaining;
        }

    }
    else {

        const newTypeNUmber = currentTypeNumber + number;
        perviousFormInput.value = newTypeNUmber;
    }

})

document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('show-pin');
    const displayPiNumber = displayPin.value;

    const typeNumberField = document.getElementById('form-input')
    const typeNumber = typeNumberField.value;
    
    const pinSuccess = document.getElementById('pin-success')
    const pinFailur = document.getElementById('pin-failur')

    if (displayPiNumber == typeNumber) {

        pinSuccess.style.display = 'block';
        pinFailur.style.display = 'none';
    }
    else {

        pinFailur.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})