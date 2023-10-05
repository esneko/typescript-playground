class MyError extends Error {
  constructor(message: string, public code: number) {
    super(message)
  }
}

function assertMyError(e: unknown): asserts e is MyError {
  if (!(e instanceof MyError)) {
    throw e
  }
}

try {
  // The randomness is just so that TypeScript won't know from inference
  throw new (Math.random() < 0 ? Error : MyError)("oops", 42)
} catch (e: unknown) {
  assertMyError(e)
  console.log(e.code)
}
