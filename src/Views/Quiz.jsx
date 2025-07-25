import { useParams } from "react-router";
import { getQuestions } from "../data/quiz_data";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import Question from "../Components/Question";

export default function Quiz() {
  const { id } = useParams();
  const { quiz, questions } = getQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [grade, setGrade] = useState(0);
  const [progressionColor, setProgressionColor] = useState("#6869d1ff");
  const nb_questions = questions.length;
  let progression = ((currentQuestion + 1) * 100) / nb_questions; // currentQuestion est un index donc il faut faire plus 1.

  useEffect(() => {
    if (progression >= 100 || progression >= 95) {
      setProgressionColor("#f87d0bff");
    } else if (progression >= 80) {
      setProgressionColor("#dda509ff");
    } else if (progression >= 50) {
      setProgressionColor("#0b47b6ff");
    } else if (progression >= 10) {
      setProgressionColor("#6869d1ff");
    } else {
      setProgressionColor("#4d4e75ff");
    }
  }, [progression]);

  let label = `Start 🚀 ${progression} %`;
  if (progression === 100) {
    label = `Nirvana 👼🔥🎇🏆 ${progression} %`;
  } else if (progression >= 95) {
    label = `Allez ! Allez ! 🔥 ${progression} %`;
  } else if (progression >= 80) {
    label = `Presque arrivé 🌠 ${progression} %`;
  } else if (progression >= 50) {
    label = `Pull bro 💪 ${progression} %`;
  } else if (progression >= 10) {
    label = `Relax ? 🧘‍♂️ ${progression} %`;
  }

  const progress_content = (
    <ProgressBar
      completed={progression}
      customLabel={label}
      bgColor={progressionColor}
      baseBgColor="#ace6f0ff"
    />
  );

  function goToNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function incrementGrade() {
    setGrade(grade + 1);
  }

  console.log("content", questions.length);
  return (
    <>
      <div>
        <div className="quiz-title h-25 flex justify-center items-center mt-10 bg-sky-100 mx-1">
          <h2 className="text-2xl font-bold text-blue-600">
            Quiz {quiz.title}
          </h2>
        </div>

        <div className="progress-bar h-10 w-full mt-10">{progress_content}</div>

        <div className="questions-section flex flex-col gap-5 justify-center items-center shadow-md rounded-sm pb-20">
          <div className="text-white bg-blue-500 rounded-full px-2 mt-5">
            Question{" "}
            <span className="text-green-300 font-bold">
              {currentQuestion + 1}
            </span>{" "}
            / {nb_questions}
          </div>
          {/* <div>Note: {grade}</div> */}
          <div className="w-full px-5 lg:px-20">
            <Question
              question={questions[currentQuestion]}
              progressionColor={progressionColor}
              currentQuestion={currentQuestion}
              goToNext={goToNext}
              incrementGrade={incrementGrade}
              grade={grade}
            />
          </div>
        </div>
      </div>
    </>
  );
}
