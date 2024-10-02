# Saga Pattern Implementation For Distributed Payment Transactions

This project provides a demonstration of effectively managing long-running Payment Transactions within a Microservice Architecture. By utilizing technologies like Node.js, Kafka, and MongoDB, this implementation showcases the Saga Orchestrator pattern.

The Saga Pattern is a powerful technique for orchestrating a series of related tasks in a distributed system. It decomposes complex processes into smaller, manageable steps, ensuring that in case of any failure, compensating actions are taken. This pattern is instrumental in upholding data integrity and reliability in systems with multiple interacting services, particularly in microservices architectures.

For a more comprehensive understanding of the Saga pattern, please refer to Microservices.io - Saga Pattern.

# Set up

## Kafka Setup

docker compose up -d

## Install Packages

yarn --cwd ./kafkaBroker

yarn --cwd ./orchestratorService

yarn --cwd ./orderService

yarn --cwd ./paymentService

## Create Topics

yarn --cwd ./kafkaBroker start

## Running the Services

cd orchestratorService && yarn start

cd orderService && yarn start

cd paymentService && yarn start
# Saga-pattern
