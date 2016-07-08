import { expect } from '../test_helper';
import { FETCH_DATA } from '../../src/actions/types';

describe('Action Types', () => {
  describe('FETCH_DATA', () => {
    it('has proper wording', () => {
      expect(FETCH_DATA).to.eql('FETCH_DATA');
    });
  });
});