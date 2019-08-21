FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY dist/bundle.js .

EXPOSE 5000

CMD ["node", "bundle.js"]