const character = {
  name: "Snortleblat",
  class: "Swamp Monster",
  level: 1,
  health: 100,
  attacked() {
    if (this.health > 0) {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has died in the swamp!`);
      }
    }
    document.getElementById("health").textContent = this.health;
  },
  levelUp() {
    this.level += 1;
    document.getElementById("level").textContent = this.level;
  }
};

document.getElementById("attackBtn").addEventListener("click", () => character.attacked());
document.getElementById("levelBtn").addEventListener("click", () => character.levelUp());
