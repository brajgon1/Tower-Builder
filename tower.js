// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *

function towerBuilding(nSplat) {
    const tower = [];
    for (let i = 0; i < nSplat; i++) {
      const space = ' '.repeat(nSplat - i);
      const blocks = '*'.repeat(2 * i + 1);
      tower.push(space + blocks + space)
    } 
    return tower;
  }
  
  const height = 5;
  const tower = towerBuilding(height);
  console.log(tower)