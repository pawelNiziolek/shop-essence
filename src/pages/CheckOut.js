import React from "react";
import ShopCheckHeader from "../components/ShopCheckHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivWrapAll = styled.div`
  display: flex;
  margin: 0 50px;
`;

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  padding: 60px 50px;
`;

const CheckOut = () => {
  return (
    <>
      <ShopCheckHeader title="check out" />
      <DivWrapAll>
        <DivWrap width="60%">
          <div>
            <div>
              <h5>Billing Address</h5>
            </div>

            <form action="#" method="post">
              <div>
                <div>
                  <label htmlFor="first_name">
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    onChange={() => {}}
                    value=""
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name">
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    onChange={() => {}}
                    value=""
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    onChange={() => {}}
                    value=""
                  />
                </div>
                <div>
                  <label htmlFor="country">
                    Country <span>*</span>
                  </label>
                  <select id="country">
                    <option onChange={() => {}} value="usa">
                      United States
                    </option>
                    <option onChange={() => {}} value="uk">
                      United Kingdom
                    </option>
                    <option onChange={() => {}} value="ger">
                      Germany
                    </option>
                    <option onChange={() => {}} value="fra">
                      France
                    </option>
                    <option onChange={() => {}} value="ind">
                      India
                    </option>
                    <option onChange={() => {}} value="aus">
                      Australia
                    </option>
                    <option onChange={() => {}} value="bra">
                      Brazil
                    </option>
                    <option onChange={() => {}} value="cana">
                      Canada
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="street_address">
                    Address <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="street_address"
                    onChange={() => {}}
                    value=""
                  />
                  <input
                    type="text"
                    id="street_address2"
                    onChange={() => {}}
                    value=""
                  />
                </div>
                <div>
                  <label htmlFor="postcode">
                    Postcode <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    onChange={() => {}}
                    value=""
                  />
                </div>
                <div>
                  <label htmlFor="city">
                    Town/City <span>*</span>
                  </label>
                  <input type="text" id="city" onChange={() => {}} value="" />
                </div>
                <div>
                  <label htmlFor="state">
                    Province <span>*</span>
                  </label>
                  <input type="text" id="state" onChange={() => {}} value="" />
                </div>
                <div>
                  <label htmlFor="phone_number">
                    Phone No <span>*</span>
                  </label>
                  <input
                    type="number"
                    id="phone_number"
                    min="0"
                    onChange={() => {}}
                    value=""
                  />
                </div>
                <div>
                  <label htmlFor="email_address">
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    onChange={() => {}}
                    value=""
                  />
                </div>

                <div>
                  <div>
                    <input type="checkbox" id="customCheck1" />
                    <label htmlFor="customCheck1">Terms and conitions</label>
                  </div>
                  <div>
                    <input type="checkbox" id="customCheck2" />
                    <label htmlFor="customCheck2">Create an accout</label>
                  </div>
                  <div>
                    <input type="checkbox" id="customCheck3" />
                    <label htmlFor="customCheck3">
                      Subscribe to our newsletter
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </DivWrap>

        <DivWrap width="40%">
          <div>
            <div>
              <h5>Your Order</h5>
              <p>The Details</p>
            </div>

            <ul>
              <li>
                <span>Product</span> <span>Total</span>
              </li>
              <li>
                <span>Cocktail Yellow dress</span> <span>$59.90</span>
              </li>
              <li>
                <span>Subtotal</span> <span>$59.90</span>
              </li>
              <li>
                <span>Shipping</span> <span>Free</span>
              </li>
              <li>
                <span>Total</span> <span>$59.90</span>
              </li>
            </ul>

            <div id="accordion" role="tablist">
              <div>
                <div role="tab" id="headingOne">
                  <h6>
                    <a
                      data-toggle="collapse"
                      href="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <i className="fa fa-circle-o mr-3" />
                      Paypal
                    </a>
                  </h6>
                </div>

                <div
                  id="collapseOne"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin pharetra tempor so dales. Phasellus sagittis auctor
                      gravida. Integ er bibendum sodales arcu id te mpus. Ut
                      consectetur lacus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div role="tab" id="headingTwo">
                <h6>
                  <a
                    data-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i className="fa fa-circle-o mr-3" />
                    cash on delievery
                  </a>
                </h6>
              </div>
              <div
                id="collapseTwo"
                role="tabpanel"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo quis in veritatis officia inventore, tempore
                    provident dignissimos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div role="tab" id="headingThree">
                <h6 className="mb-0">
                  <a
                    data-toggle="collapse"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i className="fa fa-circle-o mr-3" />
                    credit card
                  </a>
                </h6>
              </div>
              <div
                id="collapseThree"
                role="tabpanel"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse quo sint repudiandae suscipit ab soluta delectus
                    voluptate, vero vitae
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div role="tab" id="headingFour">
                <h6 className="mb-0">
                  <a
                    data-toggle="collapse"
                    href="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    <i className="fa fa-circle-o mr-3" />
                    direct bank transfer
                  </a>
                </h6>
              </div>
              <div
                id="collapseFour"
                role="tabpanel"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est cum autem eveniet saepe fugit, impedit magni.
                  </p>
                </div>
              </div>
            </div>
            <Link to="#">Place Order</Link>
          </div>
        </DivWrap>
      </DivWrapAll>
    </>
  );
};

export default CheckOut;
