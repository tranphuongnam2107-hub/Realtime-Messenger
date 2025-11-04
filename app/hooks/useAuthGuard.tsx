import React, { useEffect } from 'react'
import { useNavigate, useLocation } from "react-router";

export function useAuthGuard(protectedRoute = true) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    const accountId =
      localStorage.getItem("accountId") || sessionStorage.getItem("accountId");

    // Nếu cần bảo vệ mà chưa đăng nhập → chuyển hướng về /home
    if (protectedRoute && (!accessToken || !accountId)) {
      navigate("/", { replace: true, state: { from: location.pathname } });
      return;
    }

    // Nếu là trang public mà đã đăng nhập → chuyển hướng sang /homepage
    if (!protectedRoute && accessToken && accountId) {
      if (location.pathname === "/" || location.pathname === "/register") {
        navigate("/homepage", { replace: true });
      }
    }
  }, [navigate, location, protectedRoute]);
}
