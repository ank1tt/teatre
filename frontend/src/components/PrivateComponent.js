import { Navigate } from 'react-router-dom';
 
const PrivateComponent = ({ children, role }) => {
    const isLoggedIn = localStorage.getItem('userId') !== null;
    const userType = localStorage.getItem('userType');
    const lowerCaseUserType = userType ? userType.toLowerCase() : null;
 
    return isLoggedIn && lowerCaseUserType === role ? children : <Navigate to="/login" replace />;
};
 
export default PrivateComponent;