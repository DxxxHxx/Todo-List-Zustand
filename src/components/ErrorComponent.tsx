import { Navigate } from "react-router-dom";

export default function ErrorComponent() {
  const navigateHome = () => {
    alert("존재하지 않는 페이지 입니다.");
    return <Navigate to={"/"} />;
  };
  return navigateHome();
}
