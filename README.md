#scrambling-effect

Effet de scrambling pour votre site. Cet effet de scrambling a été créé pour l'en-tête d'un site web, mais il peut facilement être adapté à n'importe quelle partie d'un site.

## Effet de Scrambling pour Site Web

Ce projet contient un composant React qui ajoute un effet de scrambling (brouillage) au texte des liens dans l'en-tête d'un site web. L'effet donne l'impression que le texte se mélange avant de se stabiliser sur le texte final.

### Fonctionnalités

Effet de scrambling sur les liens de l'en-tête

Animation automatique au chargement de la page

Durée d'animation personnalisable

Compatible avec Next.js (utilisation de 'use client')

## Installation

Clonez ce dépôt GitHub sur votre machine locale :
```sh
git clone https://github.com/JokaDev731/scrambling-effect.git
```
Accédez au dossier du projet :
```sh
cd scrambling-effect
```
Assurez-vous d'avoir Node.js et npm installés, puis installez les dépendances :
```sh
npm install
```
Utilisation

Importez le composant Header dans votre fichier principal (par exemple, pages/index.js ou app/page.js pour Next.js) :

import Header from './chemin/vers/header-site';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenue sur mon site</h1>
      </main>
    </div>
  );
}

###  Personnalisation de la durée de l'effet :

Dans le fichier header.tsx, la durée de l'effet est définie dans la fonction scrambleText.

Pour modifier la durée, changez la valeur de duration en secondes :

scrambleText(link, originalText, 5); // Animation de 5 secondes

Explication du Code

scrambleText(element, finalText, duration) : Cette fonction prend un élément HTML et applique un effet de scrambling sur son texte avant d'afficher la version finale.

useEffect : Déclenche automatiquement l'effet de scrambling au chargement de la page.

useRef : Référence l'en-tête du site pour cibler tous les liens et boutons.

Améliorations Possibles

Ajouter un effet de scrambling au survol (onMouseEnter) des liens.

Personnaliser les caractères utilisés dans l'effet de scrambling.

Ajouter une option pour activer/désactiver l'effet via une interface utilisateur.

#     Contribuer  #

Les contributions sont les bienvenues !

Forkez le projet

Créez une nouvelle branche 
```sh
git checkout -b feature-nouvelle-fonction)
```
Commitez vos modifications 
```sh
git commit -m 'Ajout d'une nouvelle fonctionnalité'
```
Poussez la branche 
```sh
git push origin feature-nouvelle-fonction
```
Ouvrez une Pull Request


##   In English 

# scrambling-effect
Scrambling effect for your site .Here, this scrambling effect was created for a website header, but it can easily be adapted to any part of a website.

###  Scrambling Effect for Websites

This project contains a React component that adds a scrambling (text distortion) effect to the links in a website's header. The effect gives the impression that the text shuffles before stabilizing on the final text.
Features

    Scrambling effect on header links
    Automatic animation on page load
    Customizable animation duration
    Compatible with Next.js (uses 'use client')

## Installation

Clone this GitHub repository to your local machine:
```sh
git clone https://github.com/JokaDev731/scrambling-effect.git
```
Navigate to the project folder:
```sh
cd scrambling-effect
```
Make sure you have Node.js and npm installed, then install the dependencies:
```sh
npm install
```
####   Usage

Import the Header component into your main file (e.g., pages/index.js or app/page.js for Next.js):

import Header from './path/to/header-site';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to my website</h1>
      </main>
    </div>
  );
}

Customizing the Effect Duration

In the header.tsx file, the effect duration is set in the scrambleText function.

To change the duration, modify the duration value in seconds:

scrambleText(link, originalText, 5); // 5-second animation

Code Explanation

    scrambleText(element, finalText, duration): This function takes an HTML element and applies a scrambling effect to its text before displaying the final version.
    useEffect: Automatically triggers the scrambling effect when the page loads.
    useRef: References the site's header to target all links and buttons.

Possible Improvements

    Add a scrambling effect on hover (onMouseEnter) for links.
    Customize the characters used in the scrambling effect.
    Add an option to enable/disable the effect via a user interface.

Contributing

Contributions are welcome!

    Fork the project.
    Create a new branch:
```sh
git checkout -b feature-new-functionality
```
Commit your changes:
```sh
git commit -m 'Added a new feature'
```
Push the branch:
```sh
git push origin feature-new-functionality
```
Open a Pull Request.


