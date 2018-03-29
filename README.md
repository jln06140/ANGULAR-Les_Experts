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


