
FROM node:10-alpine as build-step
WORKDIR /my-app
COPY package.json /my-app
RUN npm install
COPY . /my-app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /my-app/build /usr/share/nginx/html


