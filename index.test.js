const f = arr => {
  let result = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      result = i
      break
    }
  }
  return result
};

describe("sorting", () => {
  it("(╯°□°）╯︵ ┻━┻", () => {
    expect(f([1, 2, 4, 3])).toEqual(2);
    expect(f([4, 2, 1, 3])).toEqual(0);
    expect(f([1, 2, 3, 4])).toEqual(4);
  });
});
