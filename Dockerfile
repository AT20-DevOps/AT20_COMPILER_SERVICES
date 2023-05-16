FROM node:18-alpine3.16

LABEL version="1.0" \
    description="The Compiler Service has four compilers, there are Java, Python, Javascript and C#. \
    Copyright(c) 2023 Jalasoft"

WORKDIR /app

COPY . .

# Install necessary dependencies
RUN apk update && \
    apk add --no-cache \
        build-base \
        nodejs \
        npm \
        openjdk11 \
        python3 \
        py3-pip && \
    apk add --no-cache mono --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing && \
    apk add --no-cache --virtual=.build-dependencies ca-certificates && \
    cert-sync /etc/ssl/certs/ca-certificates.crt && \
    apk del .build-dependencies && \
    pip3 install --no-cache --upgrade pip setuptools && \
    npm install

CMD ["npm", "start"]
