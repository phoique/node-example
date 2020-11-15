const supertest = require("supertest");
const server = require("../api");


class Helper {

  constructor() {
    this.server = supertest(server);
  }

  getToken = async () => {
    const response = await this.server.post("/token");

    if(response.body.status && response.body.result) {
      return response.body.result;
    }
    else {
      return undefined;
    }

  }

}

module.exports = Helper;