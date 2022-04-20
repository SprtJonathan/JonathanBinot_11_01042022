import "../../styles/Tags.css"

function Tags(array) {
  return (
    <div className="tag-block">
      {array.array.map((mappedObject, i) => (
        <div className="tag" key={i}>
          <h3 className="tag-title">{mappedObject}</h3>
        </div>
      ))}
    </div>
  );
}

export default Tags;
