import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ title }) {
  return (
    <section className="breadscrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadscrumb-contain">
              <h2>{title}</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={`/`}>
                      <Home />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
