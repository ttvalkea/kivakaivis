import renderedObject from "../../classes/renderedObject";

export const areColliding = (
  item1: renderedObject,
  item2: renderedObject
): boolean => {
  return (
    item1.x < item2.x + item2.width &&
    item1.x + item1.width > item2.x &&
    item1.y < item2.y + item2.height &&
    item1.y + item1.height > item2.y
  );
};
