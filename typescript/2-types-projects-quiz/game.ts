{
  /**
   * Let's make a game 🕹
   */

  type TypeMove = "up" | "down" | "left" | "right";
  type TypePosition = {
    x: number;
    y: number;
  };

  const position: TypePosition = {
    x: 0,
    y: 0,
  };

  function move(str: TypeMove): void {
    switch (str) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw new Error("no");
    }
  }

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
