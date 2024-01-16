import merge from 'lodash.merge';
import defaultTheme from './__appset/universal/theme';

export default function Init(userTheme) {
  const mergeTheme = merge(defaultTheme, userTheme);

  return mergeTheme;
}
