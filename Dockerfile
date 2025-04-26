FROM node:18.14.0
COPY ./src ./app/src
COPY .env ./app/.env
COPY package.json ./app/package.json
COPY tsconfig.json ./app/tsconfig.json
COPY yarn.lock ./app/yarn.lock
WORKDIR /app
RUN yarn
EXPOSE 3001
ENTRYPOINT ["yarn", "run", "start"]
