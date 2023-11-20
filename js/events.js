const adulthoodEvents = [
    // New event 1 - Legalization of selling organs
    {
      display() {
        createStoryEvent({
          title: 'Legalization of Selling Organs',
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
          player.money.total += 5000;
          const resultMessage = `
              <p>You've invested in Bitcoin. The value may fluctuate, but you gained $5000.</p>
          `;
          // Display the result and close the event
          textContainer.innerHTML += resultMessage;
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
];




const jobEvents = [
    {
        display() {
            textContainer.innerHTML += `
            <p>We have a job meeting</p>
            `
            scrolldown(textContainer)
            createStoryEvent({
                title: 'Job Meeting',
                body(id) {
                    return `
                    <p>You have a meeting in your job, what are you going to do?</p>
                        <div class="option" onclick="jobEvents[0].dontSpeak('${id}')">Dont say a word</div>
                        <div class="option" onclick="jobEvents[0].proposeIdea('${id}')">Propose a revolutionary idea</div>
                `}
            })
        },
        dontSpeak(id) {
            textContainer.innerHTML += `
            <p>I said nothing in that meeting</p>
            `
            closeStoryEvent(id)
            scrolldown(textContainer)
        },
        proposeIdea(id) {
            const Intelligence = player.stats.Intelligence;
            const random = Math.floor(Math.random() * 50) + 50

            if (random <= Intelligence) {
                textContainer.innerHTML += `
                <p>They congratulated me</p>
                `
                closeStoryEvent(id)
            } else
                textContainer.innerHTML += `
            <p>They told me to shut up</p>
            `
            closeStoryEvent(id)
            scrolldown(textContainer)
        }
    }
]



const eventsHandler = () => {
    if (!player.alive || player.age < 4) return

    const displayHandler = (events, probability) => {
        const random = Math.floor(Math.random() * 100)
        const eventIndex = Math.floor(Math.random() * events.length)
        if (random <= probability) {
            events[eventIndex].display()
        }
    }

    if (player.prison.jailed) return displayHandler(prisonEvents, 10)

    if (player.job != 'none') displayHandler(jobEvents, 8)


    else if (player.lifeStage === 'adulthood') displayHandler(adulthoodEvents, 30)
}