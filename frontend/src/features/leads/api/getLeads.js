import { api } from "../../../config/api";

export const getLeads = async () => {
  const res = await api.get("/leads");
  return res.data;
};