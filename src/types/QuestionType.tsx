export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Question = {
    question:string
    option:string[]
    correct_answer:string
  }