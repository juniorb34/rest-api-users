const userSchema = require('../src/schemas/userSchema');
var User = require('../models/User');

const validationMiddleware = (request, response, next) => {
  const { error } = userSchema.validate(request.body);
  const valid = error == null;

  if (valid) {
    const { email, password, username } = request.body;

    var emailExists = User.findEmail(email);

    if (emailExists) {
      response.status(406);
      response.json({ error: 'E-mail já está cadastrado!' });
      return;
    }
    User.new(email, password, username);
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');

    console.log('error', message);
    response.status(422).json({ error: message });
  }
};
module.exports = validationMiddleware;
