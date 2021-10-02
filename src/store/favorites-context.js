import { createContext, useState } from 'react';

// Component with context state
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

/**
 * It handles all the components that use the context by wrapping them in
 * <FavoritesContext.Provider></FavoritesContext.Provider>
 * It handles also the context state.
 */
function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    // Add meetup to favorites
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    // Remove meetup from favorites
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup =>
                meetup !== meetupId);
        })
    }

    // Return true if a meetup is part of favorites
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}