import { ApiService } from './api.service';

describe('ApiService', () => {
  it('should return the object', (done) => {
    const service = new ApiService();
    service.getData().subscribe(data => {
      expect(data).toStrictEqual({
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
      });
      done();
    });
  })
})
