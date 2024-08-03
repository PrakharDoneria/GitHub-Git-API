export function validateRepoPayload(payload: any): boolean {
  if (typeof payload !== "object" || payload === null) {
    return false;
  }

  const { name, description, private: isPrivate } = payload;
  return typeof name === "string" && name.length > 0 &&
    typeof description === "string" &&
    typeof isPrivate === "boolean";
}

export function validateFilePayload(payload: any): boolean {
  if (typeof payload !== "object" || payload === null) {
    return false;
  }

  const { message, content, branch } = payload;
  return typeof message === "string" && message.length > 0 &&
    typeof content === "string" && content.length > 0 &&
    typeof branch === "string" && branch.length > 0;
}
