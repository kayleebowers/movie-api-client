import { ProfileInformation } from "./profile-information/profile-information";
import { ProfileUpdate } from "./profile-update/profile-update";
import { FavoriteMovies } from "./favorite-movies/favorite-movies";

import { useParams } from "react-router";

export const ProfileView = ({user}) => {
    const { username } = useParams();

    const currentUser = user.find((u) => u.Username = username);

    return (
        <>
            <ProfileInformation currentUser={currentUser} />
            <ProfileUpdate />
            <FavoriteMovies />
        </>
    )
}