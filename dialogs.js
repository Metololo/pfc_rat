export const dialog = [
        {
            background: "/images/scene/exterior.jpg",
            id: 1,
            type:"dialog",
            text:"Bienvenue dans PFC, pour jouer il suffit d'appuyer sur CLIQUE GAUCHE sur le texte...",
            next:2
        },
        {
            id: 2,
            type:"dialog",
            text:"Attention ! Vos choix ont un impact sur le jeu et la fin de celui-ci",
            next:3
        },
        {
            id: 3,
            type:"dialog",
            text:"Vous debloquez des succes (tables) accessibles en haut a droite au fur et a mesure de vos choix",
            next: 4
        },
        {
            id: 4,
            success:"success1",
            type:"choice",
            choices: [
                {
                    choice: "Entrer dans le restaurant.",
                    next: 5
                },
            ]
        },
        {
            background: "/images/scene/caisse.jpg",
            id: 5,
            type:"dialog",
            text:"Salut à toi jeune rat ! Bienvenue à PFC, le meilleur restaurant de Rat City...",
            next: 6,
            character:"Django"
        },
        {
            id: 6,
            type:"dialog",
            text:"avec quoi veut tu payer ?",
            next: 7,
            character:"Django"
        },
        {
            id: 7,
            type:"choice",
            character:"Django",
            choices: [
                {
                    choice: "Je n'ai pas encore commandé !",
                    next: 8
                },
            ]
        },
        {
            id: 8,
            type:"dialog",
            text:"Tinquiete, donne moi ta carte ou ton billet.",
            character:"Django",
            next: 9
        },
        {
            id: 9,
            type:"choice",
            character:"Django",
            choices: [
                {
                    choice: "Je n'ai que un billet de 50 euros.",
                    next: 10
                },
                {
                    choice: "voici ma blackcard",
                    next: 10
                }
            ]
        },
        {
            id: 10,
            character:"Django",
            type:"dialog",
            text:"Ok, donne moi ça je vais payer pour toi, tkt.",
            success: [
                "payment_method"
            ]
        },
]