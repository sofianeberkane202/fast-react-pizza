import Header from "./Header"
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from "react-router-dom"
import Loader from "./Loader";
function AppLayout() {

    const navigation= useNavigation();

    const isLoading = navigation.state === 'loading';

    return (
        <div className="layout">
            
            <Header/>

            <main>
                { isLoading && <Loader/> }
                {!isLoading && <Outlet/>}
            </main>

            <CartOverview/>

        </div>
    )
}

export default AppLayout