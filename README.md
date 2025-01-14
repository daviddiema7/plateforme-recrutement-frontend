# Plateforme Recrutement Frontend

Ce projet est une application web pour une plateforme de recrutement. Il a été développé avec Next.js, Ant Design et Redux.

 Cloner le dépôt :

    ```bash
    git clone https://github.com/davididema7/plateforme-recrutement-frontend.git
    cd plateforme-recrutement-frontend
    ```
2.  Installer les dépendances :

    ```bash
    npm install
    ```
3.  Lancer le serveur de développement :

    ```bash
    npm run dev
    ```
4.  Ouvrir le navigateur à `http://localhost:3000` (ou le port que ton terminal t'indique si un autre est utilisé)

## Fonctionnalités

*   Page pour les candidats (formulaire).
*   Page pour les recruteurs (liste des candidats).
*   Page pour les recruteurs (détail d'un candidat).
*  Gestion des traductions.
* Personnalisation du theme avec Ant Design.

## Difficultés rencontrées

Lors du développement de ce projet, j'ai rencontré des difficultés à résoudre complètement une erreur liée à l'utilisation des React Server Components (RSC) avec la librairie de traduction `i18next` et potentiellement avec l'utilisation de `antd`. Malgré plusieurs tentatives et corrections, l'erreur suivante persiste :
Unhandled Runtime Error

[ Server ] Error: This function is not supported in React Server Components. Please only use this export in a Client Component.

resolveErrorDev
file:///C:/Users/dvvid/Desktop/projets/plateforme-recrutement-frontend/.next/static/chunks/node_modules_next_dist_compiled_107ce8..js (3662:65)
processFullStringRow
file:///C:/Users/dvvid/Desktop/projets/plateforme-recrutement-frontend/.next/static/chunks/node_modules_next_dist_compiled_107ce8..js (3824:23)
processFullBinaryRow
file:///C:/Users/dvvid/Desktop/projets/plateforme-recrutement-frontend/.next/static/chunks/node_modules_next_dist_compiled_107ce8..js (3812:9)
progress
file:///C:/Users/dvvid/Desktop/projets/plateforme-recrutement-frontend/.next/static/chunks/node_modules_next_dist_compiled_107ce8..js (3932:102)
Hide ignored frames

Cette erreur indique qu'une fonction ou un hook qui n'est pas compatible avec les React Server Components est utilisé dans un composant qui s'exécute côté serveur. Malgré l'ajout de `"use client"` dans les composants clients et plusieurs vérifications, le problème persiste.
