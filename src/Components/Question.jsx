import { useEffect, useState } from "react";
import { getSuggAnswers, getAnswer } from "../data/quiz_data";
import SuggAnswer from "./SuggAnswer";
import Results from "./Results";
import { Link } from "react-router";

export default function Question(props) {
  const question = props.question;
  const progressionColor = props.progressionColor;
  const suggAnswers = getSuggAnswers(question.id);
  const currentQuestion = props.currentQuestion;
  const nb_questions = props.nb_questions;
  const grade = props.grade;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  let answerStatus;

  answerStatus = selectedAnswer?.is_correct;

  useEffect(() => {
    if (answerStatus && isRevealed) {
      props.incrementGrade();
    }
  }, [answerStatus, isRevealed]);

  function handleChoice(id) {
    let answer = getAnswer(id);

    setSelectedAnswer(answer);
  }

  function revealAnswer() {
    setIsRevealed(true);
    // setSelectedAnswer(null)
  }

  function handleGoToNext() {
    setIsRevealed(false);
    props.goToNext();
  }

  const content = !isRevealed ? (
    <div className="suggested-questions-area flex flex-col gap-4 mt-4 items-center">
      {suggAnswers.map((suggAnswer) => {
        return (
          <SuggAnswer
            key={suggAnswer.id}
            answer={suggAnswer.text}
            onClick={() => handleChoice(suggAnswer.id)}
          />
        );
      })}
    </div>
  ) : (
    <div>
      {
        //Tu es dans cette zone pour gérer l'affichage des réponses
        answerStatus ? (
          <div className="user-answer mt-4 py-2 flex justify-center text-slate-800 bg-linear-to-r from-green-300 to-white border border-stone-300">
            Réponse&nbsp;
            <span className="font-bold underline decoration-green-500 decoration-2">
              {selectedAnswer?.text}
            </span>
            &nbsp;
            <span className="px-2 font-bold border border-white text-white bg-green-500">
              Correcte
            </span>
          </div>
        ) : (
          <div className="user-answer py-2 flex justify-center text-slate-800 bg-linear-to-r from-red-300 to-white border border-stone-300">
            Réponse&nbsp;
            <span className="font-bold line-through decoration-red-500 decoration-2">
              {selectedAnswer?.text}
            </span>
            &nbsp;
            <span className="px-2 font-bold border border-white text-white bg-red-500">
              Incorrecte
            </span>
          </div>
        )
      }
      <div className="explanation-section mt-5 p-8 text-slate-800 bg-linear-to-r from-green-300 to-white border border-stone-300">
        <div className="explanation-title font-bold text-md text-stone-600">
          🪔 EXPLICATON
        </div>

        <div className="explanation mt-3 text-stone-700">
          {question?.explanation}
        </div>
      </div>
    </div>
  );

  const finishOrHomeButton = !isFinished ? (
    <button
      onClick={() => setIsFinished(true)}
      className="cursor-pointer bg-orange-700 hover:bg-orange-500 hover:scale-102 text-xl text-white px-6 py-1.5 rounded-sm"
    >
      Terminer
    </button>
  ) : (
    <Link to="/">
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        Retour aux choix de quiz
      </button>
    </Link>
  );

  const nextOrFinishButton =
    currentQuestion != nb_questions - 1 ? (
      <button
        onClick={handleGoToNext}
        className="cursor-pointer bg-blue-700 hover:bg-blue-500 hover:scale-102 text-xl text-white px-6 py-1.5 rounded-sm"
      >
        Suivant
      </button>
    ) : (
      finishOrHomeButton
    );

  const buttonContent = !isRevealed ? (
    <button
      onClick={revealAnswer}
      className="cursor-pointer bg-blue-700 hover:bg-blue-500 hover:scale-102 text-xl text-white px-6 py-1.5 rounded-sm"
      // disabled = {selectedAnswer == null ? "disabled" : "enabled"}
    >
      Vérifier
    </button>
  ) : (
    nextOrFinishButton
  );

  return (
    <>
      <div
        className="question-text p-6 text-white flex justify-center items-center h-10 rounded-md shadow-lg"
        style={{ backgroundColor: progressionColor }}
      >
        <h3>{question.text}</h3>
      </div>
      {/* <div>Réponse choisie: {selectedAnswer?.text}</div> */}
      {!isFinished ? content : <Results grade={grade} />}
      <div className="mt-10 flex justify-center">{buttonContent}</div>
    </>
  );
}
