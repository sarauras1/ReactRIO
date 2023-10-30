

export default function CardList({filtereddata}) {

  return (
    <div>
     
      {filtereddata
        .map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
    </div>
  );
}
