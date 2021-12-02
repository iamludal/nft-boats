FROM node:14-alpine3.14

WORKDIR /app 

COPY webapp/package.json webapp/yarn.lock ./

RUN yarn

COPY webapp/ ./

RUN yarn build

ENV PORT 3000

EXPOSE $PORT 

CMD ["yarn", "start"]
