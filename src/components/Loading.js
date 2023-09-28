import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function Loading() {
  return (
    <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
        <Helmet>
            <title>Loading... | Ecowatt</title>
        </Helmet>
        <InfinitySpin
          type="ThreeDots"
          color="#2A3466"
          height={220}
          width={220}
        />
    </div>
  );
}
