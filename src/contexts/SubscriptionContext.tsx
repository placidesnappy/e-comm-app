import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

type SubscriptionContextType = {
  subscribed: boolean;
  loading: boolean;
};

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscribed: false,
  loading: true,
});

export const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, loading: authLoading } = useAuth();
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (user?.prefs?.isSubscribed) {
      setSubscribed(true);
    } else {
      setSubscribed(false);
    }

    setLoading(false);
  }, [user, authLoading]);

  return (
    <SubscriptionContext.Provider value={{ subscribed, loading }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);
