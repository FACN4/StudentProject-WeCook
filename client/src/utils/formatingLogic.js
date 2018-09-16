const timeRemaining = (milliseconds) => {
  const hours = milliseconds/ (1000*60*60);
  if (hours> 24) {
    const remaining =  Math.floor(hours/24);
    return `${remaining} days to order`;
  } else if (milliseconds<0){
    return "Deadline to order passed"
  }else if (hours <1) {
    const remaining =  Math.floor(milliseconds/(1000*60));
    return `${remaining} minutes to order`;
  } else {
    return `${hours} hours to order`;
  }
};

export default timeRemaining;
