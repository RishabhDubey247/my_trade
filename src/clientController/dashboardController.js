const axios = require('axios');
const {Cryptolist} = require('../models');
const WebSocket = require('ws');

const dashboard = async (req, res, next) => {
    try{
            //     const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', {
        //         headers: {
        //             'X-CMC_PRO_API_KEY': 'c1c63ce6-d62b-4649-8331-9502e309a57c',
        //         },
        //     });
        // const socketData = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@aggTrade");

        // socketData.onmessage = (event) => {
        //     console.log(event.data);
        // };
        const data = await Cryptolist.findAll({
            order: [['rank', 'ASC']],
            where : {
                is_active: '1'
            }
        });

        const fandG = await axios.get("https://fear-and-greed-index.p.rapidapi.com/v1/fgi", {
            
            headers : {
                'X-RapidAPI-Key' : 'c6d380d5f6msh36da8cfc4ccff70p19b595jsnfa83bff03607',
                'X-RapidAPI-Host' : 'fear-and-greed-index.p.rapidapi.com'
            }
        
        });

        const longshortration = await axios.get("https://fapi.binance.com/futures/data/topLongShortPositionRatio?symbol=BTCUSDT&period=1d&limit=1");


        res.render('screens/dashboard', {titel : "Dashboard", data , fgi : fandG.data.fgi, longshortration : longshortration.data[0]})

    }catch(e){
        console.log(e)
        res.send(e)
    }
   
    
};

module.exports = {dashboard};