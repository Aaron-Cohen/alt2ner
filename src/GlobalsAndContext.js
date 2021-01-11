import React from 'react';
/**
 * Maps a letter representation of a musical note (as a String) to a integer value.
 * Accepts natural notes, and notes followed by a # or b accidental for sharp and flat
 * resepctively.
 * 
 * @param {String} note 
 */
export const mapNoteToNumber = (note) => {
    note = note.trim();
    // Error trap invalid input
    if (typeof note !== 'string' || note.length === 0 || note.length > 2) {
        throw new Error("Invalid input: must be string of length 1 or 2");
    }

    // Get root note before flats/sharps are applied
    let root = null;
    switch (note.toUpperCase().charAt(0)) {
        case 'A':
            root = 1;
            break;
        case 'B':
            root = 3;
            break;
        case 'C':
            root = 4;
            break;
        case 'D':
            root = 6;
            break;
        case 'E':
            root = 8;
            break;
        case 'F':
            root = 9;
            break;
        case 'G':
            root = 11;
            break;
        default:
            throw new Error("Root of note must be in set [A-G], case insensitive");
    }

    // If note contains accidental in second character, apply sharp/flat logic
    if (note.length === 2)
        switch (note.toLowerCase().charAt(1)) {
            case '#':
                root += 1;
                break;
            case 'b':
                root -= 1;
                break;
            default:
                throw new Error("Second character of string must be b or # accidentals");
        }

    return root;
}

/**
 * Maps a numerical representation of a musical note to a String representation
 * consisting of a root, and an accidental of # or b if applicable for a sharp or 
 * flat note
 * 
 * @param {*} note 
 */
export const mapNumberToNote = (note, accidental) => {
    // Wrap notes around chromatic octave before continuing
    note = note % 12

    // Trap errors
    if (typeof note !== 'number') {
        throw new Error("Invalid input: must be number")
    }
    switch (note) {
        case 0:
            return accidental === 'Flats' ? 'Ab' : 'G#'
        case 1:
            return 'A'
        case 2:
            return accidental === 'Flats' ? 'Bb' : 'A#'
        case 3:
            return 'B'
        case 4:
            return 'C'
        case 5:
            return accidental === 'Flats' ? 'Db' : 'C#'
        case 6:
            return 'D'
        case 7:
            return accidental === 'Flats' ? 'Eb' : 'D#'
        case 8:
            return 'E'
        case 9:
            return 'F'
        case 10:
            return accidental === 'Flats' ? 'Gb' : 'F#'
        case 11:
            return 'G'
        default:
            throw new Error("Unable to map note to numerical value")
    }
}

// Tuning should always be expressed numerically and not lexigraphically.
// This allows for dynamic switching between equivalent sharp/flats when
// global context changes.
const defaultTuningMap = () => {
    const tuning = [];
    ['E', 'B', 'G#', 'D', 'A', 'E'].forEach(note => {
        tuning.push(mapNoteToNumber(note));
    })
    return tuning;
}
export const defaultTuning = defaultTuningMap();

export const fretCount = 21;
export const GlobalContext = React.createContext();
export default GlobalContext;