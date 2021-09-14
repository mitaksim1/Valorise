<h1 align="center">Valorise</h1>

<p align="center">
    <a href="#projet">Projet</a>
    <a href="#features">Features</a>
    <a href="#installation">Installation</I>
    <a href="#technologies">Technologies</a>
    <a href="#license">License</a>
</p>

***

![Badge](https://img.shields.io/badge/license-MIT-%237159c1?style=plastic) 
![Badge](https://img.shields.io/badge/Node.js-v14.17.6-%237159c1?style=plastic&color=brightgreen)

"Un compliment est gratuit pour la personne qui la donne, mais vaut beacoup pour la personne qui la reçoit."

## Le projet

***


Valorise les efforts de vos collaborateurs! 

Une équipe épanouie rend l'ambiance plus agréable et le travail plus productif!

***


## Features

[x] Création d'un utilisateur

[x] Création d'une tag

[x] Création d'un compliment 

[x] Authentification d'un utilisateur

[x] Affichage des compliment envoyés et reçus par un utilisateur authentifié

[x] Affichage de la liste des utilisateurs

[x] Affichage de la liste des compliments

[x] Affichage de la liste des tags

### Contraintes

- **Formulaire utilisateur**

    [x] Impossibilité de créer plus d'un utilisateur avec le même email.

    [x] Impossibilité d'enregistrer un utilisateur sans une adresse email.

- **Formulaire de TAG**

    [x] Impossibilité d'enregistrer une TAG sans nome.

    [x] Impossibilité d'enregistrer la même tag avec le même nom.

    [x] Impossibilité d'enregistrer un formulaire par un utilisateur qui n'est pas admin.

- **Formulaire Compliments**

    [x] Impossibilité d'un utilisateur faire un compliment à lui même.

    [x] Impossibilité de faire des compliments à des utilisateurs invalides.
    
    [x] L'utilisateur doit être authentifié à l'application.

***

## Installation

***

Pour pouvoir visualiser ou travailler sur ce projet vous devrez avoir **Node + NPM** et **Yarn** installés dans votre machine.

1- Cloner le projet.

```sh
git clone "copier le lien github du projet"
```

2- Une fois le projet cloné, dans le dossier principal installer **yarn**

```sh
yarn install
```

3- Lancer l'application avec la commande :

```sh
yarn dev
```

4- Le serveur va lancer le port 3000 - http://localhost:3000

***

## Tecnologies utilisées

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Typescript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)

***

## License

Released under the MIT license.