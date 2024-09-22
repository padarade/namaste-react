import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
  const { data, showItems, setShowIndex } = props;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-l">
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
