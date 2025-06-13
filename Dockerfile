# automation/Dockerfile
FROM cypress/included:12.17.4

WORKDIR /e2e

COPY . .

RUN npm ci

# Split ENTRYPOINT and CMD to allow runtime args
ENTRYPOINT ["npx", "cypress", "run"]
# CMD ["--record", "--key", "dummy"]
