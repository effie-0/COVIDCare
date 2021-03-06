# COVIDCare

## Operational Instructions

1. Install the packages

```bash
$ npm install
```

2. Install MongoDB on your local machine
3. Start the application on the 3000 port

```bash
$ npm start
```

4. Open http://127.0.0.1:3000

## Technology Stack

- Backend: Express, with Babel to transpile the ES6 code
- Database (not used in Product Increment 1): MongoDB
- Frontend:
  - Pug as the template engine
  - Bulma (with Font Awesome icons), Bootstrap as frontend libraries
  - JQeury as frontend js library

## Style Guide

- [Style Guide](https://drive.google.com/file/d/1rmTzc3bJm9RRjVsINbyPQP6exCSvtLHA/view?usp=sharing)

## Limitations

### Health Status

- The check on the completeness of the form will be a part of Product Increment 2.
- Hints for today's health status will be a part of Product Increment 2.
- The health record submitted by the form will not be recorded in the backend.
- The previous health records are hard-coded.

### Emotion

- Is able to input different date and time, but the history has only 12/7 available
- Can only register "Awesome" right now
- Unable to edit past records

### Meditation

- Meditation Physical posture video animation will be a part of Product Increment 2.
-	Different type of smoothing music should be a part of Product Increment 2, currently we have limited type of music.
-	Greeting patient with a beautiful positive quote will be a part of Product Increment 2.


### Multi-player Game

- In multi player games, list of users and games are hard-coded and session are not implemented for users as well.

### COVID Story

- User stories data are hard-coded.
- User comments are hard-coded and will not be recorded in the backend.
- Sort button based on users' preferences will be a part of Product Increment 2.
