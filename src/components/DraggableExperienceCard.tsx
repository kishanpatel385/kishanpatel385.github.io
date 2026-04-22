"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

type Props = {
  experience: {
    period: string;
    role: string;
    company: string;
    points: string[];
  };
  initialX: number;
  initialY: number;
  initialRotation: number;
  initialZ: number;
};

export default function DraggableExperienceCard({
  experience,
  initialX,
  initialY,
  initialRotation,
  initialZ,
}: Props) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [z, setZ] = useState(initialZ);
  const dragRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0 });

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setZ(100);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: pos.x,
      posY: pos.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPos({
      x: dragRef.current.posX + (e.clientX - dragRef.current.startX),
      y: dragRef.current.posY + (e.clientY - dragRef.current.startY),
    });
  };

  const onPointerUp = () => setIsDragging(false);

  const style: CSSProperties = {
    left: pos.x,
    top: pos.y,
    transform: `rotate(${initialRotation}deg)${isDragging ? " scale(1.03)" : ""}`,
    zIndex: z,
    cursor: isDragging ? "grabbing" : "grab",
    transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.3s ease",
    touchAction: "none",
  };

  return (
    <div
      className={`exp-drag-card${isDragging ? " is-dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={style}
    >
      <span className="exp-drag-period">{experience.period}</span>
      <h3 className="exp-drag-role">{experience.role}</h3>
      <span className="exp-drag-company">@ {experience.company}</span>
      <ul className="exp-drag-points">
        {experience.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
