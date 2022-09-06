import { Card2 } from "./cards";

const CategoryPage = ({ category, title }) => {
  // const shuffledArray = shuffle(category);

  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  return (
    <div className="category-page">
      <h2 className="category-page-name">{title}</h2>
      <div className="category-page-grid">
        {category.map((i) => (
          <Card2 key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
