import PropTypes from "prop-types";
import Button from "../../ui/Button";

import { formatCurrency } from "../../utilities/helpers";
function MenuItem({ pizza }) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex items-start gap-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 ${soldOut ? "cursor-not-allowed opacity-70 grayscale" : ""}`}
      />
      <div className="grid h-full w-full grid-rows-[auto_1fr_auto]">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="flex items-center justify-between">
          <div>
            {!soldOut ? (
              <p className="font-bold">{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="text-sm font-bold uppercase text-stone-500">Sold out</p>
            )}
          </div>
          <Button type="small">Add To Cart</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.object,
};

export default MenuItem;
