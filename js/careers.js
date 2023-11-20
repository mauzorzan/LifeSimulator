const childhoodEducation = {
    preschool: {
        label:'Preschool',
        since: 3,
        until: 5,
    },
    elementary: {
        label: 'Elementary school',
        since: 5,
    }
}

const universityCareers = {
    Medicine: {
        label: 'Medicine',
        name: 'Medicine',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
        }
    },
    computerScience: {
        label: 'computerScience',
        name: 'Computer science',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
            player.skills.programming.xp += 50 + Math.floor(Math.random() * 20)
        }
    },
    biology: {
        label: 'biology',
        name: 'Biology',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
        }
    },
    chemistry: {
        label: 'chemistry',
        name: 'Chemistry',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
        }
    },
    Philosophy : {
        label: 'Philosophy',
        name: 'Philosophy',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
        }
    },
    politicalScience: {
        label: 'politicalScience',
        name: 'Political science',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
        }
    },
    math: {
        label: 'math',
        name: 'Math',
        duration: 4,
        buff(player) {
            player.stats.Intelligence += Math.floor(Math.random() * 5)
        }
    },


}

const jobs = [
    {
        label: 'Jr App Developer',
        requirements: {
            education: 'computerScience',
            programming: 3
        },
        salary: 55000,
        field: 'technology',
        promotion: 'App Developer',
        buff(player){
            player.skills.programming.xp += 5 + Math.floor(Math.random() * 20);
        }
    }, {
        label: 'App Developer',
        requirements: {
            education: 'computerScience',
            programming: 5
        },
        salary: 75000,
        field: 'technology',
        promotion: 'Sr App Developer',
        buff(player){
            player.skills.programming.xp += 5 + Math.floor(Math.random() * 20);
        }
    }, {
        label: 'Sr App Developer',
        requirements: {
            education: 'computerScience',
            programming: 8
        },
        salary: 100000,
        field: 'technology',
        promotion: 'none',
        buff(player){
            player.skills.programming.xp += 5 + Math.floor(Math.random() * 20);
        }
    }, {
        label: 'Supermarket cashier',
        requirements: {
            minAge: 16
        },
        salary: 25000,
        field: '',
        promotion: 'none',
        buff(player){
            return
        }
    },{
        label: 'Janitor',
        requirements: {
            minAge: 16
        },
        salary: 18000,
        field: '',
        promotion: 'none',
        buff(player){
            player.skills.handiness.xp += 5 + Math.floor(Math.random() * 20);
        }
    }, {
        label: 'Philosophy teacher',
        requirements: {
            minAge: 20,
            education: 'Philosophy'
        },
        salary: 50000000,
        field: 'Philosophy',
        promotion: 'none',
        buff(player){
            return
        }
    },{
        label: 'Math teacher',
        requirements: {
            minAge: 20,
            education: 'math'
        },
        salary: 50000,
        field: 'math',
        promotion: 'none',
        buff(player){
            return
        }
    },{
        label: 'Gym trainer',
        requirements: {
            minAge: 18,
            fitness: 70
        },
        salary: 36000,
        field: 'fitness',
        promotion: 'none',
        buff(player){
            return
        }
    }, {
        label: 'Chemistry teacher',
        requirements: {
            minAge: 20,
            education: 'chemistry'
        },
        salary: 50000,
        field: 'chemistry',
        promotion: 'none',
        buff(player){
            return
        }
    }, {
        label: 'Biology teacher',
        requirements: {
            minAge: 20,
            education: 'biology'
        },
        salary: 50000,
        field: 'biology',
        promotion: 'none',
        buff(player){
            return
        }
    }, {
        label: 'Truck driver',
        requirements: {
            driverLicense: true
        },
        salary: 40000,
        field: 'transport',
        promotion: 'none',
        buff(player){
            return
        }
    }, {
        label: 'Taxi driver',
        requirements: {
            driverLicense: true
        },
        salary: 48000,
        field: 'transport',
        promotion: 'none',
        buff(player){
            return
        }
    }, {
        label: 'Music teacher',
        requirements: {
            education: 'music',
            music: 2
        },
        salary: 50000,
        field: 'music',
        promotion: 'none',
        buff(player){
            player.skills.music.xp += 5 + Math.floor(Math.random() * 20);
        }
    }, 
    {
        label: 'Apprentice construction worker',
        requirements: {
            handiness: 5,
            minAge: 18
        },
        salary: 30000,
        field: 'construction',
        promotion: 'Construction worker',
        buff(player){
            player.skills.handiness.xp += 5 + Math.floor(Math.random() * 20);
        }
    },
    {
        label: 'Construction worker',
        requirements: {
            handiness: 8,
            minAge: 18
        },
        salary: 40000,
        field: 'construction',
        promotion: 'none',
        buff(player){
            player.skills.handiness.xp += 5 + Math.floor(Math.random() * 20);
        }
    },
];