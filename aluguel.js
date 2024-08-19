// Dados simulados de histórico de aluguéis
const rentalHistory = [
    { dayOfWeek: 0, weather: 'sunny', rentals: 30 },
    { dayOfWeek: 1, weather: 'sunny', rentals: 25 },
    { dayOfWeek: 2, weather: 'cloudy', rentals: 20 },
    { dayOfWeek: 3, weather: 'rainy', rentals: 10 },
    { dayOfWeek: 4, weather: 'sunny', rentals: 28 },
    { dayOfWeek: 5, weather: 'cloudy', rentals: 18 },
    { dayOfWeek: 6, weather: 'sunny', rentals: 35 },
    // Adicione mais dados conforme necessário
];

function predictRentals() {
    const dayOfWeek = parseInt(document.getElementById('dayOfWeek').value);
    const weather = document.getElementById('weather').value;

    const filteredData = rentalHistory.filter(entry => 
        entry.dayOfWeek === dayOfWeek && entry.weather === weather
    );

    const totalRentals = filteredData.reduce((sum, entry) => sum + entry.rentals, 0);
    const averageRentals = filteredData.length ? (totalRentals / filteredData.length) : 0;

    document.getElementById('result').textContent = `Previsão de aluguéis: ${Math.round(averageRentals)}`;
}
