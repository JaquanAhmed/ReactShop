const INITIAL_STATE = {
  sections: [
    {
      title: 'toys',
      imageUrl: 'https://i.ibb.co/wrZLnJC/toys.jpg',
      id: 1,
      linkUrl: 'shop/toys'
    },
    {
      title: 'books',
      imageUrl: 'https://i.ibb.co/XpY8yd7/books.jpg',
      id: 2,
      linkUrl: 'shop/books'
    },
    {
      title: 'games',
      imageUrl: 'https://i.ibb.co/LZ1Wt93/games.jpg',
      id: 3,
      linkUrl: 'shop/games'
    },
    {
      title: 'arts',
      imageUrl: 'https://i.ibb.co/ncd5BSb/arts.jpg',
      id: 4,
      linkUrl: 'shop/arts'
    },
    {
      title: 'candy',
      imageUrl: 'https://i.ibb.co/wyRdSny/candy.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/candy'
    },
    {
      title: 'chocolate',
      imageUrl: 'https://i.ibb.co/Chy25KD/chocolate.jpg',
      size: 'large',
      id: 6,
      linkUrl: 'shop/chocolate'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
