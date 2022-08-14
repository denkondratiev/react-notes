import { useAppSelector } from './redux-hooks';

export function useAuthUser() {
  const { email, id, fullName, password } = useAppSelector(
    (state) => state.user
  );

  return {
    isAuth: Boolean(id && email),
    id,
    fullName,
    password,
  };
}
