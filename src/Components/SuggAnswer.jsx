export default function SuggAnswer({ answer, onClick }) {
  return (
    <button
      className="w-full text-blue-900 bg-radial-[at_25%_25%] from-blue-100 to-blue-50 to-75% shadow-sm p-2 rounded-sm cursor-pointer 
      hover:scale-102 hover:bg-radial-[at_25%_25%] hover:from-sky-200 hover:to-sky-100 hover:to-75% hover:shadow-md
      focus:bg-radial-[at_25%_25%] focus:from-sky-400 focus:to-sky-300 focus:to-75% focus:shadow-md"
      onClick={onClick}
    >
      {answer}
    </button>
  );
}
