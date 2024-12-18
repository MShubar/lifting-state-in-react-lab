const IngredientList = ({ ingredients, handleAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => handleAdd(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
