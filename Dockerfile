FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

# Build the Angular app
RUN ng build

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
