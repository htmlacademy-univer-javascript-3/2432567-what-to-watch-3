import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import cn from 'classnames';


function Logo({ additionalClass }: { additionalClass?: string }) {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={cn('logo__link', additionalClass)}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
