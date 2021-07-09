//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping 
//intervals, and return an array of the non-overlapping intervals that cover all the 
//intervals in the input.

//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]

const mergeIntervals = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0]);
    let prev = intervals[0];
    let result = prev;
    
      


}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))
