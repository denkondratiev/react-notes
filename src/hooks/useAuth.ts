import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id } = useSelector((state: any) => state.user);

  return { isAuth: Boolean(email && token && id), email, token, id };
}
