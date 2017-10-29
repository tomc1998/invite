/** Stub for get_users. Gets a list of user data based off of a list of user
 * IDs. */
function getUsers(idList) {
  let userList = [];
  for (let id of idList) {
    // Kinda 'messy', this is creating an anon. function which switches on the
    // given ID and returns the user data, then calling it and pushing it into
    // userList.
    userList.push((id => {
      switch (id) {
        case 1: return {
          id: 1,
          first_name: 'Tom',
          last_name: 'Cheng',
          picture_url: 'https://github.com/identicons/tomc1998.png',
        };
        case 2: return {
          id: 2,
          first_name: 'Tom',
          last_name: 'Cheng',
          picture_url: 'https://github.com/identicons/tomc1998.png',
        };
        case 3: return {
          id: 3,
          first_name: 'Tom',
          last_name: 'Cheng',
          picture_url: 'https://github.com/identicons/tomc1998.png',
        };
        case 4: return {
          id: 4,
          first_name: 'Tom',
          last_name: 'Cheng',
          picture_url: 'https://github.com/identicons/tomc1998.png',
        };
        case 5: return {
          id: 5,
          first_name: 'Tom',
          last_name: 'Cheng',
          picture_url: 'https://github.com/identicons/tomc1998.png',
        };
      }
    })(id));
  }
  return Promise.resolve(userList);
}

export default getUsers;
