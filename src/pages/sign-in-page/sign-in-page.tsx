import { ChangeEventHandler, FormEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppRoute } from '../../const';
import { FormDataLogin } from '../../schemas/forms';
import { fetchLogin } from '../../store/api-action';
import { getErrorUser } from '../../store/user/selectors';

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handlerFieldChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handlerSubmit(evt: FormEvent<HTMLButtonElement>) {
    evt.preventDefault();
    if (validate()) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const err = (await dispatch(fetchLogin(formData)) as unknown as { error: string }).error; // ???
      if (!err) {
        navigate(AppRoute.Main);
      }
    }
  }

  return (
    <div className="user-page">
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
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={handlerFieldChange}
                value={formData.email}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={handlerFieldChange}
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
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handlerSubmit}
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
