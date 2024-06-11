# Utilise une image de base Node.js
FROM node:21 as build

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie tout le reste du code de l'application dans le conteneur
COPY . .

# Compile l'application React
RUN npm run build

# Utilise une image plus légère pour servir les fichiers statiques
FROM nginx

# Copie les fichiers construits depuis l'image précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port 80 pour le serveur web
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
