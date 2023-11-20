const adulthoodEvents = [
    // Existing event
    {
        display() {
            const places = ['a hospital', 'the zoo', 'a store']
            const random = Math.floor(Math.random() * places.length)
            const place = places[random]
            createStoryEvent({
                title: 'Provide directions',
                body(id) {
                    return `
                    <p>Someone asked you for the direction of ${place}.</p>
                    <br>
                    <div class="option" onclick="closeStoryEvent('${id}')">Correct directions</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Incorrect directions</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Ignore</div>
                    `
                }
            })
        }
    },

    // New event 1 - Legalization of selling organs
    {
        display() {
            createStoryEvent({
                title: 'Legalization of Selling Organs',
                body(id) {
                    return `
                        <p>The government has legalized the selling of organs, offering you a unique opportunity to make money.</p>
                        <br>
                        <div class="option" onclick="adulthoodEvents[1].sellOrgans('${id}')">Sell your kidneys</div>
                        <div class="option" onclick="adulthoodEvents[1].ignoreOrgans('${id}')">Ignore the opportunity</div>
                    `;
                }
            });
        },
        sellOrgans(id) {
            // Update player stats
            player.health -= 50;
            player.happiness -= 20;
            player.money.total += 50000;
    
            // Return the result message
            const resultMessage = `
                <p>You've sold your kidneys for $50,000, but your health decreaesed</p>
            `;
    
            // Display the result and close the event
            textContainer.innerHTML += resultMessage;
            closeStoryEvent(id);
        },
        ignoreOrgans(id) {
            // Handle the consequences of ignoring the opportunity (update stats, display messages, etc.)
            const resultMessage = `
                <p>You've decided to not sell your organs</p>
            `;
    
            // Display the result and close the event
            textContainer.innerHTML += resultMessage;
            closeStoryEvent(id);
            closeStoryEvent(id);
        }
    },
    
    
    // New event 2 - Legalization of prostitution
    {
        display() {
            createStoryEvent({
                title: 'Legalization of Prostitution',
                body(id) {
                    return `
                        <p>The government has legalized prostitution, presenting you with the option to enter this profession.</p>
                        <br>
                        <div class="option" onclick="adulthoodEvents[2].joinProstitution('${id}')">Become a prostitute</div>
                        <div class="option" onclick="adulthoodEvents[2].rejectProstitution('${id}')">Reject the offer</div>
                    `;
                }
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
        }
    },
    // New event 3
    {
        display() {
            createStoryEvent({
                title: 'Financial Seminar',
                body(id) {
                    return `
                    <p>You receive an invitation to attend a financial seminar on money philosophy.</p>
                    <br>
                    <div class="option" onclick="closeStoryEvent('${id}')">Attend the seminar</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Ignore the invitation</div>
                    `;
                }
            });
        },
        attendSeminar(id) {
            // Handle the consequences of attending the seminar (update stats, display messages, etc.)
            closeStoryEvent(id);
        },
        ignoreSeminar(id) {
            // Handle the consequences of ignoring the seminar (update stats, display messages, etc.)
            closeStoryEvent(id);
        }
    }
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