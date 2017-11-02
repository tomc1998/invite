/**
 * A temporary message. This just contains a client-assigned ID
 * and the message string. It's assumed that it was sent by this
 * client.
 */
class TempMessage {
  constructor(id, body, pictureURL) {
    this.id = id;
    this.body = body;
    this.pictureURL = pictureURL;
  }
}

export default TempMessage;

