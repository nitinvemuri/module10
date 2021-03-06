const Potion = require('../lib/Potion');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
    
});