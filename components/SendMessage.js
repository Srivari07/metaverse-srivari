import { useMoralis } from "react-moralis";

function SendMessage() {
  const { user, Moralis } = useMoralis();
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent text-white bord placeholder-gray-500"
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button className="font-bold text-pink-500">Send It</button>
    </form>
  );
}

export default SendMessage;
