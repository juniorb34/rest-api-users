var knex = require('../database/connection');
var bcrypt = require('bcrypt');

class User {
  
  async new(email, password, username) {
    try {
      var hash = await bcrypt.hash(password, 10);
      await knex
        .insert({ email, password: hash, username, role: 0 })
        .table('users');
    } catch (err) {
      console.error(err);
    }
  }

  async findEmail(email) {
    try {
      var result = await knex.select('*').from('users').where({ email: email });

      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

module.exports = new User();
