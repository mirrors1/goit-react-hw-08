import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from './RegisterForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));

    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Form className={s.form}>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" autoComplete="on" />
          </label>
          <Button type="submit">Register</Button>
          <p className={s.text}>
            You already have account? <Link to="/login">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
