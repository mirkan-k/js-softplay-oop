// TODO: Write your class in this file
/* Write a program that maintains counts of both number of Children and Adults inside a soft play center, same as before but this time with a class and methods inside.

Method 1: SoftPlay#occupancy()
Method 2: SoftPLay#enter(numAdults, numChildren)
Method 3: SoftPlay#leave(numAdults, numChildren)
*/

class SoftPlay {
  constructor() {
    this.adults = 0,
    this.children = 0
  }
  
  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.adults += numAdults;
      this.children += numChildren;
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    if (numAdults < numChildren ||
      numAdults > this.adults ||
      numChildren > this.children ||
      this.children - numChildren > this.adults - numAdults) {
      return false
    }
    this.adults -= numAdults;
    this.children -= numChildren;
    return true
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
