const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h2><svg fill="#000000" width="20px" height="20px" viewBox="0 0 256.00098 256.00098" id="Flat" xmlns="http://www.w3.org/2000/svg">
  <path d="M232.47656,215.51563l-40.67773-40.67774a96.10791,96.10791,0,1,0-16.97168,16.96973l40.67871,40.67871a12.0001,12.0001,0,1,0,16.9707-16.9707ZM43.99707,116a72,72,0,1,1,72,72A72.08124,72.08124,0,0,1,43.99707,116Z"/>
</svg> Pesquisar</h2>
        <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Digite para pesquisar...'    
        />
    </div>
  )
}

export default Search