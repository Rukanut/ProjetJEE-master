# ebanking-backend

<h3>Le Backend a été établi en utilisant l'architecture rendu côté client qui est composée d'un ensemble de couches à savoir : </h3>

<p align="center">
  <img width="460" height="300" src="https://github.com/Musta1Pha/Ressources/assets/91842692/7a4db306-aee6-4956-9259-124112058eca">
</p>

<h2>Partie DAO</h2>
La création des entités JPA (Java Persistence API) est une étape cruciale lorsqu'on souhaite implémenter la persistance des données dans une application Java. Les entités JPA sont des représentations des classes qui sont stockées de manière durable dans une base de données relationnelle. Elles facilitent la manipulation transparente de ces données en utilisant les fonctionnalités fournies par JPA.

<h5>Classe Customer : </h5>

![j2EE-github-customer](https://github.com/Musta1Pha/Ressources/assets/91842692/510b55c1-0ebd-4998-8cda-624759b0ba64)

<h5>Classe BankAccount - CurrentAccount - SavingAccount : <h6>(Héritage)</h6></h5>

- L'utilisation de la stratégie "Single Table" afin de modéliser une hiérarchie de classes en utilisant une seule table dans la base de données (BankAccount).Toutes les classes de la hiérarchie sont stockées dans cette table, avec une colonne supplémentaire pour indiquer le type de chaque enregistrement grâce aux annotations @DiscriminatorColumn et @DiscriminatorValue

![j2EE-github-banaccount](https://github.com/Musta1Pha/Ressources/assets/91842692/347979cb-08fc-4241-bd7f-9a5e028eb25d)

![j2EE-github-savingaccount](https://github.com/Musta1Pha/Ressources/assets/91842692/c538e3e3-3cd4-4c04-8667-5f6058ab6b7e)

![j2EE-github-currentaccount](https://github.com/Musta1Pha/Ressources/assets/91842692/eb71c789-a5e3-485b-8dee-d9d7d9156960)   

![j2EE-github-banaccount-phpmyadmin](https://github.com/Musta1Pha/Ressources/assets/91842692/08d0d32a-1279-449f-a34f-d75dd23eb8e8)

- Ajouter interfaces AccountOperationRepository, BankAccountRepository et CustomerRepository qui héritent de l'interface JpaRepository fournie par Spring Data afin d'implémenter les fonctionnalités de persistance des données

![j2EE-github-Repository](https://github.com/Musta1Pha/Ressources/assets/91842692/c868dc80-a52f-4abe-8209-c4ac3c7292bd)

<h4>Configuration de la base de donnée</h4>

- <h5>H2 Database</h5>
- <h6>Visualisation des tables sur la plateforme H2 Database. En utilisant l'interface web de H2 Database</h6>

![j2EE-github-h2](https://github.com/Musta1Pha/Ressources/assets/91842692/c80f624a-d4ff-4f11-8e5c-e968b95b5fcb)

![j2EE-github-h2-console](https://github.com/Musta1Pha/Ressources/assets/91842692/dee84cb2-b1e3-4499-834d-cbde8516168b)

- <h5>MySql Database</h5>
- <h6>Visualisation des tables sur la plateforme PhpMyAdmin (Exemple Precedent : Classe BanAccount)</h6>

![j2EE-github-mysql](https://github.com/Musta1Pha/Ressources/assets/91842692/a81c5b95-4914-450f-806b-6e488c484912)

- <h4>Ajout des deux types de comptes pour chaque client déja enregistré ainsi que les opérations de débit et crédit</h4>

![j2EE-github-main](https://github.com/Musta1Pha/Ressources/assets/91842692/9a9b1991-3737-4145-abcb-b64f2791db5d)

![j2EE-github-main2](https://github.com/Musta1Pha/Ressources/assets/91842692/ebea13d9-989b-4071-8a08-eb0b11e90b8f)

- <h4>Implementation l'interface BankAccountService, qui a pour objectif de définir les méthodes nécessaires pour la création de comptes bancaires ainsi que les opérations associées telles que le débit, le crédit et le transfert d'argent entre comptes.</h4>

![j2EE-github-service](https://github.com/Musta1Pha/Ressources/assets/91842692/9f3fdb5b-6f7f-47cb-9565-8308e931f4f8)

![j2EE-github-serviceImp](https://github.com/Musta1Pha/Ressources/assets/91842692/a526c7d4-7ee8-4699-ab5f-3af2909d35a3)

- Création des deux classes, 'BankAccountRestApi' et 'CustomerRestApiController', dans le package web. La classe 'BankAccountRestApi' sera responsable de fournir des méthodes permettant de créer de nouveaux comptes, d'effectuer des dépôts et des retraits, ainsi que d'obtenir des informations sur les comptes bancaires, et bien d'autres opérations liées. Cette classe pourra interagir avec l'implémentation de 'BankAccountService' afin d'exécuter les opérations bancaires correspondantes.

- D'autre part, la classe 'CustomerRestApiController' sera utilisée pour créer de nouveaux clients, récupérer les détails des clients, mettre à jour leurs informations, et effectuer d'autres opérations relatives aux clients. Elle pourra également interagir avec l'implémentation de 'BankAccountService' pour exécuter des opérations liées aux clients.

![j2EE-github-controller](https://github.com/Musta1Pha/Ressources/assets/91842692/7fa92374-873f-4c77-9adc-5fd1cf62e9c1)

![j2EE-github-controller1](https://github.com/Musta1Pha/Ressources/assets/91842692/f087b461-d13d-4e80-b2f8-700b09599b3b)

- Création de la classe BankAccountMapper afin de convertir des objets entre les entités et les DTOs (Data Transfer Objects) dans le contexte de l'application e-banking. Elle offre des méthodes pour convertir les objets Customer, SavingAccount, CurrentAccount et AccountOperation vers leurs équivalents DTO et vice versa. Les méthodes utilisent la fonction BeanUtils.copyProperties pour copier les propriétés d'un objet source vers un objet cible.

![j2EE-github-mapper](https://github.com/Musta1Pha/Ressources/assets/91842692/bf3181d1-a46e-4945-bb75-ec05f348a44f)

- Au niveau du package DTO, on crée des classes qui serviront à représenter les objets de transfert de données (DTO) utilisés pour échanger des informations entre différentes couches de votre application.

![j2EE-github-DTO](https://github.com/Musta1Pha/Ressources/assets/91842692/6ba76354-6e87-47eb-a5ce-713ef41e65c5)

<h2>Test d'API</h2>

![j2EE-github-customertest](https://github.com/Musta1Pha/Ressources/assets/91842692/9ae3fd1d-8dbc-4758-99cd-e9cf551302d7)

![j2EE-github-banaccounttest](https://github.com/Musta1Pha/Ressources/assets/91842692/1a35a792-7396-4573-a317-27defcf1c861)

<h1> NB : On peut même effectuer le test directement à l'aide de l'outil SWAGGER</h1>
























