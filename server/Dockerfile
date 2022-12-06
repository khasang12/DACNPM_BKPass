#  Dockerfile for Node Express Backend api (development)

FROM node:14.15.3-alpine3.12

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy app source code
COPY . /usr/src/app

# Exports
EXPOSE 5000

CMD ["npm","start"]