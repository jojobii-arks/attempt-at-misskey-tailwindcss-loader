import tinycolor from 'tinycolor2';
import { Theme } from './types';

export default function compile(theme: Theme): Record<string, string> {
  function getColor(val: string): tinycolor.Instance {
    // ref (prop)
    if (val[0] === '@') {
      return getColor(theme.props[val.substr(1)]);
    }

    // ref (const)
    else if (val[0] === '$') {
      return getColor(theme.props[val]);
    }

    // func
    else if (val[0] === ':') {
      const parts = val.split('<');
      const func = parts.shift()?.substring(1);
      const arg = parseFloat(parts.shift() ?? '');
      const color = getColor(parts.join('<'));

      switch (func) {
        case 'darken':
          return color.darken(arg);
        case 'lighten':
          return color.lighten(arg);
        case 'alpha':
          return color.setAlpha(arg);
        case 'hue':
          return color.spin(arg);
        case 'saturate':
          return color.saturate(arg);
      }
    }

    // other case
    return tinycolor(val);
  }

  const props: Record<string, string> = {};

  for (const [k, v] of Object.entries(theme.props)) {
    if (k.startsWith('$')) continue; // ignore const
    if (k === 'panelBorder') continue; // ignore panelBorder
    props[k] = v.startsWith('"')
      ? v.replace(/^"\s*/, '')
      : genValue(getColor(v));
  }

  return props;
}

function genValue(c: tinycolor.Instance): string {
  return c.toRgbString();
}
