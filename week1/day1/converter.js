const exchange_rate = 1325
const pounds_conversion = 2.20462

function nairaToUsd(naira) {
    let UsdAmount = naira / exchange_rate
    return UsdAmount
}

function usdToNaira(usd) {
    let NairaAmount = usd * exchange_rate
    return NairaAmount
}

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit

}

function kgToPounds(kg) {
    let pounds = kg * pounds_conversion
    return pounds
}

console.log(`5000 Naira is ${nairaToUsd(5000).toFixed(2)} USD`)
console.log(`500 USD is ${usdToNaira(500).toFixed(2)} Naira`)
console.log(usdToNaira(nairaToUsd(5000)) === 5000)
console.log(`100°C is ${celsiusToFahrenheit(100)}°F`)
console.log(`51 kg is ${kgToPounds(51).toFixed(2)} Pounds`)
console.log(0.1 + 0.2)