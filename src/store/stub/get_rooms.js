/** Function stub for a get_rooms request. returns a promise containing all the
* dummy rooms. */
function getRooms() {
  return Promise.resolve([
    {
      id: 0,
      name: 'Room 1',
      users: [1, 3, 5],
      pictureURL: 'https://github.com/identicons/tomc1998.png',
    },
    {
      id: 1,
      name: 'Room 2',
      users: [2, 4],
      pictureURL: 'https://github.com/identicons/tomc1998.png',
    },
    {
      id: 2,
      name: 'Room 3',
      users: [1, 2, 3],
      pictureURL: 'https://github.com/identicons/tomc1998.png',
    },
  ]);
}

export default getRooms;
