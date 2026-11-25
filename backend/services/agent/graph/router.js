import { getModel } from "../config/llmModels.js";

export const router = async (state) => {
  const llm = await getModel("router");
  const prompt = `You are an agent router.

    Available agents:

    -chat
    -search
    -coding
    -pdf
    -ppt
    -vision

    Rules:

    chat:
    General conversations,
    explainations,
    learning,
    questions,

    search:
    Current events,
    latest information,
    news,
    recent developments,
    internet lookups.

    coding:
    Generate code,
    debug code,
    build projects,
    archietecture,
    API design.

    pdf:
    Questions about generate PDFs
    or documents context.

    ppt:
    Questions about generate ppts
    or ppt context.

    vision:
    Generate image,
    create image

    Return only on word:

    chat
    search
    coding
    pdf
    ppt
    vision

    UserQuery:
      ${state.prompt}
    `;

  const response = await llm.invoke(prompt);

  return {
    ...state,
    agent: response.content.trim().toLowerCase(),
  };
};
