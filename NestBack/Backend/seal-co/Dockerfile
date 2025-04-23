FROM node:23

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "start:dev"]

