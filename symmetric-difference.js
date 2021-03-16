// for explanation visit 
// https://tradecoder.com/dev/javascript/how-to-find-the-symmetric-difference/




function sym(args){

  const elements = Array.from(arguments)
  .reduce((a,b)=>a.concat(b).filter(e=>a.indexOf(e)===-1||b.indexOf(e)===-1));

  return [... new Set(elements)]
}

sym([1, 2, 3], [5, 2, 1, 4]);
