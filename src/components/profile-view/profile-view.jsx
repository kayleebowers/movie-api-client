import { ProfileInformation } from "./profile-information/profile-information";
import { ProfileUpdate } from "./profile-update/profile-update";
import { FavoriteMovies } from "./favorite-movies/favorite-movies";

export const ProfileView = () => {
    return (
        <>
            <ProfileInformation />
            <ProfileUpdate />
            <FavoriteMovies />
        </>
    )
}