# Les Experts

This project is a web app made with 3 more people during a software developer class.
This repository contains the Front-End part of the project.
[Back-end repository](https://github.com/geromegrignon/SPRINGBOOT-Les_Experts/tree/master)

[Formateur] Description de chaque élément de la compétence 4 commentés dans le wiki du repo (autres compétences dans le repo back-end)



## Requirements

[![npm](https://img.shields.io/badge/npm-5.8.0-green.svg)](https://www.npmjs.com/)
[![git](https://img.shields.io/badge/git-2.16.03-yellow.svg)](https://git-scm.com/)

IDE (Eclipse, VSCode, IntelliJ...)

## Installation

open Git Bash in the .. folder.
Run the following command to clone the repository :
`git clone https://github.com/geromegrignon/ANGULAR-Les_Experts.git`

Open a command line interface (CLI) in the folder root.
Run `npm install` to install the dependancies described in the package.json file

## Personal contribution on the Front-end project part

I realize the full front-end apart the following sections :

* modules : weapons/pieceOfEvidence
* tables : weapons/pieceOfEvidence
* api : weapons/pieceOfEvidence


## Known issues

### Process to edit an existing 'affaire' :

* Select an affaire from the 'Tableau de bord' page
* Click on the 'Editer' button to display a form
* Change the values
* Click on 'Envoyer' to save the changes

##### The 'Valider' button doesn't work
##### the 'Annuler' button just hides the form to display back the description of the 'affaire'
##### Hitting the 'Annuler' buton after sending the changes with the 'Envoyer' button doesn't cancel the changes.


### Tables displayed dynamically

The edition / delete of elements from a table isn't effective dynamically and require to refresh the page to be displayed


### Messagerie

Functionnality on the todo list.
The goal is to keep track of interactions on police cases (creation, association, changes).

### Associate/Create&Associate buttons
They used to work on Hibernate back-end version of the project but not on the lastest one using JDBC.


## Unit tests

Run `ng test` to execute the unit tests.
The active test is on a request method (GET)

## V2

### Responsive
#### the sidenav has to be hidden by default
#### reduction of the columns being displayed on landscape mode

### Messagerie

### Administration


