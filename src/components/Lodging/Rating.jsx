import "../../styles/Rating.css";

function Rating(param) {
  const score = param.score;
  let ratingElements = [];
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      ratingElements.push("star rated");
    } else {
      ratingElements.push("star");
    }
  }
  return (
    <div className="ratings">
      {ratingElements.map((stars, i) => (
        <span className={stars} key={i}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default Rating;
