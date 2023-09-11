FROM node:18.17.1-alpine as node
WORKDIR /app
COPY . .
#RUN npm install -g npm@10.1.0
RUN npm install
RUN npm run build

EXPOSE 4000
FROM nginx:alpine
COPY --from=node /app/dist/angular /usr/share/nginx/html