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
    console.log('percent G length:')
    console.log(percentG.length)
    console.log('percent C length:')
    console.log(percentC.length)
    console.log('percent')
    console.log(percentC.length/15*100)
    if ((percentC.length/15)*100 >= 60) {
      console.log('percent')
      console.log(percentC.length/15*100)
      return true
    }
    console.log('percent')
    console.log(percentC.length/15*100)
    if ((percentG.length/15)*100 >= 60) {
      console.log('percent')
      console.log(percentG.length/15*100)
      return true
    }
    return false
  }
  
  
  }
}

let dna = pAequorFactory(1,mockUpStrand())
let dnb = pAequorFactory(2,mockUpStrand())

dna.mutate = function () {
    let count = 0 

    let randomNumber = Math.floor(Math.random() * dna.dna.length);
    console.log(randomNumber)
    
    console.log(dna.dna)
    //dnb = Object.create(dna)
    let originalDna = dna[randomNumber]
    let changedDna = returnRandBase();
    while (originalDna === changedDna) {
      changedDna = returnRandBase();
    }
    dna.dna[randomNumber] = changedDna
    //dnb.dna[randomNumber] = changedDna
    console.log(dna.dna)
    return dna
}


dna.compareDNA = function (dnaObject) {
  let count = 0;
  for (let i = 0; i < dna.dna.length; i++) {
    if (dna.dna[i] === dnaObject.dna[i]) {
      count++
    }  
  }
  let percentSame = Math.floor((count/dna.dna.length)*100)
  console.log(`Specimen #${dna.specimenNum}} and specimen #${dnaObject.specimenNum} are ${percentSame}% the Same`)
}
/*
dna.willLikelySurvive = function () {
  let percentC = []
  let percentG = []
  dna.dna.forEach(base => {
    if (base === 'C') {
      percentC.push(base)
    }
    if (base === 'G') {
      percentG.push(base)
    }
    
  })
  console.log('percent G length:')
  console.log(percentG.length)
  console.log('percent C length:')
  console.log(percentC.length)
  console.log('percent')
  console.log(percentC.length/15*100)
  if ((percentC.length/15)*1000 >= 60) {
    console.log('percent')
    console.log(percentC.length/15*100)
    return true
  }
  console.log('percent')
  console.log(percentG.length/15*100)
  if ((percentG.length/15)*100 >= 60) {
    console.log('percent')
    console.log(percentG.length/15*100)
    return true
  }
  return false
}

console.log('start dns')
console.log(dna.dna)

console.log('mutate')

let mutated = dna.mutate()
console.log(mutated)


console.log('dna a')
console.log(dna.dna)

console.log('dba b')
console.log(dnb.dna)

dna.compareDNA(dnb)

console.log('will survive')
*/
let control = false;


var count = 1

const pAequorServivors = [];

while(pAequorServivors.length !== 30) {
  let item = pAequorFactory(count,mockUpStrand())
  if (item.willLikelySurvive()) {
    pAequorServivors.push(item)
    count++
  }
  console.log(item.willLikelySurvive())
  console.log(item.dna)
}

console.log(pAequorServivors.length)




console.log(pAequorServivors)
//mutated = dna.mutate()
