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
            text:"Borne : Ta un conte clian ?",
            next:13
        },
        {
            id: 13,
            type:"choice",
            choices: [
                {
                    choice: "Entrer ses identifiants",
                    next: 14
                },
            ]
        },
        {
            id: 14,
            type:"dialog",
            success: {
                number:3,
                title:"TABLE DEBLOQUE : CLIENT",
            },
            text: "Borne : cool, laice moa regardé ton conte",
            next:14.5,
        },
        {
            id: 14.5,
            asset:"client_point.jpg",
            asset:"client_point.jpg",
            type:"dialog",
            text: "Borne : Ta gagné une reconpanse a force de mangé le bon poulé mariné du PFC",
            next:15,
        },
        {
            id: 15,
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
            text: "Borne : la chanse, ta gagné la statu maxi-rat 2000 !!",
            asset:"rat_figure.png",
            next: 25,
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
        {
            id: 25,
            type:"dialog",
            success: {
                number:4,
                title: "TABLE DEBLOQUE : COLLECTIBLE"
            },
            text: "Borne : allé choasi ta comande",
            next: 27,
        },
        {
            id: 27,
            type:"dialog",
            text: "Borne : oh atan jai oublié ! ya dé promo pour le resto an ce moman",
            next: 28,
        },
        {
            id: 28,
            type:"dialog",
            asset:"code_promo.png",
            text: "j'ai pas d'inspiration pour ce dialogue",
            next: 29,
        },
        {
            id: 29,
            success: {
                number:5,
                title: "TABLE DEBLOQUE : PROMOTION"
            },
            asset: "menu.png",
            type:"dialog",
            text: "Borne : ta dé alérgéne ?",
            next: 30,
        },
        {
            id: 30,
            type:"choice",
            choices: [
                {
                    choice: "Oui",
                    next: 31
                },
                {
                    choice: "Non",
                    next: 31
                },
            ]
        },
        {
            id: 31,
            type:"dialog",
            text: "Borne : é ba tu pren une salade !",
            next: 32,
        },
        {
            id: 32,
            type:"dialog",
            text: "Borne : tu ve conbi1 de tenders ?",
            next: 33,
        },
        {
            id: 29,
            success: {
                number:6,
                title: "TABLE DEBLOQUES"
            },
            id: 33,
            type:"choice",
            choices: [
                {
                    choice: "5",
                    next: 34
                },
                {
                    choice: "10",
                    next: 34
                },
            ]
        },
        {
            id: 34,
            type:"dialog",
            text: "Borne : 23 ?!! tu a fain toa !",
            next: 35,
        },
        {
            id: 35,
            type:"dialog",
            text: "Borne : 1 menu XXL tu di ? pas de problem",
            next: 36,
        },
        {
            id: 36,
            type:"dialog",
            text: "Borne : atention la taxe a rat city es de 123% pour lé boisson gazeuse",
            next: 37,
        },
        {
            id: 37,
            type:"dialog",
            text: "Borne : je té mi 5 bouteill de coca c moa ki régal",
            next: 38,
        },
        {
            id: 38,
            type:"dialog",
            text: "Borne : t sur ke tu ve lé 5 bouteill de coca avec ?",
            next: 39,
        },
        {
            id: 39,
            asset: "receipt.png",
            type:"dialog",
            text: "Borne : pran ta comande et va a la caiss",
            next: 40,
        },
        {
            id: 40,
            character:"Raphael",
            success: {
                number:7,
                title: "TABLE DEBLOQUE : ORDER"
            },
            background: "/images/scene/caisse.jpg",
            type:"dialog",
            text: "Raphael : Eh toi ? pousse toi c'est moi qui passe en premier",
            next: 41,
        },
        {
            id: 41,
            type:"choice",
            choices: [
                {
                    choice: "👊Coup de poing👊",
                    next: 34
                },
                {
                    choice: "💥Coup de boule💥",
                    next: 34
                },
            ]
        },

        
]