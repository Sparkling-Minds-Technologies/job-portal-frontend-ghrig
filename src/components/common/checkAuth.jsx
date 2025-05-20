import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { useEffect } from "react";

const CheckAuth = ({ allowedRoles = [], fetchProfileHook, children }) => {
  const location = useLocation();
  const {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    refetchProfile,
    setRefetchProfile,
    token,
  } = useAuthStore();
  const profile = fetchProfileHook
    ? fetchProfileHook({
        enabled:
          isAuthenticated &&
          (!user || refetchProfile) &&
          allowedRoles.includes("recruiter"),
      })
    : null;
  useEffect(() => {
    if (profile?.status === "success") {
      setUser(profile?.data?.data);
      setIsAuthenticated(true);
      if (refetchProfile) {
        setRefetchProfile(false);
      }
    }
  }, [
    profile?.status,
    profile?.data?.data,
    setUser,
    refetchProfile,
    setRefetchProfile,
  ]);
  const role = user?.role;

  const isLoading = profile?.isLoading;
  // console.log(isAuthenticated, user, token, role);
  const isLoginOrRegisterRoute =
    location.pathname.includes("/log-in") ||
    location.pathname.includes("/basic-details");

  if (isLoading && !user) return <div>Loading...</div>;

  if (location.pathname === "/") {
    return isAuthenticated ? (
      <Navigate to={`/${role}/dashboard`} replace />
    ) : (
      <Navigate to={`/${allowedRoles[0]}/log-in`} replace />
    );
  }

  if (isAuthenticated && isLoginOrRegisterRoute && !isLoading && role) {
    // console.log("first");
    return <Navigate to={`/${role}/dashboard`} replace />;
  }

  if (!isAuthenticated && !isLoginOrRegisterRoute && !isLoading) {
    // console.log("second");
    return (
      <Navigate
        to={`/${allowedRoles[0]}/log-in`}
        replace
        state={{ from: location }}
      />
    );
  }

  if (
    isAuthenticated &&
    allowedRoles?.length &&
    !allowedRoles.includes(role) &&
    !isLoading &&
    role
  ) {
    // console.log("third");
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default CheckAuth;
