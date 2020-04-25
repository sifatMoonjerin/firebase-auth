import React, { useContext } from 'react'
import { AuthContext } from './Auth'
import { Route, Redirect } from 'react-router';


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps => 
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ): (
                    <Redirect to={"/login"} />
                )
            } 
        />
    )
}

export default PrivateRoute;