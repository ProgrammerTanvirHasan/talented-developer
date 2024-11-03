const Table = ({ feature, index }) => {
  const { title, email, image, name } = feature;
  return (
    <div>
      {
        <div className="grid lg:grid-cols-4 lg:gap-4  mb-4">
          <td className="text-center">{index + 1}</td>
          <td className="text-center">{title}</td>
          <td className="text-center">{email || name}</td>
          <td className="flex justify-center">
            <img className="w-36 h-24" src={image} alt="" />
          </td>
        </div>
      }
    </div>
  );
};

export default Table;
