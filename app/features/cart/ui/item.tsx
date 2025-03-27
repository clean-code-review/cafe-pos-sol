import { Txt } from '@saul-atomrigs/design-system';
import type { CartItem } from '../context';
import { calculateItemPrice } from '../utils';
import OrderAmountInput from './order-amount-input';
import { krw } from '@saul-atomrigs/hangeul';

export const CartItemRow = ({ cartItem }: { cartItem: CartItem }) => {
  const { item, quantity, selectedOptions } = cartItem;
  const { id, name } = item;
  const itemTotalPrice = calculateItemPrice(cartItem) * quantity;

  return (
    <div
      key={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '12px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Txt size='base' weight='normal'>
          {name}
        </Txt>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Txt style={{ color: '#666' }}>{quantity}개</Txt>
          <Txt style={{ fontWeight: 500 }}>{krw(itemTotalPrice)}</Txt>
        </div>
        <OrderAmountInput item={item} />
      </div>

      {selectedOptions && selectedOptions.size > 0 && (
        <div style={{ paddingLeft: '12px', marginTop: '4px' }}>
          {Array.from(selectedOptions).map((optionName) => (
            <Txt key={optionName} size='sm' color='gray'>
              + {optionName}
            </Txt>
          ))}
        </div>
      )}
    </div>
  );
};
