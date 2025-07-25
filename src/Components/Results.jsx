export default function Results({ grade }) {
  // Choix de l'emoji et message en fonction du score
  let message = "Tu peux faire mieux 👀";
  let emoji = "😐";

  if (grade >= 90) {
    message = "Excellent ! Tu déchires 🔥";
    emoji = "🏆";
  } else if (grade >= 70) {
    message = "Beau travail ! 🥈";
    emoji = "👏";
  } else if (grade >= 50) {
    message = "Pas mal ! Continue 💪";
    emoji = "💡";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-white p-8 rounded shadow-md text-center transition-all duration-500 ease-in-out">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
        Résultats
      </h2>

      <div className="text-6xl mb-4 animate-bounce">{emoji}</div>

      <p className="text-xl text-gray-600 mb-2">
        Ton score est de{" "}
        <span className="font-semibold text-blue-700">{grade} / 20</span>
      </p>

      <p className="text-lg text-gray-500 italic mb-6">{message}</p>
    </div>
  );
}
