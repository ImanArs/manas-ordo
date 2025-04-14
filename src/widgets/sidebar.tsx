import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <nav className="max-w-[200px] w-full px-5 border-r fixed h-full mt-[66px] bg-[#F4F5F0]">
      <ul className="flex flex-col gap-10 mt-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            {t("Complex")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archeology"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Archaeological museums
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Archive
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <a href="#contacts" className="text-black">
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
