describe('fibonacci', function(){
  it('returns zero when given zero', function(){
    expect(fibonacci(0)).toBe(0);
  });

  it('returns 13 when given 7', function(){
  	expect(fibonacci(7)).toBe(13);
  });

  it('returns the number in the fibonacci sequence, at the index it is passed', function(){
  	expect(fibonacci(40)).toBe(102334155);
  });

  it('returns zero if passed a negative number', function(){
  	expect(fibonacci(-3)).toBe(0);
  });

  it('returns one if passed one or two', function(){
  	expect(fibonacci(1)).toBe(1);
  	expect(fibonacci(2)).toBe(1);
  });

  it('returns undefined if given nothing', function(){
  	expect(fibonacci()).toBe(undefined);
  });

});

// Returns a sequence 0 1 1 2 3 5 8 13
// Function that given a position returns the fibonacci value at that position.