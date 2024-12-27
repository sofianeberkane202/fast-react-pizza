import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <div className="overflow-scroll">
        <main>{!isLoading && <Outlet />}</main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
