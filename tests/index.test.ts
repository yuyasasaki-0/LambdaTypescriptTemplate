import { handler } from '../src'

test("sample test", () => {
  const input = {
    sample: "input"
  }
  expect(handler(input)).toBe(JSON.stringify(input, null, 2))
})
