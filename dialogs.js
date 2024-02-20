export const chapter1 = {
    background: "/images/scene/exterior.jpg",
    dialog: [
        {
            id: 1,
            type:"dialog",
            text:"Bienvenue dans PFC, pour jouer il suffit d'appuyer sur CLIQUE GAUCHE sur le texte...",
            next:1.5
        },
        {
            id: 1.5,
            type:"dialog",
            text:"Vous pourrez entrer en interaction avec les elements en surbrillance...",
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
            next:4
        },
        {
            id: 4,
            type:"choice",
            choices: [
                {
                    choice: "Entrer dans le restaurant.",
                    next: 6
                },
            ]
        },
    ]
}

export const chapter2 = [
    {
        id: 1,
        type:"dialog",
        text:"Salut à toi jeune rat ! Bienvenue à PFC, le meilleur restaurant de Rat City"
    },
    {
        id: 2,
        type:"dialog",
        text:"avec quoi veut tu payer ?"
    },
    {
        id: 3,
        type:"choice",
        choices: [
            {
                choice: "Tiens, mon paypal.",
                next: 4
            },
        ]
    },
    {
        id: 4,
        type:"dialog",
        text:"Tinquiete, montre moi juste ta carte ou ton billet."
    },
    {
        id: 5,
        type:"choice",
        choices: [
            {
                choice: "Tiens, mon paypal.",
                next: 6
            },
            {
                choice: "voici ma blackcard",
                next: 6
            }
        ]
    },
    {
        id: 6,
        type:"dialog",
        text:"Ok, donne moi ça et va a la borne, je gere le reste",
        success: [
            "payment_method"
        ]
    },
]