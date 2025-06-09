# automation/Dockerfile

FROM cypress/included:12.17.4

WORKDIR /e2e

# Copy package files first
COPY package*.json ./

# Install Cypress dependencies, including ts-node and typescript
RUN npm install \
    ts-node \
    typescript

# Copy the rest of the test code
COPY . .

# Use ts-node to run TypeScript config
CMD ["npx", "cypress", "run", "--browser", "chrome", "--e2e", "--headless", "--record"]
