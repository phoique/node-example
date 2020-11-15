const Helper = require("./api.helper");

const helper = new Helper();

describe('Api testlerim', () => {

  var token = null;

  beforeAll(async done => {
    token = await helper.getToken();
    expect(token).toBeTruthy();
    done();
  });

  it('Anasayfa get isteği', async done => {
    const res = await helper.server.get("/");
    expect(res.status).toBe(200);
    expect(res.body.status).toBeTruthy();
    done();
  });

  describe('Anasayfa post isteği isteği', () => {

    it('Anasayfa post isteği', async done => {
      const res = await helper.server.post("/").send({message: "deneme"});
      expect(res.status).toBe(200);
      expect(res.body.status).toBeTruthy();
      expect(res.body.result).toBe("deneme");
      done();
    });


    it('Anasayfa post isteği null', async done => {
      const res = await helper.server.post("/").send({message: ""});
      expect(res.status).toBe(404);
      expect(res.body.status).toBeTruthy();
      expect(res.body.result).toBeUndefined();
      done();
    });


  });

  describe('Private route erişim', () => {

    it("token boş iken 401", async done => {
      const res = await helper.server.post("/private");
      expect(res.status).toBe(401);
      expect(res.body.status).toBeFalsy();
      done();
    });

    it("token dolu iken", async done => {
      const res = await helper.server.post("/private").set("Authorization", token);
      expect(res.status).toBe(200);
      expect(res.body.status).toBeTruthy();
      done();
    });


    it("token yanlış iken", async done => {
      const res = await helper.server.post("/private").set("Authorization", token+1);
      expect(res.status).toBe(401);
      expect(res.body.status).toBeFalsy();
      done();
    });
  });
});