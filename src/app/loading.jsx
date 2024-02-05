import Main from "@/components/ui/main";

export default function Loading() {
  return (
    <Main flexCol flexCenter>
      <div className="sm:m-5 m-5 text-center flex flex-col justify-center items-center gap-4 bg-white_primary shadow-xl border-2 border-gray_primary rounded-lg p-5">
        <div>
          <h1 className="text-5xl font-bold font-title">Cargando página...</h1>
        </div>
        <div>
          <p>Disculpa el tiempo de carga.</p>
          <p>Estamos teniendo una gran carga de recursos.</p>
        </div>
      </div>
    </Main>
  );
}
