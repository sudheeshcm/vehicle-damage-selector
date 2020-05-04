export function toTitleCase(text?: string): string {
  if (!text) {
    return "";
  }

  return text
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/^[a-z|A-Z]/g, (char: string) => char.toUpperCase());
}

export function toReadableString(text?: string): string {
  if (!text) {
    return "";
  }

  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/^[a-z|A-Z]/g, (char: string) => char.toUpperCase());
}
