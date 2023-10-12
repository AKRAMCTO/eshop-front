import React, { useContext } from 'react';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

export default function AccountButton() {
    const { isLoggedIn, userData, userId, logoutMutation, authenticationLoading, authenticationFetching } = useContext(AuthProvider);

    return (
        <li className="right-side onhover-dropdown">
            <div className="delivery-login-box">
                <div className="delivery-icon">
                    <User />
                </div>
                <div className="delivery-detail">
                    <h6>Bonjour,<br />{(isLoggedIn) ? userData.full_name : 'Guest'}</h6>
                </div>
            </div>
            <div className="onhover-div onhover-div-login">
                <ul className="user-box-name">

                    {authenticationLoading || authenticationFetching ? (
                        <TailSpin
                            type="ThreeDots"
                            color="#fff"
                            secondaryColor="black"
                            height={20}
                            width={20}
                            visible={authenticationLoading}
                        />
                    ) : (userId ? (
                        <>
                            <li className="product-box-contain">
                                <i></i>
                                <Link to={`/account`}>Mon compte</Link>
                            </li>
                            <li className="product-box-contain">
                                <button
                                    type='button'
                                    onClick={logoutMutation}
                                >
                                    Se déconnecter
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="product-box-contain">
                                <i></i>
                                <Link to={`/check-order`}>Mes commandes</Link>
                            </li>
                            <li className="product-box-contain">
                                <i></i>
                                <Link to={`/login`}>Se connecter</Link>
                            </li>
                            <li className="product-box-contain">
                                <Link to={`/register`}>Inscrivez-vous</Link>
                            </li>
                            <li className="product-box-contain">
                                <Link to={`/forgot-password`}>Mot de passe oublié</Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </li>
    );
}
