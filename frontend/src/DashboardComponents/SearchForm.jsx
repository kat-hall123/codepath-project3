
const SearchForm = ({ query, setQuery }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClear = () => {
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                placeholder="Search by title..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Search</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
    )
}

export default SearchForm;