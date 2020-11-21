FROM node:12

# Create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install --silent

#bundle app source
COPY . .

EXPOSE 3002
CMD ["npm", "start"]