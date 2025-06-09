# File Path: automation/Dockerfile

FROM cypress/included:12.17.4

WORKDIR /e2e

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Ensure ts-node is installed
RUN npm install -D ts-node

# Then copy the rest of your automation folder contents
COPY . .

# --- CRITICAL CHANGE TO CMD AND ENV ---
# Set NODE_OPTIONS to ensure ts-node/register is loaded by Node.js
ENV NODE_OPTIONS="--require ts-node/register"
CMD ["npx", "cypress", "run", "--browser", "chrome", "--e2e", "--headless", "--record"]
# --------------------------------------