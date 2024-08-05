import { useState } from 'react'
import IngredientList from './components/IngredientList'
import BurgerStack from './components/BurgerStack'

import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])
  const [ingredients, setIngredients] = useState(availableIngredients)

  const addToBurger = (newIngredient) => {
    if(ingredients.includes(newIngredient)) {
      // newIngredient._id = stack.length + 1
      const updatedStack= [...stack, newIngredient]
      console.log(updatedStack)
      setStack(updatedStack)
    } else {
      console.log('404 Ingredient not found')
    }
  }

  const removeFromBurger = (removedIngredient) => {
    if(stack.includes(removedIngredient)) {
      const updatedStack = [...stack.filter(ingredient => ingredient !== removedIngredient)]
      setStack(updatedStack)
      console.log(updatedStack)
    } else {
      console.log('404 Ingredient not found')
    }
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList addToBurger={addToBurger} ingredients={ingredients} />
      <BurgerStack removeFromBurger={removeFromBurger} stack={stack} />
      </section>
    </main>
  );
};

export default App;