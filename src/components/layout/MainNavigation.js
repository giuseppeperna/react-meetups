import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
function MainNavigation(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const totalFavorites = favoritesCtx.totalFavorites;
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                        <span className={classes.badge}>
                            {totalFavorites}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;