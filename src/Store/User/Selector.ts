import { useAppSelector } from '../../hooks/Store';
import { Namespace } from '../Namespace';

export const useAuthorizationStatusSelector = () =>
  useAppSelector((state) => state[Namespace.User].authorizationStatus);

export const useAvatarLinkSelector = () =>
  useAppSelector((state) => state[Namespace.User].avatarLink);
