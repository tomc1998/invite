class Message {
  constructor(id, body, pictureURL, likes, timestamp) {
    this.id = id;
    this.body = body;
    this.pictureURL = pictureURL;
    this.likes = likes;
    this.timestamp = timestamp;
  }
}

export default Message;
