// You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

// Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.

// Example

// For
//   dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//             ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//             ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//             ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
// the output should be
//   solution(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//                       ["Salad", "Salad", "Sandwich"],
//                       ["Sauce", "Pizza", "Quesadilla", "Salad"],
//                       ["Tomato", "Pizza", "Salad", "Sandwich"]]
// For
//   dishes = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
//             ["Chicken Curry", "Chicken", "Curry Sauce"],
//             ["Fried Rice", "Rice", "Onions", "Nuts"],
//             ["Salad", "Spinach", "Nuts"],
//             ["Sandwich", "Cheese", "Bread"],
//             ["Quesadilla", "Chicken", "Cheese"]]
// the output should be
//   solution(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//                       ["Chicken", "Chicken Curry", "Quesadilla"],
//                       ["Nuts", "Fried Rice", "Salad"],
//                       ["Onions", "Fried Rice", "Pasta"]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.array.string dishes

// An array of dishes, where dishes[i] for each valid i contains information about the ith dish: dishes[i][0] is the name of the dish, and all the elements after it are the ingredients of that dish. Both the dish name and the ingredient names consist of English letters and spaces. It is guaranteed that all dish names are different. It is also guaranteed that the ingredient names for any one dish are also pairwise distinct.

// Guaranteed constraints:
// 1 ≤ dishes.length ≤ 500,
// 2 ≤ dishes[i].length ≤ 10,
// 1 ≤ dishes[i][j].length ≤ 50.

// [output] array.array.string

// The array containing the grouped dishes.

function solution(dishes) {
  //map para mantener un rastro de cada platillo y cada ingrediente
  const ingredientMap = new Map()
  
  //iteramos sobre cada platillo en el arreglo
  dishes.forEach((dish) => {
      //desestructuramos, el primer elemento es el platillo y lo restante los ingredientes
      const [dishName,...ingredients] = dish
      
      //iteramos sobre los ingredientes
      ingredients.forEach((ingredient) => {
          //si el ingrediente no está en el map, agregarlo con un array vacio
          if(!ingredientMap.has(ingredient)){
              ingredientMap.set(ingredient, [])
          }
          
          //añadimos un nombre del platillo a la lista de platillos que contienen este ingrediente
          ingredientMap.get(ingredient).push(dishName)
      })
  })
  //almacenamos el resultado
  const result = []
  
 //iteramos sobre el map para filtar y ordenar los ingredientes
  ingredientMap.forEach((dishList, ingredient) => {
      //solo considerar ingredientes que aparecen al menos dos veces en un platillo
      if(dishList.length > 1 ){
          //ordenar la lista de platillos que contienen estos ingredientes
          dishList.sort()
          //añadimos un nuevo array al resultado, donde el primer elemento es el ingrediente seguido de la lista de platillos ordenada
          result.push([ingredient, ...dishList])
          
      }
  })
  //orden lexicografico
  result.sort((a,b) => a[0].localeCompare(b[0]))
  
  return result
}
