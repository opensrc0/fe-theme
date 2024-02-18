import merge from 'lodash.merge';
import defaultTheme from './__appset/theme';

export default function init(userTheme) {
  const mergeTheme = merge(defaultTheme, userTheme);

  return mergeTheme;
}
