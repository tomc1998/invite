/**
 * Basically a module containing a queue. Ultra hacky way to allow the app to
 * stub server pushes. Add something to this array, and the poll() function stub
 * will pick up on it.
 */

var messageQueue = [];

var messageListeners = [];

/**
 * Attempts to flush the message queue and message all messageListeners. Will
 * not empty the list of there aren't enough messageListeners. Satisfied
 * messageListeners will be removed from the list.
 */
function flushMessageQueue() {
  while (messageQueue.length > 0 && messageListeners.length > 0) {
    let m = messageQueue.shift();
    let l = messageListeners.shift();
    l(m);
  }
}

/** A list of 'mutations' one can perform on the queue. */
var functions = {
  /** Returns null if queue is empty. FIFO Queue. */
  pop() {
    if (messageQueue.length === 0) { return null; }
    return messageQueue.shift();
  },

  /** Callback is called when messageQueue has available messages. A message is
   * popped and returned in the single parameter of callback. Callback has no
   * return value.
   * If messages are available, callback immediately.
   * Must call this again to register for another message - original callback
   * will be removed.
   */
  registerMessageAvailableCallback(callback) {
    let m = functions.pop();
    if (m) {
      callback(m);
    } else {
      messageListeners.push(callback);
    }
  },

  /**
   * Push a 'message_sent_confirm' message. This message is sent from the
   * server when a message you wrote has been delivered to everyone in the room.
   *
   * In reality, the server will return the ID of the temporary message to
   * confirm. Here, you provide this ID.
   */
  pushMessageSentConfirmation(roomID, messageID) {
    // Just fake the new message ID with a random number
    messageQueue.push({
      name: 'message_sent_confirm',
      room_id: roomID,
      message_id: messageID,
      new_message_id: Math.floor(Math.random() * 1000000000 + 1000000000),
      timestamp: new Date().getTime(),
    });
    flushMessageQueue();
  },
};

export default functions;
