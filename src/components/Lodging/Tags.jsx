function Tags(array) {
  return (
    <div className="tag-block">
      {array.array.split(",").map((mappedObject) => (
        <div className="tag">
          <h3 className="tag-title">{mappedObject}</h3>
        </div>
      ))}
    </div>
  );
}

export default Tags;
