import { applyTheme } from './applyTheme';
import { expect, test } from 'vitest';
import { lightThemeSource } from './default';

test('applyTheme', () => {
  expect(applyTheme).toBeDefined();
  expect(() => applyTheme(lightThemeSource)).toThrowError(
    'document is not defined'
  );
});
