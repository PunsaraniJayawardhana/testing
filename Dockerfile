FROM cypress/included:12.17.4

WORKDIR /e2e

# Copy package.json files first
COPY package*.json ./

# Install ts-node and typescript so Cypress can understand `.ts` config
RUN npm install \
    typescript \
    ts-node \
    @cypress/webpack-preprocessor

# Copy all remaining files
COPY . .

# Let Cypress know how to run TS config
ENV NODE_OPTIONS="--loader ts-node/esm"

CMD ["npx", "cypress", "run", "--browser", "chrome", "--e2e", "--headless", "--record", "--config-file", "cypress.config.ts"]
