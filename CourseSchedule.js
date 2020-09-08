/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 


*/
var canFinish = function (numCourses, prerequisites) {
  let courses = new Array(numCourses).fill(0); //create an array of the courses
  let count = 0;

  for (let i in prerequisites) {
    console.log(prerequisites[i][0]);
    courses[prerequisites[i][0]]++; //count how many courses have prerequisites.
  }

  let stack = []; //create a stack for topological sort
  for (let i = 0; i < courses.length; i++) {
    if (courses[i] === 0) {
      //if a course has no prereqs, we can just add it to our stack
      stack.push(i);
    }
  }

  while (stack.length) {
    //while there are still courses in our stack
    let curr = stack.pop(); //pop out a class from our stack
    count++; //increment the count-- how many classes we've completed

    //in this loop, we are going to check our prereq array to find any courses that have the current course as a prereq and we are going to decrement the req in courses array because we are done with the prereq, the course is now avaliable for us to take. Once the prereq is equal to 0, that means we an now push it onto our stack.
    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] === curr) {
        courses[prerequisites[i][0]]--;
        if (courses[prerequisites[i][0]] == 0) {
          stack.push(prerequisites[i][0]);
        }
      }
    }
  }
  return count == numCourses;
};

//Time = O(n)
//Space = O(n) Courses array
