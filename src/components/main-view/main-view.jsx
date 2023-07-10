import {useState} from "react";

export const MainView = () => {
    //set movies state to array
    const [movies, setMovies] = useState([
        {
            id: 1,
            Title: "Titanic",
            Description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            Genre: {
                Name: "Drama",
                Description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
            },
            Director: {
                Name: "James Cameron",
                Description: "James Cameron, (born August 16, 1954, Kapuskasing, Ontario, Canada), Canadian filmmaker known for his expansive vision and innovative special-effects films, most notably Titanic (1997), for which he won an Academy Award for best director, and Avatar (2009)."
            },
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
            Featured: false
        },
        {
            id: 2,
            Title: "Spirited Away",
            Description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
            Genre: {
                Name: "Animation",
                Description: "Animation is a method in which pictures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film."
            },
            Director: {
                Name: "Hayao Miyazaki",
                Description: "Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation."
            },
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
            Featured: true
        },
        {
            id: 3,
            Title: "Silence of the Lambs",
            Description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
            Genre: {
                Name: "Thriller",
                Description: "Thriller is a genre of fiction with numerous, often overlapping, sub genres, including crime, horror and detective fiction. Thrillers are characterized and defined by the moods they elicit, giving their audiences heightened feelings of suspense, excitement, surprise, anticipation and anxiety."
            },
            Director: {
                Name: "Jonathan Demme",
                Description: "Robert Jonathan Demme was an American filmmaker." 
            },
            ImagePath: "",
            Featured: false
        }
    ])

    //check for no movies
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }
    //return list of movies
    return (
        <div>
            {movies.map((movie) => {
                return <div>{movie.Title}</div>;
            })}
        </div>
    )
}