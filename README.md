# ProjetJEE Mohammed Amine Rokki
# Encadre par Pr YOUSSFI

Ce projet vise à développer une application de gestion de comptes bancaires en utilisant le framework Spring Boot. L'objectif est de permettre aux utilisateurs de gérer facilement leurs comptes, effectuer des opérations de débit et de crédit, ainsi que consulter les informations relatives à leurs comptes. Le projet est structuré en deux composantes principales : la couche DAO (Data Access Object) qui gère l'accès aux données, et la couche service qui gère la logique métier, les objets de transfert de données (DTOs) et les contrôleurs REST (RestController).

+La couche Dao
    -La création des entités JPA qui représentent les classes qui sont persistées dans une base de données relationnelle, et elles permettent de manipuler ces données de manière transparente en utilisant les fonctionnalités de JPA. 
    ![alt text](image.png)

-Ajouter interfaces AccountOperationRepository, BankAccountRepository et CustomerRepository qui héritent de l'interface           JpaRepository fournie par Spring Data. L'utilisation de l'interface 'JpaRepository' permet de bénéficier des fonctionnalités de base pour l'accès aux données, telles que les opérations CRUD et d'autres opérations courantes. 
    ![alt text](image-1.png)

-Ajouter les clients en utilisant l'interface BankAccountService
    ![alt text](image-2.png)

-Ajouter les comptes des deux types CurrentBankAccount et SavingBankAccount pour toute la liste des clients
    ![alt text](image-3.png)

-Le sauvegard
    ![alt text](image-4.png)

-Bank Account sur myphpadmin
    ![alt text](image-5.png)

+Test du couche Dao -Implementation des methodes
    ![alt text](image-6.png)

-Pour ajouter des clients, des comptes et des opérations associées en utilisant l'interface BankAccountService, on utilise une implémentation concrète de cette interface, telle que BankAccountServiceImpl. Cette classe permet de créer de nouveaux clients, de créer des comptes pour ces clients, et d'effectuer des opérations telles que les dépôts et les retraits sur les comptes existants.
    ![alt text](image-7.png)

-Créer les deux classes 'BankAccountRestApi' et 'CustomerRestApiController' au niveau du package web; La classe 'BankAccountRestApi' peut fournir des méthodes pour créer de nouveaux comptes, effectuer des dépôts et des retraits, obtenir des informations sur les comptes, etc. Cette classe peut interagir avec l'implémentation de 'BankAccountService' pour exécuter les opérations bancaires correspondantes. La classe 'CustomerRestApiController', quant à elle, peut être utilisée pour la création de nouveaux clients, la récupération des détails des clients, la mise à jour des informations des clients, etc. Cette classe peut également interagir avec l'implémentation de 'BankAccountService' pour effectuer les opérations liées aux clients.
    ![alt text](image-8.png)
    ![alt text](image-9.png)

-Ajouter la pagination
    ![alt text](image-10.png)

+Angular -Generer les composants
    ![alt text](image-11.png)

-Ajouter une barre de navigation
    ![alt text](image-12.png)

-Pour afficher la liste des clients, on doit installer le module HttpClientModule pour intéragir avec la partie Backend et pouvoir charger les données
    ![alt text](image-13.png)

-Créer les deux services appelés CustomerService et AccountService pour pouvoir les injecter dans n'importe quel composant
    ![alt text](image-14.png)
    ![alt text](image-15.png)

-Créer des classes sous le paquet models qui représentent le modèle
    ![alt text](image-16.png)

-Créer un fomulaire pour la recherche des clients
    ![alt text](image-17.png)

+TEST
    ![alt text](image-18.png)
    ![alt text](image-19.png)

