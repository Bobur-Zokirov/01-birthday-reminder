const List = ({ id, name, age, image, deletePerson }) => {
  return (
    <ul>
      <li className="person">
        <img src={image} alt={`person ${id}`} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
        <span className="layer">
          <i className="fa-solid fa-trash" onClick={() => deletePerson(id)}></i>
        </span>
      </li>
    </ul>
  );
};

export default List;
