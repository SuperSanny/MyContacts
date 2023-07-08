const FormAction = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) => {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 pz-4 border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-10"
          onSubmit={handleSubmit}
        >
          {" "}
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
export default FormAction;
