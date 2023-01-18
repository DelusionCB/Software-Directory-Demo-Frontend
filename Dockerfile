FROM node:18.13.0-buster
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN yarn install && yarn cache clean
COPY . ./
EXPOSE 3000