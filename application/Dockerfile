FROM node:16 AS builder

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .

RUN npm install


FROM node:16-slim

COPY --from=builder /usr/local/bin /usr/local/bin
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD [ "node", "index.js" ]