class Sorter {
  constructor() {
    // your implementation
      this.array = [] ; 
  }

  add(element) {
    // your implementation
      this.array.push(element) ;
      
  }

  at(index) {
    // your implementation
      return this.array[index] ;
  }

  get length() {
    // your implementation
     return this.array.length ;
  }

  toArray() {
    // your implementation
     return this.array ;
  }

  sort(indices) {
    // your implementation
     for(var i=0; i<indices.length; i++){
         for(var j=i+1; j<indices.length; j++){
             if(indices[i]>indices[j]) {
                  var q ;
                 q = indices[j] ;
                 indices[j] = indices[i] ;
                 indices[i] = q ;
             } 
         }
     }
      for(var i=0; i<indices.length; i++){
          for(var j=i+1; j<indices.length; j++){
              if(this.array[indices[i]]>this.array[indices[j]]){
                  var q ;
                  q = this.array[indices[j]] ;
                  this.array[indices[j]] = this.array[indices[i]] ;
                  this.array[indices[i]] = q ;
              }
          }
      }
         
              

  }

  setComparator(compareFunction) {
    // your implementation 
      
    this.array.sort(compareFunction) ;
     
  }
}


module.exports = Sorter ;