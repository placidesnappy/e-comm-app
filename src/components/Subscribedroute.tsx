import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";
import { Navigate } from "react-router-dom";

const SubscribedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading: authLoading } = useAuth();
  const { subscribed, loading: subLoading } = useSubscription();

  if (authLoading || subLoading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  if (!subscribed) return <Navigate to="/subscribe" />;

  return <>{children}</>;
};

export default SubscribedRoute;
