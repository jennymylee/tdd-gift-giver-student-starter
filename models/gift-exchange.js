const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static pairs(names) {
    let temp = names.slice();
    if (!names) {
      throw new BadRequestError("names is undefined");
    }
    if (temp.length % 2 == 1) {
      throw new BadRequestError("the number of names cannot be odd");
    }
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
    let res = [];
    let temp = names.slice();
    if (!names) {
      throw new BadRequestError("names is undefined");
    }
    if (temp.length % 2 == 1) {
      throw new BadRequestError("the number of names cannot be odd");
    }
    temp.sort(() => 0.5 - Math.random());

    let currentName = temp.pop();

    for (let i = 0; i < names.length; i++) {
      let nextName = temp.pop();
      res.push(`${currentName} is giving a gift to ${nextName}`);
      currentName = nextName;
    }
    return res;

    // const firstInd = Math.floor(Math.random() * temp.length);
    // // let currentName = temp[firstInd];
    // let arr = temp.splice(firstInd, 1);
    // let currentName = arr[0];

    // while (temp.length > 0) {
    //   let nextInd = Math.floor(Math.random() * temp.length);
    //   // let nextName = temp[nextInd];
    //   arr = temp.splice(nextInd, 1);
    //   let nextName = arr[0];
    //   res.push(`${currentName} is giving a gift to ${nextName}`);

    //   currentName = nextName;
    // }

    return res;
  }
}

module.exports = GiftExchange;
