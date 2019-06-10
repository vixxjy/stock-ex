const config = require('../config/config');
const unirest = require('unirest');

function getStockPrices(req, res) {

    unirest
        .get(`https://${config.host}/stock/${config.symbol}/effective-spread`)
        .header("X-RapidAPI-Host", config.host)
        .header("X-RapidAPI-Key", config.key)
        .end(function (result) {

            if (result.status == 200) {
                
                let stocks = [];
            
                let stockArray = result.body;
                stockArray.forEach(data => {
            
                        let volume = data.volume;
                        let venue = data.venue;
                        let venueName = data.venueName;
                        let priceImprovement = data.priceImprovement;
                    
                        let stock = {
                            volume,
                            venue,
                            venueName,
                            priceImprovement
                        } 
                    
                        stocks.push(stock)
                });

                return res.status(200).json(stocks);
            }
            
        });
    
}

module.exports = getStockPrices;