import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import style from "./NavBar.module.css";

export default function NavBar({ setSelectedPage }) {
   const goHome = () => setSelectedPage("home");
  const goBeltRanks = () => setSelectedPage("beltranks");
  const goTrialForm = () => setSelectedPage("trialform");

  const items = [
    {
      label: "Home",
      command: goHome ,
    },
    {
      label: "Programs",
      items: [
        {
          label: "Adults Jiu Jitsu",
          command: goTrialForm ,
        },
        {
          label: "Kids Jiu Jitsu",
          command: goTrialForm ,
        },
      ],
    },
    {
      label: "Belt Journey",
      command: goBeltRanks ,
    },
  ];

  const start = (
    <div className={style.navbar__brand}>
      <img
        alt="Satori BJJ logo"
        src="https://satoribjjacademy.com/wp-content/uploads/2026/02/Camada-1.png"
        className={style.navbar__logo}
      />
      <div className={style.navbar__brandText}>
        <span className={style.navbar__brandTitle}>Satori BJJ</span>
        <span className={style.navbar__brandSubtitle}>Train with purpose</span>
      </div>
    </div>
  );

const end = (
  <div className={style.navbar__social}>
    <a
      href="https://www.facebook.com/people/Satori-BJJ-Academy/61561503492187/"
      target="_blank"
      rel="noopener noreferrer"
      className={style.socialIcon}
    >
      <i className="pi pi-facebook"></i>
    </a>
    <a
      href="https://www.instagram.com/satoribjjacademy"
      target="_blank"
      rel="noopener noreferrer"
      className={style.socialIcon}
    >
      <i className="pi pi-instagram"></i>
    </a>
    <Button
      label="Book Free Trial"
      className={style.navbar__cta}
      onClick={() => setSelectedPage("trialform")}
    />
  </div>
);

  return (
    <div className={style.navbar__wrapper}>
      <Menubar
        className={style.navbar}
        model={items}
        start={start}
        end={end}
      />
    </div>
  );
}