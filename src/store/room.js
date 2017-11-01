
class Room {
  constructor(id, name, users, pictureURL) {
    this.id = id;

    this.name = name;

    /** A list of user IDs in this room */
    this.users = users;

    /** A list of messages, ordered from most recent to oldest,
     * currently viewable in this room.
     */
    this.messages = [];

    /**
     * A list of temporary messages (just strings, not Message objects). These
     * are messages which you have typed in the chat and sent, but haven't yet
     * been confirmed by the server.
     *
     * Once confirmed, messages in this list will be removed.
     *
     * All messages in here are sent by the current client.
     */
    this.tempMessages = [];

    /** This room's room icon */
    this.pictureURL = pictureURL;
  }
}

export default Room;
