import React, { useState } from 'react'
import { QuizService } from './services/QuizService'
import { Question } from './types/QuestionType'
import QuestionsCard from './components/QuestionsCard'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [data, setData] = useState<Question[]>([])
  const [level, setLevel] = useState<string>('easy')
  const [qs, setQs] = useState<string>('5')
  const [id,setId]=useState<number>(9)
  const [name,setName]=useState<string>('General Knowledge')
  const history=useHistory()

  const handleLevel = (e: React.FormEvent<EventTarget>) => {
    const choice: string = (e.currentTarget as HTMLTextAreaElement).id
    setLevel(choice)
  }

  const handleStart = () => {
    QuizService(parseInt(qs), id, level, 'multiple').then(questions => {
      const quiz: Question[] = questions.map(q => {
        return {

          question: q.question,
          option: q.incorrect_answers.concat(q.correct_answer).sort(() => Math.random() - 0.5),
          correct_answer: q.correct_answer

        }
      })
      setData(quiz)
    })
    history.push('/quiz/start')
  }

  const handleQs = (e: React.FormEvent<EventTarget>) => setQs((e.currentTarget as HTMLTextAreaElement).value)


  const handleCategoryId = (id:number,name:string) => {
    setId(id)
    setName(name)
  }

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home handleCategoryId={handleCategoryId} CategoryId={id} handleQs={handleQs} handleStart={handleStart} handleLevel={handleLevel} qs={qs} level={level} />
        </Route>
        <Route exact path='/quiz/start'>
          <QuestionsCard data={data} qs={qs} level={level} name={name} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
