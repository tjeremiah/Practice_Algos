//Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
//return the minimum number of conference rooms required.

const minMeetingRoom = (intervals) => {
    
     let start = intervals.map(interval => interval[0])
     let end = intervals.map(interval => interval[1])

     start.sort((a, b ) => a - b)
     end.sort((a, b) => a - b)

     let j = 0, count = 0;
     for(let i = 0; i < intervals.length; i++) {
        if(start[i] < end[j]) {
            count += 1;
        }
        else {
            j += 1;
        }

     }
     return count;

}
console.log(minMeetingRoom([[0,30],[5,10],[15,20]]))
