import { ChangeEventHandler, FormEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FormDataLogin } from '../../schemas/forms';
import { login } from '../../store/api-action/api-action';
import { getErrorUser } from '../../store/user/selectors';
import cn from 'classnames';
import { Helmet } from 'react-helmet-async';

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const message = useAppSelector(getErrorUser) as boolean;

  const [errors, setErrors] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: ''
  });

  const validateEmail = () => !formData.email.match(/[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]{2,4}$/);
  const validatePassword = () => !formData.password.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/);

  const validate = (): boolean => {
    let hasError = false;
    const curErrors = [];
    if (validateEmail()) {
      curErrors.push('Неполадки с email');
      hasError = true;
    }
    if (validatePassword()) {
      curErrors.push('Неполадки с паролем');
      hasError = true;
    }
    setErrors(curErrors);
    return !hasError;
  };

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSignInSubmit(evt: FormEvent<HTMLButtonElement>) {
    evt.preventDefault();
    if (validate()) {
      dispatch(login(formData));
    }
  }

  return (
    <div className="user-page">
      <Helmet>
        <title>Вход</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {
            (errors.length > 0 || message) && (
              <div className="sign-in__message">
                {(errors.length ? errors : ['Чёт с данными не то']).map((err) => <p key={err}>{err}</p>)}
              </div>
            )
          }
          <div className="sign-in__fields">
            <div className={cn('sign-in__field', errors.indexOf('Неполадки с email') !== -1 && 'sign-in__field--error')}>
              <input
                className='sign-in__input'
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                data-testid='user-email'
                onChange={handleFieldChange}
                value={formData.email}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className={cn('sign-in__field', errors.indexOf('Неполадки с паролем') !== -1 && 'sign-in__field--error')}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                data-testid='user-password'
                onChange={handleFieldChange}
                value={formData.password}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={handleSignInSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
