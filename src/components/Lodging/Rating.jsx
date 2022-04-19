function Rating(score) {
  for (let i=0; i<5; i++){
    if (score >= i){
        <span className="star rated">&#9733;</span>
    } else {
        <span className="star">&#9733;</span>
    }
  }
  return (
    <div className="ratings">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
  );
}

export default Rating;
