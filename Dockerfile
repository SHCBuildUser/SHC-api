FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY dist/bundle.js .

CMD ["node", "bundle.js"]