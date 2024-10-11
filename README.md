
# @flancer64/tg-demo-crudl

This repository demonstrates a simple Telegram bot that processes basic commands with arguments. The bot is built using
a CRUDL (Create, Read, Update, Delete, List) pattern to manage data in a database.

## Features

The bot processes the following commands:

1. **Create**: Adds a new record to the database.
    - Format: `/create ${name} ${phone}`
    - Example: `/create John 123456789`

2. **Read**: Retrieves a specific record by ID.
    - Format: `/read ${id}`
    - Example: `/read 1`

3. **Update**: Modifies an existing record.
    - Format: `/update ${id} ${new_name} ${new_phone}`
    - Example: `/update 1 Jane 987654321`

4. **Delete**: Removes a record from the database.
    - Format: `/delete ${id}1`
    - Example: `/delete 1`

5. **List**: Displays all records.
    - Format: `/list`

## Usage

The bot expects commands in a predefined format. Each command is processed in real-time, and the result is immediately
sent back to the user. This straightforward interaction model ensures quick responses without complex dialogues.

## Setup

To set up the bot, you need to clone the repository and install the dependencies using Node.js. You can configure your
Telegram bot token and other settings in the bot's setup file.



## Project Purpose

This project serves as a demo implementation for articles published on Habr and Medium, showcasing the basic structure and functionality of a Telegram bot using a CRUDL pattern.

## Technology Stack

The bot is built using the package `@flancer32/teq-telegram-bot`, which integrates the following libraries and tools:
- **grammY**: A Telegram bot framework for handling interactions.
- **commander**: A library for parsing and managing command-line arguments.
- **knex.js**: SQL query builder for handling database operations.
- **@teqfw/di**: Dependency Injection container for organizing code structure.

### Database

By default, the bot uses SQLite (file-based) for data storage. However, it can easily be configured to work with PostgreSQL or MySQL/MariaDB by connecting the appropriate drivers.