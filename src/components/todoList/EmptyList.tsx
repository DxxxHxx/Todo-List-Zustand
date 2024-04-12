import { LuPenLine } from "react-icons/lu";
export default function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 md:text-2xl">
      <div>
        <LuPenLine />
      </div>
      <div>
        <h1>해당 리스트는 비어있습니다.</h1>
      </div>
    </div>
  );
}
