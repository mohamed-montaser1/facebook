export default function Intro() {
  return (
    <div className="bg-white w-full min-h-40 rounded-lg p-4 shadow-sm">
      <h3 className="font-bold text-2xl">Intro</h3>
      <p className="text-center my-3 text-lg mx-auto max-w-[90%]">
        this is just bio for testing how it will look like in the final version
        i hope that show great!
      </p>
      <button className="w-full h-[46px] bg-cgray text-lg rounded-lg font-semibold">
        Edit Bio
      </button>
      <button className="w-full h-[46px] bg-cgray text-lg rounded-lg font-semibold mt-3">
        Add Hobbies
      </button>
    </div>
  );
}
