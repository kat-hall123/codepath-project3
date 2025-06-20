
const FilterTags = ({ selectedCategory, setSelectedCategory, setSortByRecent }) => {
    const categories = ['All', 'Celebration', 'Thank you', 'Inspiration'];
    
    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category)
                        setSortByRecent(false);
                    }}
                >
                    {category}
                </button>
            ))}
            <button
                onClick={() => {
                    setSelectedCategory('All');
                    setSortByRecent(true);
                }}
            >
                Recent
            </button>
        </div>

    )
}

export default FilterTags;