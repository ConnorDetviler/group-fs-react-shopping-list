# React Shopping List

## Description

_Duration: 2 days of group work_

This is shopping list full-stack app from scratch.

<!-- ![screenshot of the app](https://github.com/ConnorDetviler/weekend-sql-to-do-list/blob/master/Screenshot.jpg) -->

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/)
- [React](https://reactjs.org/)

## Installation

1. Create a SQL database named `react_shopping_list`
2. The queries in the `database.sql` file are set up to create all the necessary tables. The INSERT statement will populate the table with dummy data if you'd like to see how the todo-list looks with data already inserted. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install` in the terminal
4. Run `npm install pg`
5. Run `npm install axios`
6. Run `npm run server` 
7. Run `npm run client` and visit localhost:3000 in your browser

## Dependencies

1. `"@fortawesome/free-solid-svg-icons": "^5.15.2"`
2. `"@fortawesome/fontawesome-svg-core": "^1.2.34"`
3. `"@fortawesome/react-fontawesome": "^0.1.14"`
4. `"axios": "^0.21.1"`
5. `"bootstrap": "^4.5.3"`
6. `"express": "^4.17.1"`
7. `"pg": "^8.5.1"`
8. `"react": "^17.0.1"`
9. `"react-bootstrap": "^1.4.3"`
10. `"react-dom": "^17.0.1"`
11. `"react-scripts": "^4.0.1"`

## Usage

- Type an item into the input field and click save or hit enter to add it to the Shopping List.
- Click 'Reset Purchased Status' button to remove the purchased status from all Shopping List items.
- Click the 'Clear List' button to empty all items out of the Shopping List.
- Click the 'Buy' button to mark that item as purchased.
- Click the 'Delete' button to remove that item from the Shopping List.

## Built With

 React, Node.js, Express, PostgreSQL, and Bootstrap.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped us with the skills to make this application a reality.


