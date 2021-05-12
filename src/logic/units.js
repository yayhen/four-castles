export const createUnit = (unitName = 'warrior', holder = 0) => {
  switch (unitName) {
    case 'warrior':
      return {
        holder: holder,
        unitName: "warrior",
        hitPoints: 100,
        attackPower: 25,
        attackRange: 1,
        defence: 25,
        actions: 2,
        maxActions: 2,
      }
    case 'archer':
      return {
        holder: holder,
        unitName: "archer",
        hitPoints: 100,
        attackPower: 40,
        attackRange: 2,
        defence: 10,
        actions: 2,
        maxActions: 2,
      }
    default:
      return {
        holder: holder,
        unitName: "warrior",
        hitPoints: 100,
        attackPower: 25,
        attackRange: 1,
        defence: 25,
        actions: 2,
        maxActions: 2,
      }
  }
}