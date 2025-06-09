# automation/Dockerfile
FROM cypress/included:12.17.4

WORKDIR /e2e

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install


# --- ADD THIS LINE TO INSTALL ts-node ---
RUN npm install -D ts-node
# --- OR, if you use yarn: yarn add -D ts-node ---
# ------------------------------------------

# Then copy the rest of your automation folder contents
COPY . .

# This is the corrected CMD
CMD ["npx", "cypress", "run", "--browser", "chrome", "--e2e", "--headless", "--record"]