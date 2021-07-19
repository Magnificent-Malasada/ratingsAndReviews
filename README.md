# ratingsAndReviews

ratingsAndReviews is a SQL database managing data for the ratings and reviews section of an existing product page.

## Table of Contents

- [Dependencies](#Dependencies)
- [Installation](#Installation)
- [Usage](#Usage)
- [Author](#Author)

## Dependencies

- Node.JS
- Express.JS
- MySQL

## Installation

To set up the developer environment run.

```bash
npm install
```

## Usage

To start the server.

```bash
npm start
```

To set up MySQL database.

```bash
npm run database_setup
```

To list reviews from the database

```
GET /reviews/product_id=:id
```

To report a review.

```
PUT /reviews/:review_id/report
```

To mark a review as helpful.

```
PATCH /reviews/:review_id/helpful
```

To add a new review.

```
POST /reviews/product_id=:id
```

## Author

Emma Helser

