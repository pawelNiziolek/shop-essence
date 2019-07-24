import React from "react";
import styled from "styled-components";
import useForm from "react-hook-form";
import CheckoutArticleOrder from "../components/CheckoutArticleOrder";

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 15px;
  margin: 50px 0;
`;

const H1 = styled.h1`
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const FormWrap = styled.form`
  display: flex;
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
  color: #212529;
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

const DivWrapOrder = styled(DivWrap)`
  padding: 0 15px 0 110px;
  margin: 0;
`;

const CheckoutForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = values => console.log(values);
  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <DivWrap>
        <H1>billing address</H1>
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
          <SelectForm name="country" ref={register({ required: "Required" })}>
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
      </DivWrap>
      <DivWrapOrder>
        <CheckoutArticleOrder />
      </DivWrapOrder>
    </FormWrap>
  );
};

export default CheckoutForm;
