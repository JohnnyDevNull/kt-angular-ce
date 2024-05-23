import { flattenObject } from './flatten-object.function';

describe('flattenObject', () => {
  const objectToConvert = {
    a: true,
    b: 44,
    c: 'Hello, Klicktipp!',
    d: {
      e: 'I am a nested object with strings!',
      f: {
        g: {
          h: {
            i: 'So am I!',
            j: false,
            k: 123,
            l: 'And I am last!'
          }
        }
      }
    }
  };

  it ('should return an flatted object', () => {
    expect(flattenObject(objectToConvert)).toEqual({
      a: true,
      b: 44,
      c: 'Hello, Klicktipp!',
      'd_e': 'I am a nested object with strings!',
      'd_f_g_h_i': 'So am I!',
      'd_f_g_h_j': false,
      'd_f_g_h_k': 123,
      'd_f_g_h_l': 'And I am last!',
    });
  });

  it ('should return an flatted object "." separator', () => {
    expect(flattenObject(objectToConvert, '.')).toEqual({
      a: true,
      b: 44,
      c: 'Hello, Klicktipp!',
      'd.e': 'I am a nested object with strings!',
      'd.f.g.h.i': 'So am I!',
      'd.f.g.h.j': false,
      'd.f.g.h.k': 123,
      'd.f.g.h.l': 'And I am last!',
    });
  });
});

