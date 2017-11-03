/**
 * This is a module which handles 'notifications' pushed from the server, via
 * AJAX long polling.
 */

import poll from './stub';

/** A function which polls the server and recursively calls itself every time a
 * response is received. Will be an infinite loop. This may mutate state. */
function beginLongPoll(store) {
  console.log('Poll');
  poll().then(m => {
    if (m.name === 'message_sent_confirm') {
      let roomID = m.room_id;
      let messageID = m.message_id;
      let newMessageID = m.message_id;
      let timestamp = m.message_id;
      store.commit('confirmMessage', [roomID, messageID, newMessageID, timestamp]);
    }
    return null;
  }).then(() => beginLongPoll(store));
}

export default beginLongPoll;
