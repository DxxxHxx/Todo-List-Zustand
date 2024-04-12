import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MoveTop() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {scroll ? (
        <div
          onClick={handleClick}
          className="fixed p-2 text-xl cursor-pointer bg-black text-white hover:bg-[rgba(255,255,255,0.2)] border rounded-full bottom-3 right-3"
        >
          <FaArrowUp />
        </div>
      ) : null}
    </>
  );
}
