const Config = {
  SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-26",
};

// Function to validate environment variables
function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (!value) {
    throw new Error(errorMessage);
  }
  return value;
}

// Validated values
export const dataset = assertValue(Config.SANITY_DATASET, "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
export const projectId = assertValue(Config.SANITY_PROJECT_ID, "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
export const apiVersion = Config.API_VERSION;

export default Config;

console.log("Dataset:", dataset);
console.log("Project ID:", projectId);
