export function maskSpName(name: string): string {
  if (!name) return name;
  const keep = name.length / 2 <= 10 ? 5 : 10;
  if (name.length <= keep) return name;
  return '...' + name.slice(-keep);
}
