const worldEvents = {}

// they display eventually and dont affect any character

worldEvents.randomCorporateScandal = () => {
    const affectedCompany = ['TechCorp', 'GlobalPharma', 'FinanceElite'][Math.floor(Math.random() * 3)];
    return `A major corporate scandal involving ${affectedCompany} surfaces. Public trust in corporations declines, sparking debates on corporate ethics and regulations.`;
  };
  
  worldEvents.randomUniversalBasicIncome = () => {
    const affectedCountryData = countriesData[Math.floor(Math.random() * countriesData.length)];
    const affectedCountry = affectedCountryData.country;
    const UBIAmount = Math.floor(Math.random() * 2000) + 1000; // Random UBI amount between $1,000 and $3,000
  
    // Check if the player is in the affected country
    if (player.country === affectedCountry) {
      // If the player is in the affected country, provide them with the UBI amount
      player.money.total += UBIAmount;
      return `In a bold move, the government of ${affectedCountry} implements a Universal Basic Income (UBI) program, providing you with $${UBIAmount} monthly. Discussions on the role of government in ensuring economic well-being intensify.`;
    } else {
      return `In a bold move, the government of ${affectedCountry} implements a Universal Basic Income (UBI) program, providing citizens with $${UBIAmount} monthly. Discussions on the role of government in ensuring economic well-being intensify.`;
    }
  };
  
  
  worldEvents.randomClimateChangePolicy = () => {
    const affectedCountry = countriesData[Math.floor(Math.random() * countriesData.length)].country;
    const policyType = ['carbon tax', 'renewable energy incentives', 'deforestation regulations'][Math.floor(Math.random() * 3)];
    return `The government of ${affectedCountry} announces new policies to combat climate change, focusing on ${policyType}. Debates arise on the economic impact of environmental regulations.`;
  };
  
  worldEvents.randomGlobalTradeAgreement = () => {
    const involvedCountries = [
      countriesData[Math.floor(Math.random() * countriesData.length)].country,
      countriesData[Math.floor(Math.random() * countriesData.length)].country
    ];
    const agreementType = ['free trade', 'tariff reductions', 'trade alliance'][Math.floor(Math.random() * 3)];
    return `A new global trade agreement is established between ${involvedCountries[0]} and ${involvedCountries[1]}, promoting ${agreementType}. Discussions on the effects of global trade intensify.`;
  };
  
  worldEvents.randomStudentLoanCrisis = () => {
    const affectedCountry = countriesData[Math.floor(Math.random() * countriesData.length)].country;
    const crisisType = ['rising interest rates', 'loan forgiveness debates', 'default rates'][Math.floor(Math.random() * 3)];
    return `A student loan crisis emerges in ${affectedCountry}, characterized by ${crisisType}. Discussions on education affordability and financial aid gain prominence.`;
  };
  
worldEvents.randomWealthInequalityRise = () => {
    const affectedCountry = countriesData[Math.floor(Math.random() * countriesData.length)].country;
    return `Wealth inequality is on the rise in ${affectedCountry}. Discussions on justice and the distribution of wealth intensify.`;
};

worldEvents.randomJobAutomation = () => {
    const affectedIndustry = ['manufacturing', 'service', 'technology'][Math.floor(Math.random() * 3)];
    return `Advancements in technology lead to increased job automation in the ${affectedIndustry} sector. Job security becomes a growing concern.`;
};

worldEvents.randomPhilanthropistDonation = () => {
    const philanthropistName = ['John Doe', 'Jane Smith', 'Alex Johnson'][Math.floor(Math.random() * 3)];
    const donationAmount = Math.floor(Math.random() * 50000) + 10000; // Random donation between $10,000 and $60,000
    return `${philanthropistName} announces a generous donation of $${donationAmount} to various charitable causes. Discussions arise on the role of philanthropy in addressing social issues.`;
};

worldEvents.randomGovernmentWealthTax = () => {
    const affectedCountry = countriesData[Math.floor(Math.random() * countriesData.length)].country;
    const taxRate = Math.floor(Math.random() * 5) + 1; // Random tax rate between 1% and 5%
    return `The government of ${affectedCountry} introduces a new wealth tax at ${taxRate}%. Debates ensue on the ethical implications of taxing the wealthy.`;
};

worldEvents.randomCurrencyDevaluation = () => {
    const affectedCountry = countriesData[Math.floor(Math.random() * countriesData.length)].country;
    const devaluationPercentage = Math.floor(Math.random() * 10) + 1; // Random devaluation between 1% and 10%
    return `The currency of ${affectedCountry} experiences a ${devaluationPercentage}% devaluation. Economic concerns and inflation discussions rise.`;
};

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

