import content from "../content.json";

export const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-[#8F8F8F] text-6xl h-screen">
      <p>{content.errorPage}</p>
    </div>
  );
};
