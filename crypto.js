var url = "https://api2.binance.com/api/v3/ticker/24hr";
fetch(url).then((crypto) => {
        return crypto.json();
    }).then((data) => {
        // console.log(data);
        for (var i = 0; i < 100; i++) {
            var main = document.getElementById("main");
            var card = document.createElement("div");
            card.setAttribute('id', 'card');
            var h2 = document.createElement('h2');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            h2.innerText = data[i].symbol;
            p1.innerHTML = "Current Price : " + data[i].priceChange;
            p2.innerHTML = "Price Change: " + data[i].priceChangePercent;
            p3.innerHTML = "Last Price : " + data[i].lastPrice;
            p4.innerHTML = "Previous Close Price : " + data[i].prevClosePrice;
            card.append(h2, p1, p2, p3, p4);
            main.appendChild(card);
        }
    })
    .catch((error) => {
        main.innerText = "Error : " + error;
    });