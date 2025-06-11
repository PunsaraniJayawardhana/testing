# automation/Dockerfile
FROM cypress/included:12.17.4

WORKDIR /e2e

COPY . .

# Only this:
CMD ["npx", "cypress", "run", "--record", "--key", "f98ac57b-e938-4d36-be1c-d926678262c3"]

