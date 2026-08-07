export function maskSpName(name: string): string {
  if (!name) return name;
  const keep = name.length / 2 <= 10 ? 5 : 10;
  return name.slice(-keep);
}
