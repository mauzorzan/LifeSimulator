const worldEvents = {}

// they display eventually and dont affect any character


worldEvents.randomBitcoinPriceChange = () => {
    const priceChange = Math.floor(Math.random() * 1000) - 500; // Random price change between -500 and 500
    return `Global markets are affected by a change in Bitcoin prices. Bitcoin price ${priceChange > 0 ? 'increased' : 'decreased'} by $${Math.abs(priceChange)}.`;
}


worldEvents.randomStockMarketCrash = () => {
    const affectedCountry = countriesData[Math.floor(Math.random() * countriesData.length)].country;
    
    if (player.job !== 'none') {
      // Only execute this block if the player currently has a job
      player.job = 'none';
      return `Global markets experience a stock market crash, affecting ${affectedCountry} and other countries. Jobs are now harder to find, and you've lost your job`;
    }
  
    return `Global markets experience a stock market crash, affecting ${affectedCountry} and other countries. Jobs are now harder to find.`;
  };
  

const worldEventsMethodArr = Object.entries(worldEvents);
const worldEventsAmount = worldEventsMethodArr.length;

const displayWorldEvent = () => {
    const randomEventIndex = Math.floor(Math.random() * worldEventsAmount);
    const [, eventFunction] = worldEventsMethodArr[randomEventIndex];
    console.log(eventFunction());
};

