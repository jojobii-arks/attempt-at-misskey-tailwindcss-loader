import { PluginCreator } from 'tailwindcss/types/config';
declare const tailwindMisskeyTheme: {
    handler: PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config> | undefined;
};
export default tailwindMisskeyTheme;
export * as parseAndApplyTheme from './parseAndApplyTheme';
