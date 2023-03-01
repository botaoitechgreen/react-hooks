const IngredientItem = ({ index, onRemove, ig }) => {
  return (
    <li
      key={index}
      onClick={() => {
        onRemove(index);
      }}
    >
      <span>{ig.title}</span>
      <span>{ig.amount}x</span>
    </li>
  );
};

export default IngredientItem;
