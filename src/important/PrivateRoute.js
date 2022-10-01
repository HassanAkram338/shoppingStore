import React, {useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function PrivateRoute(props) {
  const navigate = useNavigate();

  const { MyComponent } = props;

  const { isAuthenticated } = useSelector((state) => {
    return state;
  });

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");

      return;
    }
  }, []);

  return <MyComponent />;
}
