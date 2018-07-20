import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://github.com/storybooks/storybook/issues/1011
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

configure({ adapter: new Adapter() });
