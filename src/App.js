import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <section class="body-wrapper">
        <div>
          <Link class="btn btn-1" to="/search">
            Search By Query
          </Link>
        </div>
        <div>
          <Link class="btn btn-1" to="/random">
            Get Random Advice
          </Link>
        </div>
        <div>
          <Link class="btn btn-1" to="/searchbyid">
            Search By Id
          </Link>
        </div>
      </section>
    </div>
  );
}
