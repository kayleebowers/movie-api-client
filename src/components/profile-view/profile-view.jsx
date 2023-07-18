import { ProfileInformation } from "./profile-information/profile-information";
import { ProfileUpdate } from "./profile-update/profile-update";
import { FavoriteMovies } from "./favorite-movies/favorite-movies";

import { useParams } from "react-router";

export const ProfileView = ({user, token}) => {
    const { username } = useParams();

    //get current user data from users API
    fetch(`https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}`}
    }).then((response) => response.json())
    .then((user) => {
        return {
            id: user._id,
            Username: user.Username,
            Email: user.Email,
            Birthday: user.Birthday,
            Favorites: user.Favorites
        }
    })
    .catch((error) => {
        console.error(error);
    })

    return (
        <>
            <ProfileInformation user={user}/>
            <ProfileUpdate user={user}/>
            <FavoriteMovies favorites={user.Favorites}/>
        </>
    )
}