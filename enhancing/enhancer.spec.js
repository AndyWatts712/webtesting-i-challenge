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
        it('if enhancement < 15, durability decreased by 5', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 10
            }
            expect(enhancer.fail(item).durability).toBe(45)
        })
        it('if enhancement > 14, durability decreased by 10', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 16
            }
            expect(enhancer.fail(item).durability).toBe(40)
        })
        it('if enhancement is greater than 16, enhancement -1', function() {
            const item = {
                name: "Whatever",
                durability: 50,
                enhancement: 17
            }
            expect(enhancer.fail(item).enhancement).toBe(16)
            expect(enhancer.fail(item).durability).toBe(40)
        })
    })
    
})
