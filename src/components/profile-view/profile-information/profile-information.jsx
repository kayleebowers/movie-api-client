export const ProfileInformation = ({user}) => {
    
    return (
        <>
            <h2>Your information</h2>
            <p>Username: {user.Username}</p>
            <p>Email: {user.Email}</p>
            <p>Birthday: {user.Birthday}</p>
        </>
    )
}