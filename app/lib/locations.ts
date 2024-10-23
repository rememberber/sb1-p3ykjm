export const buildings = {
  "一号楼": {
    "B座": ["2F", "3F", "4F", "5F", "6F"],
    "D座": ["3F", "4F"],
    "F座": ["3F", "4F", "5F"]
  },
  "二号楼": {
    "A座": ["3F", "4F", "5F"],
    "B座": ["3F", "4F", "5F"],
    "C座": ["3F", "4F"]
  }
} as const;

export function getRandomLocation(): string {
  const buildingNames = Object.keys(buildings);
  const randomBuilding = buildingNames[Math.floor(Math.random() * buildingNames.length)];
  const wings = Object.keys(buildings[randomBuilding as keyof typeof buildings]);
  const randomWing = wings[Math.floor(Math.random() * wings.length)];
  const floors = buildings[randomBuilding as keyof typeof buildings][randomWing as keyof typeof buildings[keyof typeof buildings]];
  const randomFloor = floors[Math.floor(Math.random() * floors.length)];
  
  return `${randomBuilding} ${randomWing} ${randomFloor}`;
}