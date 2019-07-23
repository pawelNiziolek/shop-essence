import React from "react";
import ShopCheckHeader from "../components/ShopCheckHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";

const DivWrapAll = styled.div`
  display: flex;
  margin: 80px;
`;

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 15px;
  margin: 50px auto;
`;

const H1 = styled.h1`
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 8px;
`;

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 20px;
`;

const InputForm = styled.input`
  display: block;
  height: 42px;
  border: 1px solid #ebebeb;
  border-radius: 0;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  margin-top: 8px;
  transition: 0.15s;
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    border-color: rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`;

const SelectForm = styled.select`
  height: 42px;
  border: 1px solid #ebebeb;
  background-color: transparent;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: 0.15s;
`;

const LabelBox = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
`;

const InputBox = styled.input`
  margin: 10px;
`;

const SpanErr = styled.span`
  color: red;
  padding: 5px 0;
  font-weight: 200;
  text-transform: lowercase;
`;

const InputSub = styled.input``;

const CheckOut = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = values => console.log(values);
  return (
    <>
      <ShopCheckHeader title="checkout" />
      <DivWrapAll>
        <DivWrap>
          <H1>billing address</H1>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <LabelForm>
              FIRST NAME *
              <InputForm
                type="text"
                name="firstName"
                ref={register({ required: "Required", maxLength: 80 })}
              />
            </LabelForm>
            <LabelForm>
              LAST NAME *
              <InputForm
                type="text"
                name="lastName"
                ref={register({ required: "Required", maxLength: 100 })}
              />
            </LabelForm>
            <LabelForm>
              COMPANY NAME
              <InputForm type="text" name="company" ref={register} />
            </LabelForm>
            <LabelForm>
              COUNTRY *
              <SelectForm
                name="country"
                ref={register({ required: "Required" })}
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Poland">Poland</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
              </SelectForm>
            </LabelForm>
            <LabelForm>
              ADDRESS *
              <InputForm
                type="text"
                name="address"
                ref={register({
                  required: "Required",
                  minLength: 5,
                  maxLength: 15
                })}
              />
            </LabelForm>
            <LabelForm>
              POSTCODE *
              <InputForm
                type="text"
                name="postcode"
                ref={register({ required: "Required" })}
              />
            </LabelForm>
            <LabelForm>
              TOWN/CITY *
              <InputForm
                type="text"
                name="townCity"
                ref={register({ required: "Required" })}
              />
            </LabelForm>
            <LabelForm>
              PROVINCE *
              <InputForm
                type="text"
                name="province"
                ref={register({ required: "Required" })}
              />
            </LabelForm>
            <LabelForm>
              PHONE NO *
              <InputForm
                type="text"
                name="phoneNo"
                ref={register({ required: "Required" })}
              />
            </LabelForm>
            <LabelForm>
              EMAIL ADDRESS *
              <InputForm
                type="text"
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                  }
                })}
              />
              <SpanErr>{errors.email && errors.email.message}</SpanErr>
            </LabelForm>
            <LabelBox>
              <InputBox type="checkbox" name="terms" ref={register} />
              TERMS AND CONDITIONS
            </LabelBox>
            <LabelBox>
              <InputBox type="checkbox" name="createAcount" ref={register} />
              CREATE AN ACCOUNT
            </LabelBox>
            <LabelBox>
              <InputBox type="checkbox" name="subscribe" ref={register} />
              SUBSCRIBE TO OUR NEWSLETTER
            </LabelBox>
          </FormWrap>
        </DivWrap>
        <DivWrap>
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
                  // aria-LabelFormledby="headingOne"
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
                // aria-LabelFormledby="headingTwo"
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
                // aria-LabelFormledby="headingThree"
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
                // aria-LabelFormledby="headingThree"
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
