import { Route, Routes } from 'react-router-dom';

import {
    Admin404Page,
    AdminCategoriesPage,
    AdminHomePage,
    AdminProductsPage,
} from '../pages/admin';
import { AdminSidebar, AdminNavbar } from '../components/admin';

const AdminRoutes = () => {
    return (
        <div className='admin'>
            <AdminSidebar />
            <div className='admin-main'>
                <AdminNavbar />
                <Routes>
                    <Route path='/' element={<AdminHomePage />} />
                    <Route
                        path='/products'
                        element={<AdminProductsPage />}
                    ></Route>
                    <Route
                        path='/categories'
                        element={<AdminCategoriesPage />}
                    ></Route>
                    <Route path='*' element={<Admin404Page />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminRoutes;