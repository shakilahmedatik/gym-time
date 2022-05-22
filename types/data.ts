export type Difficulty = "easy" | "normal" | "hard"
export type SequenceType = "exercise" | "break" | "stretch"

export interface Workout{
    slug: string,
    name: string,
    duration: number,
    difficulty: Difficulty,
    sequence: Array<SequenceItem>
}

export interface SequenceItem {
    slug: string,
    name: string,
    type: SequenceType,
    reps?: number,
    duration: number
}




