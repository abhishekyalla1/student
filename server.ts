import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API endpoint for grounded AI pathway explanation
app.post('/api/explain-path', async (req, res) => {
  try {
    const { context, question, language = 'English' } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        success: true,
        source: 'local_fallback',
        explanation: `Educational Note (${language}):\n` +
          `• Based on official regulatory frameworks (AICTE, UGC, NMC, BIEAP/TSBIE), this pathway requires completing the specified prerequisites.\n` +
          `• Reality Check: A college degree alone is rarely sufficient for direct high-tier industry placement. Building verified skills, active portfolio projects, and technical internships are mandatory steps.\n` +
          `• Alternative Options: If the primary competitive entrance exam is not cleared, diploma lateral entry (ECET) or alternate degrees (BCA / B.Sc) provide legitimate industry entry routes.`
      });
    }

    const ai = new GoogleGenAI();
    const systemInstruction = `You are the Pathway Educational Counselor for Indian students.
CRITICAL INTEGRITY INSTRUCTIONS:
1. You must explain ONLY the provided verified educational graph context (stages, streams, entrance exams, degree courses, job roles, and prerequisites).
2. DO NOT hallucinate, guess, or alter official eligibility rules (e.g., core engineering requires Math/Physics; NEET requires Biology/PCB; Lateral Entry to B.Tech 2nd year requires Polytechnic Diploma via ECET).
3. DO NOT fabricate live exam dates or guaranteed salary claims. Use realistic descriptions.
4. Keep the tone empathetic, practical, and highly transparent about the "Reality Check" (degree alone != job; hands-on projects, DSA, and internships are required).
5. Respond in the requested language: ${language} (if Telugu or Hindi is requested, provide clear natural language phrasing, keeping technical terms like "Intermediate MPC", "B.Tech CSE", "NEET-UG" intact).
6. Be concise and actionable with bullet points.`;

    const promptText = `Verified Pathway Context:
${JSON.stringify(context, null, 2)}

User Question / Guidance Request:
${question || 'Explain this educational pathway clearly, including what subjects matter, what doors remain open or closed, the reality check for landing a job, and what alternative Plan-B routes exist.'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.2, // low temperature to prevent hallucination
      }
    });

    const reply = response.text || 'Unable to generate response at this moment.';
    return res.json({ success: true, explanation: reply });
  } catch (error: any) {
    console.error('Gemini explanation error:', error?.message || error);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate explanation. Please try again.',
      details: error?.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Pathway Indian Student Career Roadmap' });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    // In development mode, mount Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve built static assets
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Pathway server running at http://localhost:${port}`);
  });
}

startServer();
