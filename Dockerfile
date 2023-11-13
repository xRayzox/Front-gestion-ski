FROM node:18-alpine

COPY package.json package-lock.json ./

# Install a specific version of Angular CLI
RUN npm i -g @angular/cli

# Install app dependencies
RUN npm i 

COPY . .



ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
