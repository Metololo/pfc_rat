export const chapter1 = [
    {
        id: 1,
        type:"dialog",
        text:"Bienvenue dans PFC, pour jouer il suffit d'utiliser sa souris. Appuyer sur une touche du clavier ou de la souris"
    },
    {
        id: 2,
        type:"dialog",
        text:"Vous debloquez des succes accessibles en haut a droite au fur et a mesure de vos choix"
    },
    {
        id: 3,
        type:"choice",
        choices: [
            "Entrer dans le restaurant"
        ]
    },
]

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
            "Je n'ai pas encore commandé !"
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