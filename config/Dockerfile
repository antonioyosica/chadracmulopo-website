# Dockerfile
FROM node:16.18.1-alpine3.17

# create destination directory
RUN mkdir -p /usr/src/chadracmulopo-website
WORKDIR /usr/src/chadracmulopo-website

# copy the app, note .dockerignore
COPY src /usr/src/chadracmulopo-website
RUN yarn install
RUN yarn build --standalone

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
