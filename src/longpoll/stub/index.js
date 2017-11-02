/**
 * A module which stubs the longpolling connection.
 */

import state from './state';


/**
 * 'poll' the 'server'. Returns a promise which either resolves with a server
 * response. If the connection times out, this method will simply re-request.
 *
 * Of course, since this is a stub, it won't time out.
 *
 * Calling this multiple times will NOT result in duplicate responses -
 * responses will be shared between 'instances' of the poll function.
 */
function poll() {
  return new Promise((resolve, reject) => {
    state.registerMessageAvailableCallback(function(m) {
      resolve(m);
    });
  });
}

export default poll;
