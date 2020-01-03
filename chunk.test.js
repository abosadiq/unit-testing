const chunkArray = require("./chunk");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("chunkArray of 16 values with a length of 4 ", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const len = 4;
  const chunkedArray = chunkArray(nums, len);

  expect(chunkedArray).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]);
});
