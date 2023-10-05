export function assertValueExists<T>(
  condition: T,
  message,
): asserts condition is Exclude<T, null | undefined> {
  if (condition === null || condition === undefined) {
    throw new Error(message)
  }
}
