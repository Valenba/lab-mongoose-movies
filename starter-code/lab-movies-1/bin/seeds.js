require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
    {
        name: 'Blanca Suarez',
        occupation: 'actress',
        catchPhrase: 'Well done is better than well said.'
    },
    {
        name: 'Leo Dicrapio',
        occupation: 'actor',
        catchPhrase: 'Where there is love there is life.'
    },
    {
        name: 'Javier Bardem',
        occupation: 'actor',
        catchPhrase: 'Once you choose hope, anything’s possible.'
    }
]
const movies = [
    {
        title: 'Torrente',
        genre: 'Comedy',
        plot:
            'Try it again. Fail again. Fail better.'
    },
    {
        title: 'Forreste Gump',
        genre: 'Drama',
        plot:
            "Try to be a rainbow in someone's cloud."
    },
    {
        title: 'Titanic',
        genre: "Drama",
        plot:
            'Honesty is the first chapter in the book of wisdom.'
    }
];

const dbName = process.env.DBURL;
mongoose.connect(dbName).then(() => {
    Celebrity.collection.drop();
    Movie.collection.drop();
    Promise.all([Celebrity.create(celebrities), Movie.create(movies)]).then(e => {
        console.log(`Created ${celebrities.length} celebrities`);
        console.log(`Created ${movies.length} movies`);
        mongoose.disconnect();
    });
});

