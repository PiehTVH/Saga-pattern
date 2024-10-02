# Saga Pattern Implementation For Distributed Payment Transactions

This project provides a demonstration of effectively managing long-running Payment Transactions within a Microservice Architecture. By utilizing technologies like Node.js, Kafka, and MongoDB, this implementation showcases the Saga Orchestrator pattern.

The Saga Pattern is a powerful technique for orchestrating a series of related tasks in a distributed system. It decomposes complex processes into smaller, manageable steps, ensuring that in case of any failure, compensating actions are taken. This pattern is instrumental in upholding data integrity and reliability in systems with multiple interacting services, particularly in microservices architectures.

For a more comprehensive understanding of the Saga pattern, please refer to [Microservices.io - Saga Pattern.](https://microservices.io/patterns/data/saga.html)

# Set up

## Kafka Setup

```bash
docker compose up -d
```

## Install Packages

```bash
yarn --cwd ./kafkaBroker
```

```bash
yarn --cwd ./orchestratorService
```

```bash
yarn --cwd ./orderService
```

```bash
yarn --cwd ./paymentService
```

## Create Topics

```bash
yarn --cwd ./kafkaBroker start
```

## Running the Services

```bash
cd orchestratorService && yarn start
```

```bash
cd orderService && yarn start
```

```bash
cd paymentService && yarn start
```
