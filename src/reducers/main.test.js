import main from './main.js';

describe('spec for Reducer', function() {
  const initialState = { count: 0 };
  it('DEFAULT', () => {
    expect(main(initialState, { type: 'DEFAULT' })).toEqual({ count: 0 });
  });
  it('INC', () => {
    expect(main(initialState, { type: 'INC' })).toEqual({ count: 1 });
  });
  it('DEC', () => {
    expect(main(initialState, { type: 'DEC' })).toEqual({ count: -1 });
  });
  it('PLUS2', () => {
    expect(main(initialState, { type: 'PLUS2' })).toEqual({ count: 2 });
  });
  it('PLUS3', () => {
    expect(main(initialState, { type: 'PLUS3' })).toEqual({ count: 3 });
  });
  const initialState2 = { count: 1 };
  it('INC', () => {
    expect(main(initialState2, { type: 'INC' })).toEqual({ count: 2 });
  });
  it('DEC', () => {
    expect(main(initialState2, { type: 'DEC' })).toEqual({ count: 0 });
  });
  it('PLUS2', () => {
    expect(main(initialState2, { type: 'PLUS2' })).toEqual({ count: 3 });
  });
  it('PLUS3', () => {
    expect(main(initialState2, { type: 'PLUS3' })).toEqual({ count: 4 });
  });
});
