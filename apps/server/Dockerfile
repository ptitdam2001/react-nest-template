FROM node:lts AS builder

WORKDIR /base

COPY package.json .
COPY yarn.lock .

COPY ./packages packages/
COPY ./apps/server/package.json apps/server/

RUN yarn install

# Build core package
WORKDIR /base/packages/core
RUN yarn build

WORKDIR /base/apps/server
COPY ./apps/server .
RUN yarn build

FROM node:lts

WORKDIR /webapp

COPY package.json .
COPY yarn.lock .

COPY --from=builder /base/packages/core/package.json /webapp/packages/core/package.json
COPY --from=builder /base/packages/core/dist /webapp/packages/core/dist

COPY --from=builder /base/apps/server/package.json /webapp/packages/app/package.json
COPY --from=builder /base/apps/server/dist/ /webapp/packages/app/dist/

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /webapp/packages/app

# EXPOSE 4000
CMD [ "yarn", "start:prod" ]
