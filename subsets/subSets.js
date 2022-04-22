const subsets = (elements) => {
    if (elements.length === 0) return [[]];

    const elem = elements[0];
    const remainingElements = elements.slice(1);
    const elementsWithOutSubsets = subsets(remainingElements)
    const elementsWithSubsets = elementsWithOutSubsets.map((sub) => [elem, ...sub])
    
    return [...elementsWithOutSubsets, ...elementsWithSubsets]
}  

console.log(subsets(['a', 'b']))