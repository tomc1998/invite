class Message {
  constructor(id, body, pictureURL, likes, timestamp, isOurs) {
    this.id = id;
    this.body = body;
    this.pictureURL = pictureURL;
    this.likes = likes;
    this.timestamp = timestamp;
    /** True if this message was posted by us, false otherwise */
    this.isOurs = isOurs;
  }
}

export default Message;
