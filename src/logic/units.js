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
        cost: 10,
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
        cost: 15,
      }
    case 'swordsman':
      return {
        holder: holder,
        unitName: "swordsman",
        hitPoints: 100,
        attackPower: 40,
        attackRange: 1,
        defence: 30,
        actions: 2,
        maxActions: 2,
        cost: 40,
      }
    case 'heavy-infantry':
      return {
        holder: holder,
        unitName: "heavy-infantry",
        hitPoints: 100,
        attackPower: 45,
        attackRange: 2,
        defence: 50,
        actions: 1,
        maxActions: 1,
        cost: 90,
      }
    case 'crossbowman':
      return {
        holder: holder,
        unitName: "crossbowman",
        hitPoints: 100,
        attackPower: 50,
        attackRange: 3,
        defence: 15,
        actions: 1,
        maxActions: 1,
        cost: 30,
      }
    case 'catapult':
      return {
        holder: holder,
        unitName: "catapult",
        hitPoints: 100,
        attackPower: 50,
        attackRange: 5,
        defence: 5,
        actions: 1,
        maxActions: 1,
        cost: 60,
      }
    case 'light-cavalry':
      return {
        holder: holder,
        unitName: "light-cavalry",
        hitPoints: 100,
        attackPower: 30,
        attackRange: 5,
        defence: 20,
        actions: 4,
        maxActions: 4,
        cost: 25,
      }
    case 'heavy-cavalry':
      return {
        holder: holder,
        unitName: "heavy-cavalry",
        hitPoints: 100,
        attackPower: 45,
        attackRange: 5,
        defence: 40,
        actions: 3,
        maxActions: 3,
        cost: 60,
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
        cost: 10
      }
  }
}