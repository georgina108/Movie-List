var MovieList = ({movies, handleSearch}) => (
   <tbody>
   <tr>
    <th>
      <Search handleSearch={handleSearch}/>
    </th>
   </tr>
    {movies.map((movie, i) => 
     <tr key={i}>
      <td>{movie.title}</td>
     </tr>
    )} 
   </tbody>

)

window.MovieList = MovieList;

