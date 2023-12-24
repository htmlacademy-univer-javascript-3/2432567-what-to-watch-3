import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function UnauthorizationUserBlock(): JSX.Element {
  return (
    <ul className="user-block" data-testid='unauthorization-block'>
      <li className="user-block__item">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign In</Link>
      </li>
    </ul>
  );
}

export default UnauthorizationUserBlock;
