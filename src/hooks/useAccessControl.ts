import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";



type AccessStatus = {
  isAuthenticated: boolean;
  isSubscribed: boolean;
  loading: boolean;
};

export const useAccessControl = (): AccessStatus => {
  const { user, loading: authLoading } = useAuth();
  const { subscribed, loading: subLoading } = useSubscription();

  const isAuthenticated = !!user;
  const loading = authLoading || subLoading;

  return {
    isAuthenticated,
    isSubscribed: subscribed,
    loading,
  };
};
