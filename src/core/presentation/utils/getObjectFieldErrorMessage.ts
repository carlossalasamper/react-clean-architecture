export default function getObjectFieldErrorMessage(
  fieldError: object | undefined
): string | undefined {
  const message = fieldError && JSON.stringify(fieldError, null, 2);

  return message;
}
