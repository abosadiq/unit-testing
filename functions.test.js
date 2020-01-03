const functions = require("./functions");

test("Adds 4 + 6 to be 10", () => {
  expect(functions.add(4, 6)).toBe(10);
});

test("Adds 4 + 6 to Not equal 12", () => {
  expect(functions.add(4, 6)).not.toBe(12);
});

//toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
//toBeTruthy
test("Should be a number", () => {
  expect(functions.checkValue(1)).toBeTruthy();
});

//toStrictEqual
test("USER Should be Wafi Mohamed Object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Wafi",
    lastName: "Mohamed"
  });
});
// Less than or greater than
test("Should be under 1000", () => {
  expect(functions.LessThan(400, 500)).toBeLessThan(1000);
});
test("Should be under 1000", () => {
  expect(functions.LessThan(400, 500)).toBeGreaterThan(800);
});

// Regex

test("There is no I in team ", () => {
  expect(functions.regEx("team")).not.toMatch(/I/i);
});

// to check if Arrays contain a name
test("ali should be in username", () => {
  expect(functions.arr()).toContain("wafi");
});

// Working with async data
test("User fetched name should be leanne Graham ", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async await
test("User fetched name should be leanne Graham ", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
