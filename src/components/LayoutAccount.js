import React, { useContext, useState } from 'react';
import Loading from './Loading';
import { Redirect } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { DataProvider } from '../contexts/DataContext';

export default function LayoutAccount({ type, ChooseType, children }) {
  const { isMobile, isTablet } = useContext(DataProvider);
  const { userData } = useContext(AuthProvider);
  const [menu, setMenu] = useState(false)

  const toggleMenu = (status) => {
    setMenu(status)
  }

  return (
    <section className="user-dashboard-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-xxl-3 col-lg-4">
            <div className={`dashboard-left-sidebar ${((isMobile || isTablet) && menu) ? 'show' : ''}`}>
              <div className="close-button d-flex d-lg-none">
                <button onClick={() => toggleMenu(false)} className={`close-sidebar`}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="profile-box">
                <div className="cover-image">
                  <img src={require("./../assets/images/cover-img.jpg")} className="img-fluid blur-up lazyload" alt="" />
                </div>

                <div className="profile-contain">
                  <div className="profile-image">
                    <div className="position-relative">
                      <img src={
                              (userData?.full_avatar) ? 
                                userData?.full_avatar
                              :
                                require("./../assets/images/avatar.jpeg")
                            } 
                            className="blur-up lazyload update_img" alt="" />
                    </div>
                  </div>

                  <div className="profile-name">
                    <h3>{userData?.full_name}</h3>
                    {userData?.email && <h6 className="text-content">{userData?.email}</h6>}
                  </div>
                </div>
              </div>

              <ul className="nav nav-pills user-nav-pills">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${type === 'account' && 'active'}`} 
                    type="button"
                    onClick={() => ChooseType('account')}
                  >
                    <i data-feather="home"></i>
                    Tableau de bord
                  </button>
                </li>

                <li className="nav-item">
                  <button 
                    className={`nav-link ${type === 'orders' && 'active'}`} 
                    type="button"
                    onClick={() => ChooseType('orders')}
                  >
                    <i data-feather="shopping-bag"></i>
                    Commandes
                  </button>
                </li>

                <li className="nav-item">
                  <button 
                    className={`nav-link ${type === 'wishlist' && 'active'}`} 
                    type="button"
                    onClick={() => ChooseType('wishlist')}
                  >
                    <i data-feather="heart"></i>
                    Wishlist
                  </button>
                </li>

                <li className="nav-item">
                  <button 
                    className={`nav-link ${type === 'addresses' && 'active'}`} 
                    type="button"
                    onClick={() => ChooseType('addresses')}
                  >
                    <i data-feather="map-pin"></i>
                    Address
                  </button>
                </li>

                <li className="nav-item">
                  <button 
                    className={`nav-link ${type === 'profile' && 'active'}`} 
                    type="button"
                    onClick={() => ChooseType('profile')}
                  >
                    <i data-feather="user"></i>
                    Profile
                  </button>
                </li>

                <li className="nav-item">
                  <button 
                    className={`nav-link ${type === 'privacy' && 'active'}`} 
                    type="button"
                    onClick={() => ChooseType('privacy')}
                  >
                    <i data-feather="user"></i>
                    Privacy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xxl-9 col-lg-8">
            <button onClick={() => toggleMenu(true)} className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show Menu</button>
            <div className="dashboard-right-sidebar">
              <div className="tab-content" id="pills-tabContent">
                {children}
              </div>
            </div>
          </div>

          <div className={`bg-overlay ${((isMobile || isTablet) && menu) ? 'show' : ''}`}></div>
        </div>
      </div>
    </section>
  )
}
