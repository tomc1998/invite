/** Function stub for a get_room_messages request. returns a promise containing all the
 * dummy messages for a given room ID. */
function getRoomMessages(roomID) {
  // Mapping of room IDs to message lists
  let messages = {
    0: [
      {
        id: 0,
        body: 'Hello, this is a message',
        picture_url: null,
        likes: 34,
        timestamp: 100,
      },
      {
        id: 1,
        body: 'This is another message. Ready? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        picture_url: null,
        likes: 12,
        timestamp: 200,
      },
      {
        id: 2,
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        picture_url: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/22491788_10155146382443230_6401243716705296297_n.jpg?oh=e724602b247647c87966f237c4a2f656&oe=5A8109DF',
        likes: 1231,
        timestamp: 300,
      }],

    1: [{
      id: 3,
      body: 'This is just some small text. Does the room look empty?',
      picture_url: null,
      likes: 4,
      timestamp: 400,
    }],

    // This room has no messages (To test what no messages looks like)
    2: [
    ],
  };

  return Promise.resolve(messages[roomID]);
}

export default getRoomMessages;

