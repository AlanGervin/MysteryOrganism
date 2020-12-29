// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



function pAequorFactory(number,dnaArray) {

  return {specimenNum: number,
    dna: dnaArray,
    willLikelySurvive: function () {
    let percentC = []
    let percentG = []
    this.dna.forEach(base => {
      if (base === 'C') {
        percentC.push(base)
      }
      if (base === 'G') {
        percentG.push(base)
      }
      
    })
    if ((percentC.length/15)*100 >= 60) {
      console.log('percent')
      console.log(percentC.length/15*100)
      return true
    }
    if ((percentG.length/15)*100 >= 60) {
      console.log('percent')
      console.log(percentG.length/15*100)
      return true
    }
    return false
    },
    mutate: function () {
      let count = 0 
  
      let randomNumber = Math.floor(Math.random() * dna.dna.length);
      console.log(randomNumber)
      
      console.log(dna)
      //dnb = Object.create(dna)
      let originalDna = dna[randomNumber]
      let changedDna = returnRandBase();
      while (originalDna === changedDna) {
        changedDna = returnRandBase();
      }
      dna.dna[randomNumber] = changedDna
      //dnb.dna[randomNumber] = changedDna
      console.log(this.dna.dna)
      return dna
    },
    compareDNA: function (dnaObject) {
      let count = 0;
      for (let i = 0; i < dna.dna.length; i++) {
        if (this.dna[i] === dnaObject.dna[i]) {
          count++
        }  
      }
      let percentSame = Math.floor((count/dna.dna.length)*100)
      console.log(`Specimen #${dna.specimenNum} and specimen #${dnaObject.specimenNum} are ${percentSame}% the Same`)
    },
    willLikelySurvive: function () {
      let percentC = []
      let percentG = []
      this.dna.forEach(base => {
        if (base === 'C') {
          percentC.push(base)
        }
        if (base === 'G') {
          percentG.push(base)
        }
        
      })
      //uncomment the following code block to see percent of each try if under 60%
      /*
      console.log('percent G length:')
      console.log(percentG.length)
      console.log('percent C length:')
      console.log(percentC.length)
      */
      //console.log(percentC.length/15*100)
      if (((percentC.length/15)*100) >= 60) {
        console.log('percent')
        console.log(percentC.length/15*100)
        return true
      }
      
      //console.log(percentG.length/15*100)
      if (((percentG.length/15)*100) >= 60) {
        console.log('percent')
        console.log(percentG.length/15*100)
        return true
      }
      return false
    }
  
  
  }
}

let dna = pAequorFactory(1,['C','C','C','C','C','C','C','C','C','C','C','C','C','C','C'])
let dnb = pAequorFactory(2,mockUpStrand())


console.log('start dns')
console.log(dna.dna)


let mutated = dna.mutate()
console.log('mutated')
console.log(dna.mutated)


console.log('dna a')
console.log(dna.dna)

console.log('dba b')
console.log(dnb.dna)

dna.compareDNA(dnb)
console.log('will survive')


var count = 1

//Array with servivors species in it.
const pAequorServivors = [];


while(pAequorServivors.length !== 30) {
  let item = pAequorFactory(count,mockUpStrand())
  //makes sure a duplicate entry doesn't exist in pAeuorServivors and that the specimen will survive
  if (item.willLikelySurvive() && pAequorServivors.indexOf(item.dna) === -1) {
    pAequorServivors.push(item.dna)
    console.log(item.willLikelySurvive())
    console.log(item.dna)
    count++
  }

}

console.log('Array Length:')
console.log(pAequorServivors.length)

console.log(pAequorServivors)
