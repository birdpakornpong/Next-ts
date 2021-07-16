import type { NextApiRequest, NextApiResponse } from "next";

export default function getPersonVerhicleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ byId: req.query.id, message: "getPersonVehicleById" });
}
