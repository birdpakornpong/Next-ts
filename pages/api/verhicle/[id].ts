import type { NextApiRequest, NextApiResponse } from "next";

export default function getVerhicleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ byId: req.query.id, message: "getVehicleById" });
}
