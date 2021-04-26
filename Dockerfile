FROM node:alpine as BUILD_IMAGE

WORKDIR /

COPY . .

# build
RUN yarn build

# copy from build image
COPY ./package.json ./package.json
COPY ./node_modules ./node_modules
COPY ./.next ./.next
COPY ./public ./public

EXPOSE 3000
CMD ["yarn", "start"]
