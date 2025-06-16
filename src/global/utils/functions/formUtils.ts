export function formatCpf(value: string) {
  if (!value) return '';

  const cleanedValue = value.replace(/\D/g, '');

  let formattedValue = cleanedValue;
  if (formattedValue.length > 3) {
    formattedValue = formattedValue.slice(0, 3) + '.' + formattedValue.slice(3);
  }
  if (formattedValue.length > 7) {
    formattedValue = formattedValue.slice(0, 7) + '.' + formattedValue.slice(7);
  }
  if (formattedValue.length > 11) {
    formattedValue =
      formattedValue.slice(0, 11) + '-' + formattedValue.slice(11);
  }
  console.log(value, formattedValue, 'valor');

  return formattedValue.slice(0, 14);
}
