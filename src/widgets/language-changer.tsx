import { useTranslation } from "react-i18next";

export const LanguageChanger = () => {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <div className="flex gap-2">
      <ul className="flex gap-2.5 uppercase">
        <li
          className={`uppercase ${
            i18n.language === "en" && "border-b-2 border-[red] text-[red]"
          }`}
        >
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </li>
        <li>/</li>
        <li
          className={`uppercase ${
            i18n.language === "ru" && "border-b-2 border-[red] text-[red]"
          }`}
        >
          <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
        </li>
        <li>/</li>
        <li
          className={`uppercase ${
            i18n.language === "kg" && "border-b-2 border-[red] text-[red]"
          }`}
        >
          <button onClick={() => i18n.changeLanguage("kg")}>kg</button>
        </li>
      </ul>
    </div>
  );
};
