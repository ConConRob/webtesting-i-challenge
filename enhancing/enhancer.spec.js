const enhancer = require('./enhancer.js');
// test away!

const weapon = {
  name: "Flame Blade",
  durability: 70,
  enhancement: 10
}

describe("Weapon enhancers", () => {
  describe("repair a weapon", () => {
    it("weapon is repaired 100%", () => {
      expect(enhancer.repair(weapon)).toEqual({ ...weapon, durability: 100 });
    })
  })

  describe("Succeed at enhancing weapon", () => {
    it("weapon enhanced when bellow 20", () => {
      expect(enhancer.succeed(weapon)).toEqual({ ...weapon, enhancement: weapon.enhancement + 1 });
    })
    it("weapon already at max enhancement",() => {
      expect(enhancer.succeed({ ...weapon, enhancement: 20 })).toEqual({ ...weapon, enhancement: 20 })
    })
  })
})