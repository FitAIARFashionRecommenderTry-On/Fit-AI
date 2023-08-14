import React, { useState } from 'react';
import logo from './images/walmartLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './compo.css';
import {Shop} from './Shop';
import { Body } from './Body';

export const Header = () => {

  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              loading="lazy"
              alt="Walmart"
              className="db"
              height="32"
              src={logo}
              width="130"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active gaping" aria-current="page" href="#">
                Department
              </a>
              <a className="nav-link active gaping" href="#">
                Service
              </a>
              <a className="nav-link active gaping" href="#">
                <form className="d-flex">
                  <input
                    className="form-control me-2 radius search"
                    type="search"
                    placeholder="Search Walmart"
                    aria-label="Search"
                  />
                </form>
              </a>
              <a className="nav-link active gaping" href="#">
                Record My Account
              </a>
              <a className="nav-link active">
                Sign Account
              </a>
              {/* {showOutput ? (<Shop />) : (<Body/>)} */}
            </div>
            {/* {showOutput ? (<Shop />) : (<Body/>)} */}
          </div>
        </div>
      </nav>
      {/* {showOutput ? (<Shop />) : (<Body/>)} */}
    </div>
              {/* {showOutput ? (<Shop />) : (<Body/>)} */}
    </div>
  );
};
