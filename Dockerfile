FROM node:alpine

WORKDIR /nestjs

COPY package.json .

RUN npm install --production

RUN npm audit fix

COPY dist .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:docker"]