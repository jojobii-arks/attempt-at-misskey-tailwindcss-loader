import JSON5 from 'json5';
import { applyTheme } from './themes/applyTheme';

export default function parseAndApplyTheme(rawTheme: string): void {
  if (!document.documentElement)
    throw new Error('This should be called in browser environment');
  const theme = JSON5.parse(rawTheme);
  applyTheme(theme);
}
