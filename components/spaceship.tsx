import Image from "next/image";
import { SpaceshipProps } from "../types/space-ship";

export default function Spaceship({ spaceship }: SpaceshipProps) {
  return (
    <div className="spaceship">
      <Image
        alt="spaceship image"
        src={`/${spaceship.name.replace(/\s/g, "")}.svg`}
        width={100}
        height={100}
      />
      <span>
        name: {spaceship.name} color: {spaceship.color}
      </span>
      <br />
      <span>
        dom: {spaceship.dom} laser: {`${spaceship.laserBeam}`}
      </span>
      <p>speed: {spaceship.speed}</p>
    </div>
  );
}
