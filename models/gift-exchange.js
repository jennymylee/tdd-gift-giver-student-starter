const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static pairs(names) {
    if (!names) {
      throw new BadRequestError("names is undefined");
    }
    if (names.length % 2 == 1) {
      throw new BadRequestError("the number of names cannot be odd");
    }
    let temp = names.slice();
    let pairings = [];
    while (temp.length > 0) {
      const firstInd = Math.floor(Math.random() * temp.length);

      const firstName = temp.splice(firstInd, 1);

      const secondInd = Math.floor(Math.random() * temp.length);

      const secondName = temp.splice(secondInd, 1);

      pairings.push([firstName[0], secondName[0]]);
      console.log("pairings", pairings);
    }
    return pairings;
  }

  static traditional(names) {
    if (!names) {
      throw new BadRequestError("names is undefined");
    }
    if (names.length % 2 == 1) {
      throw new BadRequestError("the number of names cannot be odd");
    }
    let res = [];
    let temp = names.slice();
    temp.sort(() => 0.5 - Math.random());

    let firstName = temp[temp.length - 1];
    let name2 = "";

    while (temp.length > 1) {
      let name1 = temp.pop();
      temp.sort(() => 0.5 - Math.random());
      name2 = temp[temp.length - 1];
      res.push(`${name1} is giving a gift to ${name2}`);

      name1 = name2;
    }
    res.push(`${name2} is giving a gift to ${firstName}`);
    return res;
  }
}

module.exports = GiftExchange;
