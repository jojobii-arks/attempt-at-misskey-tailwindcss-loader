export type Theme = {
  id: string;
  name: string;
  author: string;
  desc?: string;
  base?: 'dark' | 'light';
  props: Record<string, string>;
};
