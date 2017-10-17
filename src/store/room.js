
class Room {
  constructor(id, name, users) {
    this.id = id;

    this.name = name;

    /** A list of user IDs in this room */
    this.users = users;
    /** A list of messages, ordered from most recent to oldest, currently
     * viewable in this room. */
    this.messages = [];
  }
}

export default Room;
