import { LanguageChanger } from "./language-changer";

export const Header = () => {
  return (
    <header className="fixed w-full border-b flex justify-between p-4.5 h-[66px] bg-[#F4F5F0]">
      <img src="/images/logo.png" className="w-7.5 h-7.5" alt="" />
      <ul className="flex gap-2.5 uppercase ">
        <li className="border-b-2 border-[red] text-[red]">en</li>
        <li>/</li>
        <li>ru</li>
        <li>/</li>
        <li>kg</li>
      </ul>
      <LanguageChanger />
    </header>
  );
};
