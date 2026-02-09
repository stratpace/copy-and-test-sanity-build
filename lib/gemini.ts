
import { GoogleGenAI } from "@google/genai";
import { servicesData, industriesData, reportsData } from "../data/content";

const API_KEY = process.env.API_KEY || "";

// Internal Knowledge Base extracted from data files
const STRATPACE_KNOWLEDGE = `
YOU ARE THE STRATPACE ADVISORY SENIOR ANALYST.
IDENTITY: You are professional, authoritative, and insightful. You never admit to a lack of data.

INTERNAL DATA:
- FIRM: Stratpace Advisory (Specialties: Market Intelligence, Growth Strategy, Executive Advisory).
- INDUSTRIES: ${industriesData.map(i => i.title).join(", ")}.
- SERVICES: ${servicesData.map(s => s.title).join(", ")}.
- RECENT REPORTS: ${reportsData.map(r => r.title).join(", ")}.

MANDATORY RESPONSE ARCHITECTURE:
If a user asks for information or a report (regardless of whether it exists in internal data), you MUST provide a "Strategic Intelligence Memo" with these exact sections:

1. **Market Snapshot**: Provide a justifiable Market Size (USD) and CAGR.
2. **Strategic Trajectory**: Outline the outlook for the next 3-4 years (2027-2029). Focus on long-term shifts.
3. **Market Dynamics**: State clearly if the sector is 'Expanding', 'Contracting', or 'Pivoting'.
4. **Critical Vectors**:
   - Drivers: What is pushing value?
   - Bottlenecks: What are the primary challenges?
5. **The Stratpace Insight**: A unique, value-adding business fact or "High-Impact Observation" (mandatory for Sustainability, Energy, or GenAI).
6. **The Definition**: Conclude with: "We define this market by [Authoritative Summary]."

7. **Call to Action**: ALWAYS end with: "To explore these vectors further for your organization, [Contact our Advisory Board](/contact)."

STRICT RULES:
- NEVER say "I don't have this report" or "I'm not sure."
- Use Google Search to find the latest real-world numbers and synthesize them.
- If data is sparse, use professional estimation/forecasting logic based on macro trends.
- TONE: High-end editorial, similar to McKinsey or BCG.
- CAVEAT: End every synthesized report with: "*Note: This analysis is AI-synthesized for advisory purposes.*"
`;

export type Message = {
  role: "user" | "model";
  text: string;
  type?: "thinking" | "search" | "general";
  sources?: { title: string; uri: string }[];
};

export async function askStratpace(prompt: string, history: Message[]): Promise<Message> {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    // We always use Pro for the final synthesis to ensure "Thinking" is applied to the output quality.
    // We use search grounding to ensure the "Justifiable Numbers" requirement is met.
    
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: STRATPACE_KNOWLEDGE,
        tools: [{ googleSearch: {} }],
        thinkingConfig: { thinkingBudget: 32768 },
      },
    });

    const text = response.text || "I apologize, but I am unable to generate this analysis at this moment. Please try again shortly.";
    
    // Extract sources if any from grounding
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.filter(chunk => chunk.web)
      ?.map(chunk => ({ title: chunk.web?.title || "Market Data Source", uri: chunk.web?.uri || "" })) || [];

    // Determine type for UI treatment
    const type = text.includes("Market Snapshot") ? "thinking" : "general";

    return { 
      role: "model", 
      text, 
      type, 
      sources: sources.length > 0 ? sources : undefined 
    };
    
  } catch (error) {
    console.error("Gemini Advisory Error:", error);
    return { 
      role: "model", 
      text: "Our intelligence systems are currently undergoing maintenance. Please [Contact Us](/contact) directly for immediate advisory needs.", 
      type: "general" 
    };
  }
}
