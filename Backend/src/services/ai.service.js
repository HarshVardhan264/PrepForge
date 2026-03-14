const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");
const puppeteer = require("puppeteer");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job describe",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Technical questions that can be asked in the interview along with their intention and how to answer them",
    ),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Behavioral questions that can be asked in the interview along with their intention and how to answer them",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .describe(
            "The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances",
          ),
      }),
    )
    .describe(
      "List of skill gaps in the candidate's profile along with their severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe("The day number in the preparation plan, starting from 1"),
        focus: z
          .string()
          .describe(
            "The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc.",
          ),
        tasks: z
          .array(z.string())
          .describe(
            "List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.",
          ),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively",
    ),
  title: z
    .string()
    .describe(
      "The title of the job for which the interview report is generated",
    ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  
  
    const prompt = `
You are an AI interview preparation assistant.

IMPORTANT RULES:
- Return ONLY valid JSON
- Follow the schema EXACTLY
- Use the exact property names below
- Do NOT change the field names
- Do NOT return plain text arrays
- Do NOT flatten objects

Required Keys:
matchScore
technicalQuestions
behavioralQuestions
skillGaps
preparationPlan

technicalQuestions and behavioralQuestions must contain:
{
 "question": string,
 "intention": string,
 "answer": string
}

skillGaps must contain:
{
 "skill": string,
 "severity": "low" | "medium" | "high"
}

preparationPlan must contain:
{
 "day": number,
 "focus": string,
 "tasks": [string]
}

Generate:
- 5 technical questions
- 3 behavioral questions
- 3 skill gaps
- 7 preparation days

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(interviewReportSchema),
    },
  });

  return JSON.parse(response.text);
}

async function geeratePdfFromHtml(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();
  return pdfBuffer;

}

async function generateResumePdf({resume, selfDescription, jobDescription}) {
  const resumePdfSchema = z.object({
     html: z.string().describe("The HTML content of the resume PDF which can be converted to PDF using a library like puppeteer or any other method")
  }
  )
  const prompt = `Generate a resume in HTML format based on the following information:

Resume:
${resume} 
Self Description:
${selfDescription}  
Job Description:
${jobDescription}
The response should be a JSON object with The HTML which should be well-structured and formatted, suitable for conversion to PDF. It should include sections such as Summary, Skills, Experience, Education, and any other relevant sections based on the provided information. Use appropriate HTML tags and inline CSS for styling to ensure the resume looks professional when converted to PDF. Return only the HTML content without any additional text or explanations.
The resume should be tailored to highlight the candidate's strengths and relevant experience for the job description provided. Make sure to include keywords from the job description to make the resume ATS-friendly.
It should be related to the job description only and should not include any irrelevant information. The resume should be concise, ideally fitting within 1 page when converted to PDF. Use bullet points for listing skills and experience, and ensure that the formatting is clean and easy to read.
The content of resume should not sound like it generated by ai and should be unique and personalized based on the candidate's information provided above.
The content should be ATS friendly and it should be easily parsable by ATS systems. Avoid using complex tables or graphics that might not be parsed correctly by ATS. Use standard section headings, colors for highlighting and simple formatting to ensure maximum compatibility with ATS systems.
It should be strictly of 1 page.
`
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(resumePdfSchema),
    },
  });
  const jsonContent = JSON.parse(response.text);
  const pdfBuffer = await geeratePdfFromHtml(jsonContent.html);

  return pdfBuffer;
}

module.exports = { generateInterviewReport , generateResumePdf};
