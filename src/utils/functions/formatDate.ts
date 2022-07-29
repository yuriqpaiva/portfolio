export function formatDate(date: string | undefined | null): string | null {
  if (date) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }
  return null;
}
