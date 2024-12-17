let button = document.getElementById('calculate');
button.addEventListener('click', () => {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("output");

    let height_status = false, weight_status = false;

    // Clear previous error messages
    document.getElementById('height_error').innerHTML = '';
    document.getElementById('weight_error').innerHTML = '';

    // Validate Height
    if (isNaN(height) || height <= 0) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        height_status = true;
    }

    // Validate Weight
    if (isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        weight_status = true;
    }

    // Calculate BMI if both inputs are valid
    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `<span style="color: orange;">Under Weight: ${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `<span style="color: green;">Normal: ${bmi}</span>`;
        } else {
            result.innerHTML = `<span style="color: red;">Overweight: ${bmi}</span>`;
        }
    } else {
        result.innerHTML = ''; // Clear result if inputs are invalid
    }
});
