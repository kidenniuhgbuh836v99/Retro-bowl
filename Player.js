/**
 * Represents a football player on the field
 */
export default class Player {
  constructor(name, position, stats) {
    this.name = name;
    this.position = position; // QB, WR, RB, etc.
    this.speed = stats.speed || 50;
    this.stamina = 100;
    this.positionX = 0;
    this.positionY = 0;
  }

  /**
   * Calculate movement toward the endzone
   */
  sprint(targetX) {
    if (this.stamina > 0) {
      this.positionX += this.speed * 0.1;
      this.stamina -= 0.5;
      console.log(`${this.name} is rushing!`);
    } else {
      console.log(`${this.name} is exhausted.`);
    }
  }
}
