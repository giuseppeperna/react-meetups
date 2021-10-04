import {useContext} from 'react';
import classes from './MeetupItem.module.scss';
import Card from '../ui/Card';
import PropTypes from 'prop-types';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {

    // useContext connects the context state to the component
    const favoritesCtx = useContext(FavoritesContext);

    // Call the itemIsFavorite method from the context
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler() {
        // if the item is already in the favorites list
        if (itemIsFavorite) {
            // remove it from the array
            favoritesCtx.removeFavorite(props.id)
        } else {
            // else, add to favorites by creating a new object
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }

    function removeMeetup() {
        fetch(
            `https://react-meetup-api-2efe3-default-rtdb.firebaseio.com/meetups/${props.id}.json`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
        }).then(() => {
            // Reload the homepage
            window.location.reload();
        });
    }

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        { itemIsFavorite ? 'Remove from Favorites'
                            : 'To Favorites'
                        }
                    </button>
                    <button className={classes.delete} onClick={removeMeetup}>
                        Delete Meetup
                    </button>
                </div>
            </li>
        </Card>
    )
}

MeetupItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string
}

export default MeetupItem;