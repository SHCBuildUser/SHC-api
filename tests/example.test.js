const { sayHello, sayGoodbye } = require('../src/example')

describe('say hello', () => {
    it('should say hello to Siouxers', () => {
        expect(sayHello()).toBe('Hello Siouxers');
    });
});

describe('say goodbye', () => {
    it('should say goodbye to Siouxers', () => {
        expect(sayGoodbye()).toBe('Bye bye Siouxer');
    });
});

describe('addition', () => {
    describe('positive numbers', () => {
      it('should add up', () => {
        expect(1 + 2).toBe(3);
      });
    });
  });
