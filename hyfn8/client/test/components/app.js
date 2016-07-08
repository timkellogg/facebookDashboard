import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('Component: App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders itself', () => {
    expect(component).to.exist;
  });

  it('renders spreadsheet component', () => {
    expect(component.find('.spreadsheet')).to.exist;
  });
});
