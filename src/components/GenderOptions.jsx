function GenderOptions({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <select name='selectedGender'>
                <option value="">select</option>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button>Filter gender</button>
        </form>
    );
}

export default GenderOptions