
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('albums').del(),

    // Inserts seed entries
    knex('albums').insert(
      { id: 1,
        artist: 'Kendrick Lamar',
        name: 'To Pimp A Butterfly',
        genre: 'Hip Hop',
        stars: 5,
        explicit: true
    }),
    knex('albums').insert(
      { id: 2,
        artist: 'My Chemical Romance',
        name: 'Welcome to the Black Parade',
        genre: 'Punk Rock',
        stars: 4,
        explicit: true
    }),
    knex('albums').insert(
      { id: 3,
        artist: '30 Seconds to Mars',
        name: 'A Beautiful Lie',
        genre: 'Punk Parade',
        stars: 5,
        explicit: true
    })

  );
};
