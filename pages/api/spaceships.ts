// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SpaceShip } from "../../types/space-ship";

const responseData: SpaceShip[] = [
  {
    name: "UNSC Infinity ('Halo' franchise)",
    speed: 59,
    color: "gray",
    dom: new Date(1994, 8, 26),
    laserBeam: false,
  },
  {
    name: "Heighliner (Dune 2021)",
    speed: 78,
    color: "red",
    dom: new Date(2000, 9, 20),
    laserBeam: true,
  },
  {
    name: "TARDIS ('Doctor Who' 1963-)",
    speed: 89,
    color: "pink",
    dom: new Date(1999, 2, 12),
    laserBeam: false,
  },
  {
    name: "Battlestar Galactica (Battlestar Galactica, 2004-09)",
    speed: 56,
    color: "brown",
    dom: new Date(2018, 12, 29),
    laserBeam: false,
  },
  {
    name: "Elysium ship (2013)",
    speed: 94,
    color: "purple",
    dom: new Date(1985, 4, 24),
    laserBeam: false,
  },
  {
    name: "Reapers ('Mass Effect' franchise)",
    speed: 72,
    color: "white",
    dom: new Date(1990, 6, 1),
    laserBeam: false,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpaceShip[]>
) {
  res.status(200).json(responseData);
}
