import { createClient } from "next-sanity";

const projectId = "4in68xi0";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});
