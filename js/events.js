const adulthoodEvents = [
    // New event 1 - Legalization of selling organs
    {
      display() {
        createStoryEvent({
          title: 'Legalization of Selling Organs',
          triggered: false,
          body(id) {
            if (player.money.total < 1000) {
              return `
                  <p>The government has legalized the selling of organs, offering you a unique opportunity to make money.</p>
                  <br>
                  <div class="option" onclick="adulthoodEvents[0].sellOrgans('${id}')">Sell your kidneys</div>
                  <div class="option" onclick="adulthoodEvents[0].ignoreOrgans('${id}')">Ignore the opportunity</div>
              `;
            } else {
              return `
                  <p>You have enough money and decide not to participate in the organ selling opportunity.</p>
                  <br>
                  <div class="option" onclick="closeStoryEvent('${id}')">Continue</div>
              `;
            }
          },
        });
      },
      sellOrgans(id) {
        // Update player stats
        player.health -= 50;
        player.happiness -= 20;
        player.money.total += 50000;
  
        // Return the result message
        const resultMessage = `
                  <p>You've sold your kidneys for $50,000, but your health decreased</p>
              `;
  
        // Display the result and close the event
        textContainer.innerHTML += resultMessage;
        closeStoryEvent(id);
      },
      ignoreOrgans(id) {
        // Handle the consequences of ignoring the opportunity (update stats, display messages, etc.)
        const resultMessage = `
                  <p>You've decided not to sell your organs</p>
              `;
  
        // Display the result and close the event
        textContainer.innerHTML += resultMessage;
        closeStoryEvent(id);
        closeStoryEvent(id);
      },
    },
  
    // Updated event 2 - Legalization of Prostitution
    {
      display() {
        createStoryEvent({
          title: 'Legalization of Prostitution',
          triggered: false,
          body(id) {
            if (player.money.total < 1000) {
              return `
                  <p>The government has legalized prostitution, presenting you with the option to enter this profession.</p>
                  <br>
                  <div class="option" onclick="adulthoodEvents[1].joinProstitution('${id}')">Become a prostitute</div>
                  <div class="option" onclick="adulthoodEvents[1].rejectProstitution('${id}')">Reject the offer</div>
              `;
            } else {
              return `
                  <p>You have enough money and decide not to enter the profession of prostitution.</p>
                  <br>
                  <div class="option" onclick="closeStoryEvent('${id}')">Continue</div>
              `;
            }
          },
        });
      },
      joinProstitution(id) {
        const resultMessage = `
              <p>You've become a prostitute, your happiness and health decreased</p>
          `;
  
        // Display the result and close the event
        textContainer.innerHTML += resultMessage;
        closeStoryEvent(id);
      },
      rejectProstitution(id) {
        const resultMessage = `
              <p>You've decided not to be a prostitute</p>
          `;
  
        // Display the result and close the event
        textContainer.innerHTML += resultMessage;
        closeStoryEvent(id);
      },
    },

    // New event 3 - Financial Seminar
    {
      display() {
          createStoryEvent({
              title: 'Financial Seminar',
              triggered: false,
              body(id) {
                  return `
                      <p>You receive an invitation to attend a financial seminar on money philosophy.</p>
                      <br>
                      <div class="option" onclick="adulthoodEvents[2].attendSeminar('${id}')">Attend the seminar</div>
                      <div class="option" onclick="adulthoodEvents[2].ignoreSeminar('${id}')">Ignore the invitation</div>
                  `;
              }
          });
      },
      attendSeminar(id) {
          player.money.total += 2000;
          const resultMessage = `
              <p>You've attended the seminar and gained insights. You also received $2000.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      },
      ignoreSeminar(id) {
          const resultMessage = `
              <p>You've decided not to attend the seminar.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      }
  },

  // New event 4 - Startup Opportunity
  {
      display() {
          createStoryEvent({
              title: 'Startup Opportunity',
              triggered: false,
              body(id) {
                  return `
                      <p>You have the chance to join a startup company. They offer you an exciting role with potential rewards.</p>
                      <br>
                      <div class="option" onclick="adulthoodEvents[3].joinStartup('${id}')">Join the startup</div>
                      <div class="option" onclick="adulthoodEvents[3].rejectStartup('${id}')">Reject the offer</div>
                  `;
              }
          });
      },
      joinStartup(id) {
        player.money.total += 1000;
          const resultMessage = `
              <p>You've joined the startup. It's a risky but thrilling venture!</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      },
      rejectStartup(id) {
          const resultMessage = `
              <p>You've decided not to join the startup at this time.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      }
  },

  // New event 5 - Volunteer Opportunity
  {
      display() {
          createStoryEvent({
              title: 'Volunteer Opportunity',
              triggered: false,
              body(id) {
                  return `
                      <p>An organization is looking for volunteers to contribute to a meaningful cause. Will you volunteer your time?</p>
                      <br>
                      <div class="option" onclick="adulthoodEvents[4].volunteer('${id}')">Volunteer</div>
                      <div class="option" onclick="adulthoodEvents[4].ignoreVolunteer('${id}')">Ignore the opportunity</div>
                  `;
              }
          });
      },
      volunteer(id) {
          const resultMessage = `
              <p>You've chosen to volunteer. Your actions contribute to a positive change, and you gain happiness and morality.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      },
      ignoreVolunteer(id) {
          const resultMessage = `
              <p>You've decided not to volunteer at this time.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      }
  },

  // New event 6 - Health Checkup
  {
      display() {
          createStoryEvent({
              title: 'Health Checkup',
              triggered: false,
              body(id) {
                  return `
                      <p>It's time for your annual health checkup. Will you go?</p>
                      <br>
                      <div class="option" onclick="adulthoodEvents[5].attendCheckup('${id}')">Attend the health checkup</div>
                      <div class="option" onclick="adulthoodEvents[5].skipCheckup('${id}')">Skip the health checkup</div>
                  `;
              }
          });
      },
      attendCheckup(id) {
          player.money.total -= 1000;
          player.health += 20;
          const resultMessage = `
              <p>You've attended the health checkup, received valuable insights into your well-being, and gained health. It cost $1000.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      },
      skipCheckup(id) {
          player.health -= 10;
          const resultMessage = `
              <p>You've chosen to skip the health checkup. Ignoring your health may have consequences, and you lose some health.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      }
  },

  // New event 7 - Invest in Bitcoin
  {
    display() {
      createStoryEvent({
        title: 'Invest in Bitcoin',
        triggered: false,
        body(id) {
          return `
            <p>You hear about the rise of Bitcoin and its potential for high returns. Do you want to invest?</p>
            <br>
            <div class="option" onclick="adulthoodEvents[6].investBitcoin('${id}')">Invest in Bitcoin</div>
            <div class="option" onclick="adulthoodEvents[6].ignoreBitcoin('${id}')">Ignore the opportunity</div>
          `;
        }
      });
    },
    investBitcoin(id) {
      // Introduce a random factor for the success of the investment
      const successChance = Math.random();
  
      if (successChance < 0.5) {
        // Investment is successful
        const gainedAmount = 5000;
        player.money.total += gainedAmount;
        const resultMessage = `
          <p>You've successfully invested in Bitcoin and gained $${gainedAmount}.</p>
        `;
        // Display the result and close the event
        textContainer.innerHTML += resultMessage;
      } else {
        // Investment is unsuccessful
        const lostAmount = player.money.total*0.5; // Adjust the amount as needed
        player.money.total -= lostAmount;
        const resultMessage = `
          <p>Your Bitcoin investment didn't go as planned, and you lost $${lostAmount}.</p>
        `;
        // Display the result and close the event
        textContainer.innerHTML += resultMessage;
      }
  
      closeStoryEvent(id);
    },
    ignoreBitcoin(id) {
      const resultMessage = `
        <p>You've decided not to invest in Bitcoin at this time.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    }
  },
  

  // New event 8 - Scam
  {
      display() {
          createStoryEvent({
              title: 'Scam',
              triggered: false,
              body(id) {
                  return `
                      <p>You have an opportunity to commit a financial scam on the elderly. What will you do?</p>
                      <br>
                      <div class="option" onclick="adulthoodEvents[7].scam('${id}')">Commit a scam</div>
                      <div class="option" onclick="adulthoodEvents[7].notScam('${id}')">Don't commit a scam</div>
                  `;
              }
          });
      },
      scam(id) {
          player.money.total += 1000;
          player.happiness -= 20;
          player.morality -= 10;
          const resultMessage = `
              <p>You've decided to scam the elderly, gaining money but losing happiness and morality.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      },
      notScam(id) {
          const resultMessage = `
              <p>You've decided not to scam the elderly.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
          closeStoryEvent(id);
      }
  },
  {
    display() {
      createStoryEvent({
        title: 'Meaning of Money',
        triggered: false,
        body(id) {
            return `
                <p>What is the meaning of money to you? What do you want to use your money for? Should you give it all away if it will help people?</p>
                <br>
                <div class="option" onclick="adulthoodEvents[8].donate('${id}')">Donate all money</div>
                <div class="option" onclick="adulthoodEvents[8].keep('${id}')">Keep Money</div>
            `;
          
          }
        },
      )},
    donate(id) {
      // Update player stats
      player.happiness += 1000;
      player.money.total -= 100000000;

      // Return the result message
      const resultMessage = `
                <p>You've donated all your money, but you feel a certain peace</p>
            `;

      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
    keep(id) {
      // Handle the consequences of ignoring the opportunity (update stats, display messages, etc.)
      const resultMessage = `
                <p>You've decided to keep your money</p>
            `;

      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
  },
  {
    display() {
      createStoryEvent({
        title: 'Ethical Money Use Challenge',
        triggered: false,
        body(id) {
          return `
              <p>You face situations where the ethical use of money is in question. Various opportunities arise, and you need to decide how to use your financial resources.</p>
              <br>
              <div class="option" onclick="adulthoodEvents[9].donate('${id}')">Donate to a charitable cause</div>
              <div class="option" onclick="adulthoodEvents[9].exploit('${id}')">Exploit a financial opportunity</div>
          `;
        }
      });
    },
    donate(id) {
      // Update player stats
      player.happiness += 100;
      player.morality += 20;
      player.money.total -= 5000;
  
      // Return the result message
      const resultMessage = `
              <p>You've donated to a charitable cause, gaining moral satisfaction.</p>
          `;
  
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
    exploit(id) {
      // Handle the consequences of exploiting the financial opportunity (update stats, display messages, etc.)
      const resultMessage = `
              <p>You've prioritized personal gain over ethical considerations, potentially facing moral consequences.</p>
          `;
  
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
  },
  {
    display() {
      createStoryEvent({
        title: 'Paid Labor Dilemma',
        triggered: false,
        body(id) {
          return `
              <p>You encounter situations that question the nature of paid labor and whether it is inherently exploitative or unjust. Should you buy a product from a company that uses sweatshops?</p>
              <br>
              <div class="option" onclick="adulthoodEvents[10].embraceSweatshop('${id}')">Embrace sweatshop labor</div>
              <div class="option" onclick="adulthoodEvents[10].rejectLabor('${id}')">Reject the labor</div>
          `;
        }
      });
    },
    embraceSweatshop(id) {
      // Handle the consequences of embracing sweatshop labor (update stats, display messages, etc.)
      const resultMessage = `
              <p>You've bought the product knowing the moral implications of your purchase.</p>
          `;
  
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
    rejectLabor(id) {
      // Handle the consequences of rejecting the labor (update stats, display messages, etc.)
      const resultMessage = `
              <p>You've boycotted the company but sacrificed the convenience of an easy product.</p>
          `;
  
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
  }, {
    display() {
      createStoryEvent({
        title: 'Money and Happiness',
        triggered: false,
        body(id) {
          return `
            <p>You come across a study that explores the relationship between money and happiness. What are your thoughts on the matter?</p>
            <br>
            <div class="option" onclick="adulthoodEvents[11].reflectOnHappiness('${id}')">Reflect on Happiness</div>
            <div class="option" onclick="adulthoodEvents[11].continueWithLife('${id}')">Continue with Life</div>
          `;
        }
      });
    },
    reflectOnHappiness(id) {
      // Update player stats or provide insights based on the player's reflection
      player.happiness += 10;
      const resultMessage = `
        <p>You've taken a moment to reflect on the relationship between money and happiness, gaining a deeper understanding.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
    continueWithLife(id) {
      const resultMessage = `
        <p>You decide to continue with your life, leaving the question of money and happiness for another day.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    }
  },
  {
    display() {
      createStoryEvent({
        title: 'Market Norms',
        triggered: false,
        body(id) {
          return `
            <p>You find yourself in a situation where market norms clash with personal values. How will you navigate this conflict?</p>
            <br>
            <div class="option" onclick="adulthoodEvents[12].adhereToMarkets('${id}')">Adhere to Market Norms</div>
            <div class="option" onclick="adulthoodEvents[12].prioritizeValues('${id}')">Prioritize Personal Values</div>
          `;
        }
      });
    },
    adhereToMarkets(id) {
      // Handle consequences of adhering to market norms (update stats, display messages, etc.)
      player.happiness -= 15;
      player.morality -= 10;
      const resultMessage = `
        <p>You decide to adhere to market norms, but it comes at the cost of your happiness and moral values.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
    prioritizeValues(id) {
      // Handle consequences of prioritizing personal values (update stats, display messages, etc.)
      player.happiness += 20;
      player.morality += 15;
      const resultMessage = `
        <p>You choose to prioritize your personal values over market norms, leading to increased happiness and morality.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    }
  },
  {
    display() {
      createStoryEvent({
        title: 'Just Distribution',
        triggered: false,
        body(id) {
          return `
            <p>You find yourself contemplating whether justice requires a specific distribution of wealth and income. What are your thoughts?</p>
            <br>
            <div class="option" onclick="adulthoodEvents[13].considerDistribution('${id}')">Consider Distribution</div>
            <div class="option" onclick="adulthoodEvents[13].dismissDistribution('${id}')">Dismiss Distribution</div>
          `;
        }
      });
    },
    considerDistribution(id) {
      // Handle consequences of considering the question of just distribution (update stats, display messages, etc.)
      player.morality += 10;
      const resultMessage = `
        <p>You take a moment to consider the question of just distribution, strengthening your moral convictions.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    },
    dismissDistribution(id) {
      // Handle consequences of dismissing the question of just distribution (update stats, display messages, etc.)
      player.morality -= 15;
      const resultMessage = `
        <p>You dismiss the idea of a specific distribution as necessary for justice, impacting your moral values negatively.</p>
      `;
      // Display the result and close the event
      textContainer.innerHTML += resultMessage;
      closeStoryEvent(id);
    }
  },

];



const eventsHandler = () => {
  if (!player.alive || player.age < 4) return;

  const displayHandler = (events, probability) => {
    const random = Math.floor(Math.random() * 100);

    // Filter events that haven't been triggered yet
    const availableEvents = events.filter((event) => !event.triggered);

    if (availableEvents.length === 0) {
      // Reset triggered property for all events if all have been triggered
      events.forEach((event) => {
        event.triggered = false;
      });
      return;
    }

    const eventIndex = Math.floor(Math.random() * availableEvents.length);

    if (random <= probability) {
      // Mark the chosen event as triggered
      availableEvents[eventIndex].triggered = true;

      // Display the chosen event
      availableEvents[eventIndex].display();
    }
  };

  if (player.lifeStage === 'adulthood') displayHandler(adulthoodEvents, 10000);
};