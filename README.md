# RedString

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## TO DO List

### Ajouter des colonnes visibles en mode portable paysage
### créer et insérer les tables case/comment/tag aux popup
### créer l'API
### trouver une solution pour router sur le nom "police"
### mettre à jour les menus de navigation
### trouver une solution pour page /affaire vierge via le router
### transformer en PWA
### créer la section de création d'éléments
### créer la transformation en édition des popup
### ajouter les fonctions dela messagerie dans la création/édition
### gérer les droits différentiels
### créer la section administration
### gérer l'aspect dynamique d'association de preuves/indices
### proposer un dashboard de charts pour le chef de police
### gérer les notifications liées à la messagerie
### crée la section scientifique
### aspect sécurité
### authentification
### trouver uen solution contre les visibility true/false dans le navigateur
### apliquer la charte graphique
### intégrer les tests unitaires
### intégrer les pipe nécessaires
### sidenav en mode over en responsive

Projet Fil Rouge

Equipe GGSF

Partie Front

Pré-requis :

    NPM : 5.7.1
    NodeJS : 8.9.1
    Angular CLI : 1.6.8

Mode opératoire :

1 - Installer NodeJS
2 - Installer NPM
3 - Installer Angular CLI
4 - Installer les différents packages dans la console de l'IDE choisi (ici VS Code) et chercher des mises à jour
5 - Importer le projet sous l'IDE et le mettre à jour (NPM install)

Personnellement, j'ai particulièrement travaillé sur la partie UML, design (mokup, CSS) et "arme" du projet

Créer la partie front de l'application :

    préparer les diagrammes UML : use case, diagramme des classes, diagramme d'activité, diagramme de base

    faire quelques maquettes d'écrans

    créer les bases de données (et les remplir)

    créer les classes java, en lien avec Spring et Hiberbate :

=> modèle : cette classe permet de créer et nommer une table, ainsi que ses champs et leurs caractéristiques (nom, non null, clé primaire, ...)

=> DAO : interface, qui va permettre ici de supprimer le lien qu'un objet peut avoir entre 2 tables (mais sans toucher à l'objet même)

=> contrôleur : s'occupe de récupérer les données et de les renvoyer, après traitement, au client. Il crée aunsi une URI et agit au niveau du CRUD

=> repository : interface permettant d'activer les méthodes du CRUD pour une table donnée

=> JDBC : instruction SQL déjà compilée (plus sécurisée), pour ici supprimer le lien qu'un objet peut posseder entre 2 tables

=> service :

    pour démarrer l'application, il suffira de lancer, sur la classe Main, un "Run As", puis de choisir "Spring boot app"


