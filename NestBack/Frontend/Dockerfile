FROM node:23

WORKDIR /user/src/frontend

EXPOSE 5173

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]