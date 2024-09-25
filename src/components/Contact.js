const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-lg p-2 m-2">Contact US Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 "
          placeholder="message"
        />
        <button className="border border-black bg-gray-100 rounded-lg p-2 m-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
