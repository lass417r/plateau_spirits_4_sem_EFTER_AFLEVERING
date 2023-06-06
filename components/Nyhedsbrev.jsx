"use client";

function Nyhedsbrev() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <div className="px-10">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email_nyhedsbrev"
          className="w-auto border-0 border-b-2 border-yellowbase bg-transparent px-10 placeholder-yellowbase placeholder:font-copy placeholder:text-copy"
          placeholder="Tilmeld dig nyhedsbrevet"
        />
      </form>
    </div>
  );
}

export default Nyhedsbrev;
