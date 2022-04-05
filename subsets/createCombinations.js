const createCombinations = (items, k) => {
    if (items.length < k) return [];
  
    if (k === 0) return [[]];
  
    const first = items[0];
    const combosWithFirst = [];
    for (let combo of createCombinations(items.slice(1), k - 1)) {
      combosWithFirst.push([first, ...combo]);
    }
  
    const combosWithoutFirst = createCombinations(items.slice(1), k);
    return [...combosWithFirst, ...combosWithoutFirst];
}

console.log(createCombinations(["a", "b", "c"], 2))