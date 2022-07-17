import { useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import Form from "../../utilities/Forms";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-wrapper">
      <div className="card dash-inner">
        <div>
          <div className="d-flex">
            <a type="button" className="btn btn-success btn-sm ms-auto" href="/create-product">
              Add new product
            </a>
          </div>
          <div className="table-responsive px-md-4 px-2 pt-3">
            <table className="table table-borderless">
              <tbody>
                <tr className="border-bottom">
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          className="pic"
                          src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                        />
                      </div>
                      <div className="ps-3 d-flex flex-column justify-content">
                        <p className="fw-bold">
                          Product<span className="ps-1">1</span>
                        </p>
                        <small className=" d-flex">
                          <span className=" text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <p className="pe-3">
                        <span className="red">$45.00</span>
                      </p>
                      <p className="text-muted text-decoration-line-through">
                        $55.00
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="pe-3 text-muted">Stock:</span>
                      <span className="pe-3">10000</span>
                      <div className="col-sm-3">
                        <a
                          type="button"
                          className="btn btn-primary btn-sm"
                          href="/edit-product"
                        >
                          Edit
                        </a>
                      </div>
                      <div className="col-sm-3">
                        <a
                          type="button"
                          className="btn btn-danger btn-sm"
                          href="/delete-product"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          className="pic"
                          src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                        />
                      </div>
                      <div className="ps-3 d-flex flex-column justify-content">
                        <p className="fw-bold">
                          Product<span className="ps-1">2</span>
                        </p>
                        <small className=" d-flex">
                          <span className=" text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <p className="pe-3">
                        <span className="red">$45.00</span>
                      </p>
                      <p className="text-muted text-decoration-line-through">
                        $55.00
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="pe-3 text-muted">Stock:</span>
                      <span className="pe-3">10000</span>
                      <div className="col-sm-3">
                        <a
                          type="button"
                          className="btn btn-primary btn-sm"
                          href="/edit-product"
                        >
                          Edit
                        </a>
                      </div>
                      <div className="col-sm-3">
                        <a
                          type="button"
                          className="btn btn-danger btn-sm"
                          href="/delete-product"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          className="pic"
                          src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                        />
                      </div>
                      <div className="ps-3 d-flex flex-column justify-content">
                        <p className="fw-bold">
                          Product<span className="ps-1">3</span>
                        </p>
                        <small className=" d-flex">
                          <span className=" text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <p className="pe-3">
                        <span className="red">$45.00</span>
                      </p>
                      <p className="text-muted text-decoration-line-through">
                        $55.00
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="pe-3 text-muted">Stock:</span>
                      <span className="pe-3">10000</span>
                      <div className="col-sm-3">
                        <a
                          type="button"
                          className="btn btn-primary btn-sm"
                          href="/edit-product"
                        >
                          Edit
                        </a>
                      </div>
                      <div className="col-sm-3">
                        <a
                          type="button"
                          className="btn btn-danger btn-sm"
                          href="/delete-product"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
