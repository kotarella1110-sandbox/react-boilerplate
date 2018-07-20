import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';
import { addSerializer } from 'jest-snapshot';

addSerializer(styleSheetSerializer);

initStoryshots({
  suite: 'FileProperties',
  test: multiSnapshotWithOptions({}),
});
