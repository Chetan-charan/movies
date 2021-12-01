
export function FoodItem({ title, image }) {

  const foodImage = { width: '300px', height: '300px' };

  return <div>
    <h4>{title}</h4>
    <img style={foodImage} src={image} alt={title} />
  </div>;

}
