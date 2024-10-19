// List of 100+ cryptocurrencies
const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Dogecoin', symbol: 'DOGE' },
    { name: 'Ethereum', symbol: 'ETH' },
    // Add more cryptocurrency data here (100+ entries)
    { name: 'Ripple', symbol: 'XRP' },
    { name: 'Litecoin', symbol: 'LTC' },
    { name: 'Cardano', symbol: 'ADA' },
    // Continue with the rest of the list...
];

// Dynamically populate the dropdown
window.onload = function() {
    const cryptoSelect = document.getElementById('crypto');
    cryptocurrencies.forEach(crypto => {
        const option = document.createElement('option');
        option.value = crypto.symbol.toLowerCase();
        option.text = crypto.name;
        cryptoSelect.add(option);
    });
};

// This function handles buy/sell actions
function handleAction(action) {
    const crypto = document.getElementById('crypto').value;
    const suggestionBox = document.getElementById('suggestion');
    const historyBox = document.getElementById('history');

    let currentPrice = getCurrentPrice(crypto);
    let futurePrice = predictPrice(currentPrice, action);

    // Display the suggestion
    suggestionBox.innerHTML = `
        <h2>${action === 'buy' ? 'Buying' : 'Selling'} ${crypto.toUpperCase()}</h2>
        <p>Current Price: $${currentPrice.toFixed(2)}</p>
        <p>Expected Price in 3 Days: $${futurePrice.toFixed(2)}</p>
    `;

    // Show historical data
    historyBox.style.display = 'block';
    document.getElementById('peak').innerHTML = `Peak Points: $${getPeakPoints(crypto)}`;
    document.getElementById('drop').innerHTML = `Drop Points: $${getDropPoints(crypto)}`;
    document.getElementById('stable').innerHTML = `Stable Points: $${getStablePoints(crypto)}`;
}

// These functions simulate getting data (replace with real API data)
function getCurrentPrice(crypto) {
    const prices = { btc: 30000, doge: 0.25, eth: 2000, xrp: 0.5, ltc: 150, ada: 1.2 };
    return prices[crypto] || 0;
}

function predictPrice(currentPrice, action) {
    return action === 'buy' ? currentPrice * 1.05 : currentPrice * 0.95;
}

function getPeakPoints(crypto) {
    const peaks = { btc: 60000, doge: 0.70, eth: 4000, xrp: 1.2, ltc: 300, ada: 2.4 };
    return peaks[crypto] || 0;
}

function getDropPoints(crypto) {
    const drops = { btc: 20000, doge: 0.05, eth: 1000, xrp: 0.3, ltc: 80, ada: 0.6 };
    return drops[crypto] || 0;
}

function getStablePoints(crypto) {
    const stables = { btc: 40000, doge: 0.30, eth: 3000, xrp: 0.8, ltc: 200, ada: 1.5 };
    return stables[crypto] || 0;
}
