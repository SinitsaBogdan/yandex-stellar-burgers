import { FC, useMemo } from 'react';
import { TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector } from '../../redux/store';

import {
  getBun,
  getIngredients,
  getOrderModalData,
  getOrderRequest
} from '../../redux/slices/constructorItemSlice';
import { useNavigate } from 'react-router-dom';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const bun = useSelector(getBun);
  const ingredients = useSelector(getIngredients);

  const orderRequest = useSelector(getOrderRequest);
  const orderModalData = useSelector(getOrderModalData);

  const onOrderClick = () => {
    if (!bun || orderRequest) return;
  };
  const closeOrderModal = () => {
    navigate(-1);
  };

  const price = useMemo(
    () =>
      (bun ? bun.price * 2 : 0) +
      ingredients.reduce((s: number, v: TIngredient) => s + v.price, 0),
    [bun, ingredients]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={{ bun, ingredients }}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
