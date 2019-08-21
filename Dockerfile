FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY dist/bundle.js .
EXPOSE 80
CMD ["node", "bundle.js"]