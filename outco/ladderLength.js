/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

 const compare = (a, b) => {
    let diff = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff++;
      }
    }
  
    return diff === 1;
  }
  
  class Graph {
  
    constructor(wordList) {
      this.storage = {};
      for (let word of wordList) {
        this.storage[word] = [];
      }
  
      let wlLength = wordList.length;
  
      for (let i = 0; i < wlLength; i++) {
        for (let j = i + 1; j < wlLength; j++) {
          let a = wordList[i];
          let b = wordList[j];
  
          if (compare(a, b)) {
            this.storage[a].push(b);
            this.storage[b].push(a);
          }
        }
      }
    }
  }
  
  const bfs = (graph, beginWord, endWord) => {
    const visited = new Set();
    const queue = new Queue;
  
    queue.enqueue([beginWord, 1]);
    visited.add(beginWord);
  
    let current, distance;
  
    while (queue.size() > 0) {
      [current, distance] = queue.dequeue();
  
      if (current === endWord) {
        return distance;
      }
  
      let edges = graph.storage[current];
  
      for (let edge of edges) {
        if (!visited.has(edge)) {
          queue.enqueue([edge, distance + 1]);
          visited.add(edge);
        }
      }
    }
  
    return 0;
  }
  
  var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord);
  
    let graph = new Graph(wordList);
  
    let result = bfs(graph, beginWord, endWord);
  
    return result;
  };
  
  
  let beginWord = "hit";
  let endWord = "cog"; 
  let wordList = ["hot","dot","dog","lot","log","cog"];
  
  
  console.log(ladderLength(beginWord, endWord, wordList));
  
  
  /*
  
  visited = {hit, hot, dot, lot}
  
  [current, distance]
  ------------------------------------------------------------
  [lot, 2] [dog, 3]
  ------------------------------------------------------------
  [dot, 2]
  
  Graph {
    storage: {
      hot: [ 'dot', 'lot', 'hit' ],
      dot: [ 'hot', 'dog', 'lot' ],
      dog: [ 'dot', 'log', 'cog' ],
      lot: [ 'hot', 'dot', 'log' ],
      log: [ 'dog', 'lot', 'cog' ],
      cog: [ 'dog', 'log' ],
      hit: [ 'hot' ]
    }
  }
  
  
  Example 1:
  
  Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  Output: 5
  Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
  
  
  */