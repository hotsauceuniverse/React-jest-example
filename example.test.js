describe('expect test', () => {
  it('37 to equal 37', () => {
    expect(37).toBe(37);
  });
  it('{age: 28} to equal {age: 28}', () => {
    expect({age: 28}).toEqual({age: 28});
  });
  it('.toHaveLength', () => {
    expect('hello').toHaveLength(5);
  });
  it('.toHaveProperty', () => {
    expect({name: 'seyoung'}).toHaveProperty('name');
    expect({name: 'seyoung'}).toHaveProperty('name', 'seyoung');
  });
  it('.toBeDefined', () => {
    expect({name: 'seyoung'}.name).toBeDefined();
  });
  it('.toBeFalsy', () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it('.toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(9);
  });
  it('.toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(9);
  });
  it('.toBeInstanceOf', () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
