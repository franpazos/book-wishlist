export const handleNewGenre = (add, newGenre, allGenres) => {

    if (add) {
        allGenres.push(newGenre);
    } else {
        const index = allGenres.indexOf(newGenre);
        if (index !== -1) {
            allGenres.splice(index, 1);
        }
    }

    return allGenres
}