export default dialogs = [
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
        id: 2,
        type:"choice",
        choices: [
            "Je n'ai pas encore commandé !"
        ]
    },
    {
        id: 2,
        type:"dialog",
        text:"Tinquiete, montre moi juste ta carte ou ton billet."
    },
    {
        id: 2,
        type:"choice",
        choices: [
            {
                choice: "Tiens, mon paypal.",
                next: 2
            },
            {
                choice: "voici ma blackcard",
                next: 2
            }
        ]
    },
    {
        id: 2,
        type:"dialog",
        text:"Ok, donne moi ça et va a la borne, je gere le reste",
        success:
    },
]