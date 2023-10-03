//Home player stats
const alanAnderson = {
    "number": 0,
    "shoe": 16,
    "points": 22,
    "rebounds": 12,
    "assists": 12,
    "steals": 3,
    "blocks": 1,
    "slamDunks": 1 
    }
const reggieEvans = {
    "number": 30,
    "shoe": 14,
    "points": 12,
    "rebounds": 12,
    "assists": 12,
    "steals": 12,
    "blocks": 12,
    "slamDunks": 7
    }
const brookLopez = {

    "number": 11,
    "shoe": 17,
    "points": 17,
    "rebounds": 19,
    "assists": 10,
    "steals": 3,
    "blocks": 1,
    "slamDunks": 15 
    }
const masonPlumlee = {
    "number": 1,
    "shoe": 19,
    "points": 26,
    "rebounds": 12,
    "assists": 6,
    "steals": 3,
    "blocks": 8,
    "slamDunks": 5 
    }
const jasonTerry = {
    "number": 31,
    "shoe": 15,
    "points": 19,
    "rebounds": 2,
    "assists": 2,
    "steals": 4,
    "blocks": 11,
    "slamDunks": 1 
    }

//Away player stats

const jeffAdrien = {
    "number": 4,
    "shoe": 18,
    "points": 10,
    "rebounds": 1,
    "assists": 1,
    "steals": 2,
    "blocks": 7,
    "slamDunks": 2 
    }

const bismakBiyombo= {
    "number": 0,
    "shoe": 16,
    "points": 12,
    "rebounds": 4,
    "assists": 7,
    "steals": 7,
    "blocks": 15,
    "slamDunks": 10 
    }

const deSagnaDiop = {
    "number": 2,
    "shoe": 14,
    "points": 24,
    "rebounds": 12,
    "assists": 12,
    "steals": 4,
    "blocks": 5,
    "slamDunks": 5 
    }

const jasonTerry = {
    "number": 31,
    "shoe": 15,
    "points": 19,
    "rebounds": 2,
    "assists": 2,
    "steals": 4,
    "blocks": 11,
    "slamDunks": 1 
    }





const gameObject = () => {
    
    const object ={
        'home': {
            'teamname': 'Brooklyn Nets',
            'color': ['Black','White'],
            'players': {
                "Alan Anderson": alanAnderson,
                "Reggie Evans": reggieEvans,
                "Brook Lopez": brookLopez,
                "Mason Plumlee": masonPlumlee,
                "Jason Terry": jasonTerry
            }

               

            },
        
        'away':{
            'teamname':'Charlotte Hornets',
            'color':['Turquoise','Purple'],
            'players':{
                "Jeff Adrien":
                "Bismak Biyombo"
                "DeSagna Diop"
                "Ben Gordon"
                "Brendan Haywood"
            }
        }

    }
    return object
}