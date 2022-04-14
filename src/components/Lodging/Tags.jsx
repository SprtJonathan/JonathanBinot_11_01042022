function Tags(array) {
  console.log(array.array.split(",").map((mappedObject) => mappedObject));
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
