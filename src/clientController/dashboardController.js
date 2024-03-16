const axios = require('axios');
const {Cryptolist} = require('../models');
const WebSocket = require('ws');

const dashboard = async (req, res, next) => {
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
    console.log(fandG.data.fgi.now)
    res.render('screens/dashboard', {titel : "Dashboard", data , fgi : fandG.data.fgi})
    
};

const getCurrentPrice = async function (token_type_id){

    return CurrentPrice;
}
module.exports = {dashboard};