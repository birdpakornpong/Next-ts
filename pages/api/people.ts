import type { NextApiRequest, NextApiResponse } from "next";

export default function getVerhicleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json([
    { name: "bruno" },
    { name: "bird" },
    { name: "pang" },
    { name: "meow" },
  ]);
}
