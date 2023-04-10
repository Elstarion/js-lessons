describe('TESTS', function() {   
    it('getResult is invoked from all functions', function() {
        spyOn(window, 'getResult');
        sum();
        sub();
        mul();
        div();
        calculate();
        expect(getResult).toHaveBeenCalled();
    });
 

    it('should return minimum number', function() {
       const array = [false,'ecma',33,-1,4];
       expect(getMinNumber(array)).toEqual(-1);
    });

    it('should return maximum number', function() {
        const array = [false,'ecma',33,-1,4];
        expect(getMaxNumber(array)).toEqual(33);
    });

    it('should return correct sum', function() {
        const array = [false,'ecma',33,-1,4];
        expect(getSum(array)).toEqual(36);
    });

    it('should increment', function() {
        const a = new CancelableAccumulator(7);
        spyOn(a, 'increment').andCallThrough();
        expect(a.increment()).toEqual(8);
    });

    it('should decrement', function() {
        const a = new CancelableAccumulator(4);
        spyOn(a, 'decrement').andCallThrough();
        expect(a.decrement()).toEqual(3);
    });

    it('should clear', function() {
        const a = new CancelableAccumulator(10);
        spyOn(a, 'increment', 'decrement', 'clear').andCallThrough();
        a.increment();
        a.increment();
        a.decrement();
        expect(a.clear()).toEqual(10);
    })
})