import { useEffect, useState } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./BeltRanks.module.css";

export default function BeltRanks({ onClose }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const events = [
    {
      status: "White Belt",
      date: "Beginner Level",
      icon: "pi pi-circle-fill",
      color: "#d9d9d9",
      short:
        "Your foundation starts here — learning movement, survival, and confidence on the mat.",
      full:
        "At white belt, students begin learning the fundamentals of Brazilian Jiu Jitsu: positions, escapes, posture, basic submissions, and defense. This stage is all about building confidence, consistency, and comfort while training.",
    },
    {
      status: "Blue Belt",
      date: "Fundamentals & Defense",
      icon: "pi pi-circle-fill",
      color: "#3b82f6",
      short:
        "You begin understanding timing, defense, and how to apply your techniques with purpose.",
      full:
        "Blue belt represents a solid understanding of the fundamentals. Students develop better timing, stronger defensive awareness, and begin linking techniques together more effectively during live training.",
    },
    {
      status: "Purple Belt",
      date: "Advanced Understanding",
      icon: "pi pi-circle-fill",
      color: "#9333ea",
      short:
        "A major turning point where technique, creativity, and strategy begin to show.",
      full:
        "Purple belt is where deeper understanding starts to emerge. Students often begin developing their own style, improving transitions, and showing more strategic thinking in both offense and defense.",
    },
    {
      status: "Brown Belt",
      date: "High-Level Control",
      icon: "pi pi-circle-fill",
      color: "#8b5e3c",
      short:
        "Precision, control, and leadership become a major part of your game.",
      full:
        "Brown belt reflects a very high level of technical control and awareness. Students at this stage sharpen details, refine weaknesses, and often begin mentoring newer students while continuing to evolve their own game.",
    },
    {
      status: "Black Belt",
      date: "Mastery & Leadership",
      icon: "pi pi-circle-fill",
      color: "#111827",
      short:
        "A symbol of long-term discipline, mastery, and leadership in the art.",
      full:
        "Black belt is not the end — it’s a deeper beginning. It represents years of dedication, technical understanding, resilience, and leadership. A black belt continues learning while helping others grow in the art.",
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className={styles.beltRanks__marker}
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item, index) => {
    const isExpanded = expandedIndex === index;

    return (
      <Card
        title={item.status}
        subTitle={item.date}
        className={styles.beltRanks__card}
      >
        <p className={styles.beltRanks__text}>{item.short}</p>

        {isExpanded && (
          <p className={styles.beltRanks__expandedText}>{item.full}</p>
        )}

        <Button
          type="button"
          label={isExpanded ? "Show less" : "Learn more"}
          className={styles.beltRanks__readMore}
          onClick={() =>
            setExpandedIndex(isExpanded ? null : index)
          }
        />
      </Card>
    );
  };

  return (
    <div className={styles.beltRanks}>
      <div className={styles.beltRanks__overlay} onClick={onClose}>
        <div
          className={styles.beltRanks__modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.beltRanks__header}>
            <div>
              <h2 className={styles.beltRanks__title}>Belt Rank Journey</h2>
              <p className={styles.beltRanks__subtitle}>
                Every belt represents growth, discipline, and progress on the mat.
              </p>
            </div>

            <button
              className={styles.beltRanks__closeButton}
              onClick={onClose}
              aria-label="Close belt ranks modal"
            >
              ✕
            </button>
          </div>

          <div className={styles.beltRanks__body}>
            <Timeline
              value={events}
              align="alternate"
              className={styles.beltRanks__timeline}
              marker={customizedMarker}
              content={customizedContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}