import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import s from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from '../Button/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => toast.error('Invalid data'));

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
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" autoComplete="on" />
          </label>
          <Button type="submit">Login</Button>

          <p className={s.text}>
            You do not have account yet? <Link to="/register">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
