import React, { useContext } from 'react';
import Loading from './Loading';
import { Redirect } from 'react-router-dom';

export default function AddressBox({ changeCurrentAddress, remove, address }) {

  return (
    <div className="col-xl-6 col-lg-12 col-md-6">
      <div className="address-box">
        <div>
          {(address?.is_default) ? 
            <div className="form-check">
              <input className="form-check-input" type="radio" disabled checked />
            </div>
            : 
            <view />
          }

          <div className="label">
            <label>{address?.type === 'delivery' ? 'Livraison' : 'Facture'}</label>
          </div>

          <div className="table-responsive address-table mt-4">
            <table className="table">
              <tbody>
                <tr>
                  <td>Pays :</td>
                  <td>{(address?.country) ? <p>{address?.country?.name}</p> : '-'}</td>
                </tr>
                <tr>
                  <td>Provinces :</td>
                  <td>{(address?.city) ? <p>{address?.city?.name}</p> : '-'}</td>
                </tr>
                <tr>
                  <td>Line 1 :</td>
                  <td><p>{address?.line_1}</p></td>
                </tr>
                <tr>
                  <td>Line 2 :</td>
                  <td><p>{address?.line_2 ?? '-'}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="button-group">
          <button 
            type="button" 
            onClick={() => changeCurrentAddress(address)}
            className="btn btn-sm add-button w-100"
          >
            <i data-feather="edit"></i>
            Modifier
          </button>
          <button 
            type="button" 
            onClick={() => remove(address?.id)}
            className="btn btn-sm add-button w-100"
          >
            <i data-feather="trash-2"></i>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  )
}
