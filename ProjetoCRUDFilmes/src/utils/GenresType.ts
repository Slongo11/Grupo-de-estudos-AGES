export enum GenresType {
    ACTION = 'action',
    COMEDY = 'comedy',
    DRAMA = 'drama',
    FANTASY = 'fantasy',
    HORROR = 'horror',
    MYSTERY = 'mystery',
    ROMANCE = 'romance',
    THRILLER = 'thriller',
}

/**
 * Valida o valor que deve estar presente na Enum.
 * @param nomeEnum Ao qual será validada, conforme a Enum.
 * @returns true caso exista o genero na Enum, ou false quando não existir.
 */
export function validateEnum(nomeEnum: String) {
    for (const type of Object.values(GenresType)) {
        if (nomeEnum.toLocaleLowerCase() === type) {
            return true;
        }
    }

    return false;
}
