import axios from 'axios'
import { Quiz } from '.././types/QuestionType'

export const QuizService = async (amount: number, category: number, difficulty: string, type: string): Promise<Quiz[]> => {
    const questions: Quiz[] = (await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)).data.results
    return questions
}


