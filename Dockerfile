FROM charlesfc001/node18-alpine3.16-cb

LABEL version="1.0" \
    description="The Compiler Service has four compilers, there are Java, Python, Javascript and C#. \
    Copyright(c) 2023 Jalasoft"

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
