import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import {
  addUserFeeds,
  getHistory
} from '../../redux/slices/history/historySlice';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchUserOrdersHistory } from '../../redux/slices/history/thunks';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserOrdersHistory())
      .unwrap()
      .then((response) => {
        dispatch(addUserFeeds(response));
      });
  }, [dispatch]);

  const orders: TOrder[] = useSelector(getHistory);
  return <ProfileOrdersUI orders={orders} />;
};
