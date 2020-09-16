const enhancer = require('./enhancer.js');
// test away!
describe('enhancer', () => {
    describe('repair(item)', () => {
        it('should return an item object', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 1
            }
            expect(typeof enhancer.repair(item)).toBe(typeof item)
        })
        it('durability should be 100', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 1
            }
            expect(enhancer.repair(item)).toEqual({name: "Whatever",
        durability: 100, enhancement: 1})
        })
    })
    describe('success(item)', () => {
        it('should increase enhancement by 1, unless enhancement is 20', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 1
            }
            expect(enhancer.success(item).enhancement).toBe(2)
        })
        it('should increase enhancement by 1, unless enhancement is 20', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 20
            }
            expect(enhancer.success(item).enhancement).toBe(20)
        })
        it('should not change durability', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 20
            }
            expect(enhancer.success(item).durability).toBe(50)
        })
    })
    describe('fail(item)', () => {
        
    })
})
