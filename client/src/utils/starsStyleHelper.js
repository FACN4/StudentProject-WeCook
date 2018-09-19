//Function that receives a multiple of 5 between 0-50 and returns the correct horizontal and vertial alignments for Stars.Style.js component
const starHelper = rating => {
  let horizontal;
  let vertical;
  if (rating % 10 === 0) {
    horizontal = -100 + rating * 2;
    vertical = 0;
  } else {
    horizontal = -100 + (rating + 5) * 2;
    vertical = -27;
  }
  return {horizontal, vertical};
}

export default starHelper ;
