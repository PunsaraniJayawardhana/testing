# automation/Dockerfile
FROM cypress/included:12.17.4

WORKDIR /e2e

COPY . .

RUN npm ci

# Only this:
CMD ["npx", "cypress", "run", "--record", "--key", "${CYPRESS_RECORD_KEY}"]

