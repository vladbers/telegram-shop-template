import formatPrice from 'utils/formatPrice';
import CartProducts from './CartProducts';

import { useCart } from 'contexts/cart-context';

import * as S from './style';

const Cart = () => {
  const { products, total, isOpen, openCart, closeCart } = useCart();

  const handleCheckout = () => {
    if (total.productQuantity) {
      alert(
        `Итого к оплате: ${total.currencyFormat} ${formatPrice(
          total.totalPrice,
          total.currencyId,
        )}, курьеру`,
      );
    } else {
      alert('Добавьте что нибудь в корзину');
    }
  };

  return (
    <S.Box>
      {total.productQuantity > 0 && (
        <S.CartButton onClick={() => openCart()}>
          Корзина {total.totalPrice}
          {total.currencyFormat}
        </S.CartButton>
      )}
      <S.Container isOpen={isOpen}>
        {isOpen && (
          <S.CartContent>
            <S.Close onClick={() => closeCart()}>X</S.Close>
            <S.CartContentHeader>
              <S.HeaderTitle>Корзина</S.HeaderTitle>
            </S.CartContentHeader>

            <CartProducts products={products} />

            <S.CartFooter>
              <S.Sub>Итого к оплате:</S.Sub>
              <S.SubPrice>
                <S.SubPriceValue>{`${total.currencyFormat} ${formatPrice(
                  total.totalPrice,
                  total.currencyId,
                )}`}</S.SubPriceValue>
              </S.SubPrice>
              <S.CheckoutButton onClick={handleCheckout} autoFocus>
                Заказать
              </S.CheckoutButton>
            </S.CartFooter>
          </S.CartContent>
        )}
      </S.Container>
    </S.Box>
  );
};

export default Cart;
