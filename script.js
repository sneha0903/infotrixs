document.addEventListener('DOMContentLoaded', function() {
    const cityDropdown = document.getElementById('city-dropdown');
    const cityName = document.getElementById('city-name');
    const cityWeather = document.getElementById('city-weather');
    const cityTemperature = document.getElementById('city-temperature');
    const cityHumidity = document.getElementById('city-humidity');

    cityDropdown.addEventListener('change', function() {
        const selectedCity = cityDropdown.value;
        const cityInfo = getCityInformation(selectedCity);

        cityName.textContent = cityInfo.Name || 'N/A';
        cityWeather.textContent = cityInfo.Weather || 'N/A';
        cityTemperature.textContent = cityInfo.Temperature || 'N/A';
        cityHumidity.textContent = cityInfo.Humidity || 'N/A';
    });

    function getCityInformation(city) {
        const cityData = {
            'Hyderabad': {
                Name: 'Hyderabad',
                Weather:'Rainy',
                Temperature: '25°C',
                Humidity: '80%',
            },
            'Bangalore': {
                Name: 'Bangalore',
                Weather:'Cloudy',
                Temperature: '22°C',
                Humidity: '94%',
            },
            'Chennai': {
                Name: 'Chennai',
                Weather:'Thunderstorm',
                Temperature: '29°C',
                Humidity: '85%',
            },
            'Kolkata': {
                Name: 'Kolkata',
                Weather:'Clear',
                Temperature: '25°C',
                Humidity: '74%',
            },
            'Delhi': {
                Name: 'Delhi',
                Weather:'Clear',
                Temperature: '24°C',
                Humidity: '46%',
            },
            'Mumbai': {
                Name: 'Mumbai',
                Weather:'Partly Cloudy',
                Temperature: '31°C',
                Humidity: '56%',
            },
            
        };

        return cityData[city] || {};
    }
});
