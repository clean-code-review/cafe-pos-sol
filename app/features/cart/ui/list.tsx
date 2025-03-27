import { List } from '@saul-atomrigs/design-system';
import type { CartItem } from '../context';
import { CartItemRow } from './item';

export function CartList({ items }: { items: CartItem[] }) {
  if (items.length === 0) {
    return <p>장바구니가 비어있습니다.</p>;
  }

  return (
    <List direction='vertical'>
      {items.map((cartItem) => (
        <CartItemRow key={cartItem.item.id} cartItem={cartItem} />
      ))}
    </List>
  );
}
