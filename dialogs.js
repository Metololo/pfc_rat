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
            next: 3.5
        },
        {
            id: 3.5,
            type:"dialog",
            text:"Etes vous prêt à vivre la grande aventure ?",
            success:{
                number:1,
                title:"TABLE DEBLOQUE : RESTAURANT !"
            },
            next: 4
        },
        {
            id: 4,
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
            text:"Joe : Salut à toi jeune rat ! Bienvenue à PFC, le meilleur restaurant de Rat City...",
            next: 6,
            character:"Django"
        },
        {
            id: 6,
            type:"dialog",
            text:"Joe : avec quoi veut tu payer ?",
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
            text:"Joe : Tinquiete, donne moi ta carte ou ton billet.",
            character:"Django",
            next: 9
        },
        {
            id: 9,
            type:"choice",
            character:"Django",
            choices: [
                {
                    choice: "Je n'ai qu'un billet de 50 euros.",
                    next: 10
                },
                {
                    choice: "Voici ma blackcard",
                    next: 10
                }
            ]
        },
        {
            id: 10,
            character:"Django",
            type:"dialog",
            success:{
                number:2,
                title:"TABLE DEBLOQUE : PAYMENT_METHOD !"
            },
            text:"Joe : Ok, donne moi ça je vais payer pour toi, tinquiete.",
            next: 11,
        },
        {
            id: 11,
            character:"Django",
            type:"dialog",
            text:"Va a la borne faire ta commande.",
            next: 12
        },
        {
            background:"/images/scene/borne.jpg",
            id: 12,
            type:"dialog",
            text:"Borne : Ta un compte client ?",
            next:13
        },
        {
            id: 13,
            type:"choice",
            choices: [
                {
                    choice: "Entré ses idantifians",
                    next: 14
                },
            ]
        },
        {
            id: 14,
            type:"dialog",
            text: "Borne : Ta gagné une reconpanse a force de mangé le bon poulé mariné du PFC",
            next:15,
            success: {
                number:3,
                title:"TABLE DEBLOQUE : CLIENT"
            }
        },
        {
            id: 15,
            asset:"client_point.jpg",
            type:"dialog",
            next: 16,
            text: "Borne : Dès la première bouchée dans le Poulet Frit du PFC, c'est rien de moins que révélateur. Une perfection croustillante et dorée cède la place à une viande succulente et tendre qui fond littéralement dans la bouche. Chaque bouchée est une symphonie de saveurs, un mélange harmonieux de notes salées et d'épices subtiles qui dansent sur vos papilles, vous laissant désirer plus.",
        },
        {
            id: 16,
            type:"dialog",
            next: 17,
            text: "Borne : Mais ce n'est pas seulement le poulet en lui-même : au PFC, c'est toute l'expérience qui élève le voyage gastronomique à de nouveaux sommets. Imaginez-vous assis à une table confortable, entouré de la lueur chaleureuse d'un éclairage d'ambiance, en savourant chaque morceau délectable de Poulet Frit au milieu de la compagnie d'amis et de proches. C'est un moment de pur bonheur culinaire, une évasion éphémère de l'agitation de la vie quotidienne.",
        },
        {
            id: 17,
            type:"dialog",
            next: 18,
            text: "Borne : Dans un monde où les tendances culinaires vont et viennent, le Poulet Frit du PFC se pose comme un classique intemporel - un chef-d'œuvre culinaire qui transcende les générations et défie les frontières culinaires. Alors pourquoi attendre ? Venez découvrir par vous-même la magie du PFC et découvrez pourquoi notre Poulet Frit a gagné sa place en tant que légende dans le monde culinaire.",
        },
        {
            id: 18,
            next:19,
            type:"dialog",
            text: "Borne : Je vai marreté la on a ke 18 minutes.",
        },
        {
            id: 19,
            type:"dialog",
            text: "Borne : bref tu ve ta réconpanse ou pa ?",
            next: 20,
        },
        {
            id: 20,
            type:"choice",
            choices: [
                {
                    choice: "Oui",
                    next: 21
                },
                {
                    choice: "Non",
                    next: 22
                },
            ]
        },
        {
            id: 21,
            type:"dialog",
            text: "Borne : la chanse, ta gagné la statu goldrat 2000 !!",
            next: 24,
            success: {
                number:4,
                title: "TABLE DEBLOQUE : COLLECTIBLE"
            }
        },
        {
            id: 22,
            type:"dialog",
            text: "Borne : jai di on a ke 18 minute le sénario va étre tro lon.",
            next: 23,
        },
        {
            id: 23,
            type:"choice",
            choices: [
                {
                    choice: "Oui",
                    next: 21
                },
            ]
        },
]