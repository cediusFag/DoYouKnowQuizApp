import { Link } from "react-router";
import { quizzes } from "../data/quiz_data";

export default function Home() {
  return (
    <>
      <main className="h-[80nh] flex justify-center items-center p-10">
        <div className="quizzes flex flex-col gap-5 justify-center items-center md:grid md:grid-cols-3">
          {quizzes.map((quiz) => {
            return (
              <div
                key={quiz.id}
                className="quiz w-70 text-white bg-sky-400 pt-4 rounded-sm shadow-md"
              >
                <div className="p-4 flex flex-col justify-center items-center">
                  <div>{quiz.title}</div>
                </div>
                <div className="pb-4 bg-blue-500 flex gap-4 justify-center items-center p-2">
                  <div>{quiz.subject}</div>
                  <div className="bg-green-500 hover:bg-green-400 hover:scale-120 flex justify-center items-center p-1 px-2 rounded-md">
                    <Link to={`/quiz/${quiz.id}`}>Jouer</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
