function Button<T extends React.ReactNode>({ text }: { text: T }) {
    return (
      <button className="p-4 bg-white text-xl rounded-lg text-black w-1/2 cursor-pointer hover:bg-opacity-50 hover:text-white">
        {text}
        </button>
    );
  }
  
  export default Button;
  