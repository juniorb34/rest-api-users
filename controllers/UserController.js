

class UserController {
  async create(request, response) {
    response
      .status(201)
      .json(request.body)
      
  }
}

module.exports = new UserController();
