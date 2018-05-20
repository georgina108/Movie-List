var MovieList = ({movies}) => (
   <tbody>
    {movies.map((movie, i) => 
     <tr key={i}>
      <td>{movie.title}</td>
     </tr>
    )} 
   </tbody>

)

window.MovieList = MovieList;

