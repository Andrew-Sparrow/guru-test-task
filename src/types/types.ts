
import { store } from '../store/store';

export type ProductDataType = {
  date: number;
  id: string;
  locality: string;
  oldPrice: string;
  price: string;
  seen: boolean;
  title: string;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type DispatchFunc = () => AppDispatch;
