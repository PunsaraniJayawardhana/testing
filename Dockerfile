# File Path: automation/Dockerfile

FROM cypress/included:12.17.4

WORKDIR /e2e

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# --- Ensure this line is present and succeeded in previous builds ---
RUN npm install -D ts-node
# ------------------------------------------

# --- OPTIONAL DEBUG: Verify ts-node was installed ---
# RUN npx ts-node --version || echo "ts-node not found or failed to run"
# ----------------------------------------------------

# Then copy the rest of your automation folder contents
COPY . .

# --- CRITICAL CHANGE TO CMD HERE ---
# Tell Node.js to use ts-node/register to process TypeScript files
CMD ["node", "--require", "ts-node/register", "npx", "cypress", "run", "--browser", "chrome", "--e2e", "--headless", "--record"]
# -----------------------------------