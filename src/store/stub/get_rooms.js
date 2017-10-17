/** Function stub for a get_rooms request. returns a promise containing all the
* dummy rooms. */
function getRooms() {
  return Promise.resolve([
    {
      id: 0,
      name: 'Room 1',
      users: [1, 3, 5],
    },
    {
      id: 1,
      name: 'Room 2',
      users: [2, 4],
    },
    {
      id: 2,
      name: 'Room 3',
      users: [1, 2, 3],
    },
  ]);
}

export default getRooms;
