const Filter = ({filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z" fill="#000"/></svg>  Filtrar: </h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <div className="botoes-filter">
                       <button onClick={() => setSort("Asc")} class="button-width"><svg width="10px" height="10px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 0C3.58172 3.86258e-07 -3.86258e-07 3.58172 0 8C3.86258e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -3.86258e-07 8 0ZM4 8H7L7 13H9V8L12 8V7L8 3L4 7V8Z" fill="#fff" fill-rule="evenodd"/></svg>   A - Z</button>
                       <button onClick={() => setSort("Desc")} class="button-width"><svg width="10px" height="10px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12 8H9V3H7V8H4V9L8 13L12 9V8Z" fill="#fff" fill-rule="evenodd"/></svg>  Z - A</button>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default Filter