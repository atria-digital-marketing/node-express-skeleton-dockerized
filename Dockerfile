FROM node:current-alpine
ENV DOCKER_TEST_ENV_VAR="This is my Docker environment variable"
EXPOSE 3000
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "start"]