const { statement } = require("../index.js");

describe("statement", () => {
  it("should be able to rent regular movies", () => {
    const movies = {
      F001: { title: "Regular movie", code: "regular" },
    };

    const customer = {
      name: "Jhon Doe",
      rentals: [
        { movieID: "F001", days: 2 },
        { movieID: "F001", days: 5 },
      ],
    };
    expect(statement(customer, movies)).toEqual(
      "Rental Record for Jhon Doe\n\tRegular movie\t2\n\tRegular movie\t6.5\nAmount owed is 8.5\nYou earned 2 frequent renter points\n"
    );
  });

  it("should be able to rent childrens movies", () => {
    const movies = {
      F001: { title: "Childrens movie", code: "childrens" },
    };

    const customer = {
      name: "Jhon Doe",
      rentals: [
        { movieID: "F001", days: 2 },
        { movieID: "F001", days: 5 },
      ],
    };
    expect(statement(customer, movies)).toEqual(
      "Rental Record for Jhon Doe\n\tChildrens movie\t1.5\n\tChildrens movie\t4.5\nAmount owed is 6\nYou earned 2 frequent renter points\n"
    );
  });

  it("should be able to rent new movies", () => {
    const movies = {
      F001: { title: "New movie", code: "new" },
    };

    const customer = {
      name: "Jhon Doe",
      rentals: [
        { movieID: "F001", days: 2 },
        { movieID: "F001", days: 5 },
      ],
    };
    expect(statement(customer, movies)).toEqual(
      "Rental Record for Jhon Doe\n\tNew movie\t6\n\tNew movie\t15\nAmount owed is 21\nYou earned 3 frequent renter points\n"
    );
  });
});
