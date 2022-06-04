import data from "../data";
import Meme from "./Meme";

export default function Content() {
  const meme = data.map((meme) => {
    return <Meme {...meme} />;
  });
  return (
    <main className="container my-12 bg-white">
      {/* meme generator form */}
      <form action="" className="my-12">
        <div className="flex justify-center gap-4 mb-3">
          <input
            type="text"
            className="border border-grey rounded px-2 py-1 flex-1 outline-none focus:border-dark-purple"
            name="title-top"
            id="title-top"
            placeholder="shut up"
          />
          <input
            type="text"
            className="border border-grey rounded px-2 py-1 flex-1 outline-none focus:border-dark-purple"
            name="title-bottom"
            id="title-bottom"
            placeholder="and take my money"
          />
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-dark-purple to-light-purple w-full font-bold py-2 rounded-md"
        >
          Get a new meme image 🖼
        </button>
      </form>
      {/* generated meme */}
      {meme}
    </main>
  );
}
