FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

# Install a specific version of Angular CLI
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install 

# Build the Angular app
RUN ng build

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
