import { NextApiResponse, NextApiRequest } from "next";
import { cards } from "../../../data";
import { ICard } from "../../../components/Interfaces";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ICard[]>
) {
  return res.status(200).json(cards);
}
