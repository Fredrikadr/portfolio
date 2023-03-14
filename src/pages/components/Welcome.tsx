import { handleLinkClick } from "@/utils/utils";

export default function Welcome() {
  return (
    <div className='welcome'>
      <button onClick={() => handleLinkClick("about")}>Let's go!</button>
    </div>
  );
}