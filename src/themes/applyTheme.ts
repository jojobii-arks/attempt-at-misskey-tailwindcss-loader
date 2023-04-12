import { Theme } from './types';
import { lightThemeCompiled, darkThemeCompiled } from './default';
import compile from './compile';

export function applyTheme(theme: Theme) {
  if (!document) throw new Error('document is not defined');

  // @ts-ignore
  const colorSchema = theme.base === 'dark' ? 'dark' : 'light';

  // Deep copy
  const _theme = { ...theme };

  if (_theme.base) {
    const base = [lightThemeCompiled, darkThemeCompiled].find(
      (x) => x.id === _theme.base
    );
    if (base) _theme.props = Object.assign({}, base.props, _theme.props);
  }

  const props = compile(_theme);

  for (const [k, v] of Object.entries(props)) {
    document.documentElement.style.setProperty(`--${k}`, v.toString());
  }
}
