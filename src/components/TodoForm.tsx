import React from "react";

export default function TodoForm({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full p-3 m-auto md:gap-x-5 md:flex-row gap-y-3"
    >
      <input
        type="text"
        placeholder="Hello World"
        className="w-full px-2 py-1 text-black rounded-lg md:w-1/2"
        value={value}
        onChange={onChange}
        maxLength={15}
      />
      <button className="p-2 text-sm border rounded-lg hover:bg-[rgba(255,255,255,.2)]">
        Add Item
      </button>
    </form>
  );
}
