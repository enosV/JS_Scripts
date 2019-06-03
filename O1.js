const items = [0, 1, 2, 3, 4, 5];

const logFirstTwoItems = (items) => {
  console.log(items[0]); // O(1)
  console.log(items[1]); // O(1)
}

logFirstTwoItems(items); // O(2)
