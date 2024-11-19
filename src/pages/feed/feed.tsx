import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../redux/store';
import {
  addGlobalFeed,
  getFeedsOrders
} from '../../redux/slices/history/historySlice';
import { fetchFeeds } from '../../redux/slices/history/thunks';

export const Feed: FC = () => {
  const orders: TOrder[] = useSelector(getFeedsOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeeds())
      .unwrap()
      .then((response) => {
        dispatch(addGlobalFeed(response));
      });
  }, [dispatch]);

  if (!orders.length) {
    return <Preloader />;
  }

  return (
    <FeedUI
      orders={orders}
      handleGetFeeds={() => {
        dispatch(fetchFeeds())
          .unwrap()
          .then((response) => {
            dispatch(addGlobalFeed(response));
          });
      }}
    />
  );
};
