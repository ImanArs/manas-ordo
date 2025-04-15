import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Props {
  type: "black" | "white";
}

export const Sidebar = (props: Props) => {
  const { type } = props;
  const { t } = useTranslation();

  return (
    <nav
      className={`max-w-[200px] w-full px-5 border-r border-black fixed h-full 
        ${type === "white" && "bg-[#F4F5F0] text-black"}
        ${type === "black" && "bg-[#282828] text-white"}
         `}
    >
      <ul className="flex flex-col gap-10 mt-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            {t("Complex")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archeology"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            {t("Archaeological-museums")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archive"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            {t("Archive")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            {t("Gallery")}
          </NavLink>
        </li>
        <li>
          <a href="#contacts" className="">
            {t("contacts")}
          </a>
        </li>
      </ul>
    </nav>
  );
};
