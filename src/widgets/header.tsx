import { LanguageChanger } from "./language-changer";
import { Sheet } from "./sheet";

export const Header = () => {
  return (
    <header className="fixed w-full border-b flex justify-between items-center px-4 h-[66px] bg-[#F4F5F0] z-50">
      <img src="/images/logo.png" className="w-7.5 h-7.5" alt="Logo" />

      <LanguageChanger />

      <Sheet />
    </header>
  );
};
