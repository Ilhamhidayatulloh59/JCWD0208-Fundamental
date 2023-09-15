const { sum } = require("./sum.js")

test("Testing sum function", () => {
    expect(sum(10, 5)).toBe(15)
    expect(sum(10, 20)).toBe(30)
})
