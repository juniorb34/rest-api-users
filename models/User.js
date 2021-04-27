var knex = require('../database/connection');
var bcrypt = require('bcrypt');

class User {
  async new(email, password, username) {
    try {
      await knex.insert({ email, password, username, role: 0 }).table('users');
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new User();
