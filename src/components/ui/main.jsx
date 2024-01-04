export default function Main({
  children,
  id = null,
  classNames = "",
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  return (
    <main
      id={id}
      className={`w-full min-h-screen bg-gradient-to-r from-white-primary to-gray-primary animate-fade py-[100px] flex
        ${classNames}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      {children}
    </main>
  );
}
