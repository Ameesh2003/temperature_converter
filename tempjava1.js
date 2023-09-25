document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const convertButton = document.getElementById("convertButton");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultElement.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultElement.innerText = "Please enter a valid temperature.";
        }
    });
});
