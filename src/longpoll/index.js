/**
 * This is a module which handles 'notifications' pushed from the server, via
 * AJAX long polling.
 */

import poll from './stub';

/** A function which polls the server and recursively calls itself every time a
 * response is received. Will be an infinite loop. This may mutate state. */
function beginLongPoll() {
  poll().then(m => {
    console.log(m);
  }).then(beginLongPoll);
}

export default beginLongPoll;
