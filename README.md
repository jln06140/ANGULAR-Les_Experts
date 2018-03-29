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

    - créer un nouveau projet : ng new <nom du projet>

    - créer des composants : ng generate componant <nom du componant> (ou ng g c <nom du componant>)
    
    - selon le modèle MVC (Modèle Vue Controleur), ou plutôt MVVM, l'architecture d'Anguler se décompose ainsi :
    
    => services : utilisés pour injecter du code (signalé par @Injectable()) dans différents composants, et qui sera utilsable (à condition d'importer le service dans chaque composant). On le crée avec ng g s <nom>
    
    => app-module : c'est le module racine, qui se divise en 2 parties :
    
    ~ les imports : peut importer des librairies externes, d'autres modules, ... pour les rendre utilisable dans tout le projet
    
    ~ les décorateurs : intervient dans l'injection du code et la compilation des templates
    
    => app-routing :permet de charger et de configurer les routes dans les différents modules du projet
    
    => composants "classique" : typiquement composés de 4 fichiers :
    
    ~ .html : architecture du composant
    ~ .css : habillage du composant (souvent remplacé par le style.css à la racine)
    ~ .ts : action du module et liens avec les autres
    ~ .spec.ts : utilisé pour tester le module
    
Pour démarrer l'application, il suffira d'entrer dans la console ng serve, puis de se connecter dans un navigateur à l'adresse http://localhost:4200


