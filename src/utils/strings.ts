/**
 * Emits a warning to the console
 */
export function warn(message: string) {
  console.warn(`[vee-validate] ${message}`);
}

/**
 * Replaces placeholder values in a string with their actual values
 */
export function interpolate(template: string, values: Record<string, any>): string {
  const rx = /{([^}]+)}/g;
  return template.replace(rx, (_, p): string => {
    return p in values ? values[p] : `{${p}}`;
  });
}
