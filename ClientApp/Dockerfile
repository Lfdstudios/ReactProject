FROM node:latest
WORKDIR /app
ENV PATH /app/node_modules/.bin$PATH
COPY package*.json .
RUN npm install -g npm@7.6.3 && npm i
COPY . .
EXPOSE 3000
CMD ["npm","start"]