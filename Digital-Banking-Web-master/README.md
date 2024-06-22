# Digital-Banking-Web (Partie Angular)

<h4>La couche Frontend (Vue) a pour rôle de concevoir l'interface utilisateur de l'application. Elle utilise le framework Angular pour créer une interface réactive et dynamique. Les composants Angular de cette couche interagissent avec la couche Backend afin d'obtenir les données nécessaires et effectuer les opérations requises.
</h4>

- Création du projet angular nommé (digital-banking-web) avec l'installation de l'invite de commande d'Angular (CLI) -> ceci implique la création de nombreuses fichiers et repertoires a savoir :
<h5>La logique applicative du projet  : Les composants , les Services ...</h5>
<h5>Les Dépendances externes du projet</h5>
<h5>Les fichier de configuration du projet (angular.json)</h5>

<h4>Architecture Angular</h4>

- Lorsque l'application démarre, la première page affichée est généralement index.html. Cette page démarre le framework Angular en exécutant le fichier main.ts. Dans ce dernier, le module AppModule est chargé, qui comprend plusieurs composants par défaut, dont le AppComponent. Ce dernier, basé sur le modèle MVVM (Modèle-Vue-VueModèle), permet la liaison de données bidirectionnelle, facilitant les échanges de données (Data Binding).

- Pour exécuter le projet, vous devez exécuter la commande "ng serve" à partir du répertoire racine du projet. Cette commande est utilisée pour compiler le code source du projet, transpiler le code TypeScript en JavaScript, et démarrer un serveur web local basé sur Node.js afin de déployer l'application localement via l'url http://localhost:4200 (Port par défaut).

<h4>Génération de l'ensemble des composants nécessaires a l'aide de la commande ng g c {Nom_du_component}</h4>
Chaque Composant est constitué des 4 sous fichiers : 

<h5>customer.component.css : (négliger) => Utilisation du Bootstrap</h5>
<h5>customer.component.html : définit la structure et l'apparence de l'interface utilisateur du composant CustomerComponent</h5>
<h5>customer.component.spec.ts : dédié pour les tests unitaires</h5>
<h5>customer.component.ts : fichier TypeScript qui contient la logique et la fonctionnalité spécifiques au composant CustomerComponent</h5>
  
![j2EE-github-component](https://github.com/Musta1Pha/Ressources/assets/91842692/d410e0c7-8bab-4d50-bcf4-be51ae400606)

# NB : À chaque création d'un nouveau composant , on configure le système de routage pour naviguer entre les composants 

![j2EE-github-routage](https://github.com/Musta1Pha/Ressources/assets/91842692/c4dfde11-ef85-4752-a8a1-e8fbec03e402)

- Afin d'afficher la liste des clients ou des accounts , il est nécessaire d'installer le module HttpClientModule. Ce module permet d'interagir avec la partie Backend et de charger les données requises pour afficher la liste des clients ainsi que l'annotation @CrossOrigin("*") pour permettre le CORS par n'importe quel modele.
  
![j2EE-github-module](https://github.com/Musta1Pha/Ressources/assets/91842692/83182bac-dc38-47bb-b7d1-34edd36144d1)

<h4>Partie HTML du Component : </h4>

![j2EE-github-html](https://github.com/Musta1Pha/Ressources/assets/91842692/a87bd0a5-b2b7-4bdc-87dc-c8a5a8517b20)

- Il est également nécessaire de créer les services CustomerService et AccountService pour permettre l'injection dans n'import quel composant (ng g s {Nom_du_service}).

![j2EE-github-services](https://github.com/Musta1Pha/Ressources/assets/91842692/d20e79bf-c2e9-4e5b-bdd6-086513ad30ba)

![j2EE-github-services1](https://github.com/Musta1Pha/Ressources/assets/91842692/a7a3bd24-64d6-4c3d-a2bd-2f11028501e2)

<h4>Création des models</h4>

![j2EE-github-models](https://github.com/Musta1Pha/Ressources/assets/91842692/e4ccaaae-585c-4c4a-a037-d900978a26a2)

![j2EE-github-models1](https://github.com/Musta1Pha/Ressources/assets/91842692/d62e0f84-584c-40e6-98ab-ae07ef62f0d3)

# Test (Interfaces) : 

![j2EE-github-test1](https://github.com/Musta1Pha/Ressources/assets/91842692/3642e2f5-f5e1-410c-b05d-a1c7696eb249)

![j2EE-github-test2](https://github.com/Musta1Pha/Ressources/assets/91842692/999127f8-c744-44b6-8f14-ff1034e21dc2)

![j2EE-github-test3](https://github.com/Musta1Pha/Ressources/assets/91842692/6430720b-a2c6-47ca-88d7-c4ba1f310659)



























