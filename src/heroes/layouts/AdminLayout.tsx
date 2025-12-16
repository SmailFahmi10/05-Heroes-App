import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="bg-red-500">
      <Outlet />
    </div>
  );
};
