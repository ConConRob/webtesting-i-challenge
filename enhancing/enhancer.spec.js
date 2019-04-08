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
    it("weapon already at max enhancement", () => {
      expect(enhancer.succeed({ ...weapon, enhancement: 20 })).toEqual({ ...weapon, enhancement: 20 })
    })
  })

  describe("Failed at enhancing weapon", () => {
    it("weapon failed at low enhancement", () => {
      expect(enhancer.fail(weapon)).toEqual({ ...weapon, durability: weapon.durability - 5 })
    })
    it("weapon failed at mid enhancement", () => {
      expect(enhancer.fail({ ...weapon, enhancement: 16 })).toEqual({ ...weapon, enhancement: 16, durability: weapon.durability - 10 })
    })
    it("Weapon failed at high enhancement", () => {
      expect(enhancer.fail({ ...weapon, enhancement: 19 })).toEqual({ ...weapon, enhancement: 18, durability: weapon.durability - 10 })
    })
  })
})