import type { CartItem } from './context';

export const calculateItemPrice = (cartItem: CartItem) => {
  const { item, selectedOptions } = cartItem;
  let totalPrice = item.price;

  if (selectedOptions && item.optionGroups) {
    item.optionGroups.forEach((group) => {
      group.options.forEach((option) => {
        if (selectedOptions.has(option.name) && option.price) {
          totalPrice += option.price;
        }
      });
    });
  }

  return totalPrice;
};
