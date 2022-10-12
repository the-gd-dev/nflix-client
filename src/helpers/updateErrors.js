export default function updateErrors(errors, err, key) {
  let updatedErrors = { ...errors };
  if (err) {
    updatedErrors[key] = err;
  } else {
    if (updatedErrors[key]) {
      delete updatedErrors[key];
    }
  }
  return updatedErrors;
}
