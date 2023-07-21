import React from "react";

const Categories = ({ setShowCategories }) => {
  const catData = [
    {
      catImg:
        "https://wakefitdev.gumlet.io/consumer-react/More-Category/EW-Furniture/EW-TV-units.jpg?w=200",
      catName: "TV Units & Coffee tables",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/consumer-react/More-Category/Storage/Wardrobe.jpg?w=200",
      catName: "Wardrobe ",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/consumer-react/More-Category/Lights-Lamps/Pendants.jpg?w=200",
      catName: "Home Decor & Lightings",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/img/engineered-wood-bed/taurus-single/storage/1.webp?w=400",
      catName: "Bedroom",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/img/sofa_cum_bed/flipper/fobl/3S/1.webp?w=400",
      catName: "Living",
    },
    {
      catImg: "https://wakefitdev.gumlet.io/img/home-interior.webp?w=400",
      catName: "Kitchen",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/img/dining/sets/ginamon-6S/1.webp?w=400",
      catName: "Dining",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/img/study-tables/apollo/columbia-walnut/1N.webp?w=400",
      catName: "Study",
    },
    {
      catImg:
        "https://wakefitdev.gumlet.io/img/kids-furniture/cribs/megatronr1/1.webp?w=400",
      catName: "Kids",
    },
  ];
  return (
    <>
      <div className="category" onMouseLeave={() => setShowCategories(false)}>
        {catData.map((e, i) => {
          return (
            <div
              className="box f-flex"
              key={i}
              onClick={() => setShowCategories(false)}>
              <img src={e.catImg} alt="" />
              <span>{e.catName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
