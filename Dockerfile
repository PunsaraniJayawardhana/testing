# automation/Dockerfile
FROM cypress/included:12.17.4

WORKDIR /e2e

COPY . .

# Only this:
CMD ["cypress", "run"]
