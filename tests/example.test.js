const sum = require("../index.js");

describe('Unit testlerim', () => {

  it('toplama testi', done => {
    expect(sum(1,2)).toBe(3);
    done();
  });

  it('yanlış toplam testi', done => {
    expect(sum(10,20)).toBe(30);
    done();
  });

  it('Bazı koşullar', done => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
    done();
  });

});
