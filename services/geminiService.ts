import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `You are "Velvet AI", the sophisticated and helpful AI assistant for "The Velvet Studio", a leading high-end webcam modeling agency in Colombia.
Your tone is professional, encouraging, elegant, and secure. You speak Spanish by default but can switch to English if addressed in English.

Key Information about The Velvet Studio:
- **Value Proposition:** We turn personal projection into tangible success. We offer security, privacy, and professional growth.
- **Benefits:** Earnings in dollars, Sumsub identity verification, Geo-blocking (VPN) for privacy, Pineapple Support (mental health/wellness).
- **Earnings:** Models can earn up to $3,500+ USD/month depending on dedication (30-40h/week) and English level.
- **Location:** Manizales, Colombia.
- **Contact:** WhatsApp +57 320 720 0266.

Your goal is to answer questions about the agency, requirements, safety, and potential earnings. Encourage users to apply via the form on the page or contact support on WhatsApp.

IMPORTANT: If a user asks to speak with a real person, asks for technical support, or wants to schedule an appointment directly, you MUST respond elegantly and provide EXACTLY this Markdown block:

[💬 Hablar con una asesora en WhatsApp](https://wa.me/573207200266?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20personalizada%20sobre%20The%20Velvet%20Studio.%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20interesa%20conocer%20los%20requisitos%20para%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n.%20Quedo%20atenta%2C%20gracias.)

Example response for these cases:
"¡Por supuesto! Para una atención personalizada de nuestro equipo humano, puedes hacer clic aquí:
[💬 Hablar con una asesora en WhatsApp](https://wa.me/573207200266?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20personalizada%20sobre%20The%20Velvet%20Studio.%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20interesa%20conocer%20los%20requisitos%20para%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n.%20Quedo%20atenta%2C%20gracias.)"

Keep responses concise and easy to read on a chat interface.`;

const getAiClient = () => {
    // Try to get the key from various sources for maximum compatibility (Vite, Vercel, etc.)
    const apiKey = process.env.API_KEY || 
                   process.env.GEMINI_API_KEY || 
                   import.meta.env.VITE_GEMINI_API_KEY ||
                   (window as any).GEMINI_API_KEY;

    if (!apiKey) {
        console.error("CRITICAL: Gemini API Key is missing. Please check your environment variables (VITE_GEMINI_API_KEY).");
        throw new Error("API Key not found");
    }
    
    // Debug log to verify key is loaded (masked)
    console.log("Gemini API Key loaded:", apiKey.substring(0, 5) + "..." + apiKey.substring(apiKey.length - 4));
    
    return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
    try {
        const ai = getAiClient();
        
        // Initialize chat if not already done or if history is empty (new session)
        if (!chatSession || history.length === 0) {
            // Updated to gemini-2.5-flash as older models may be deprecated in this environment
            const modelName = 'gemini-2.5-flash';
            
            console.log(`Initializing chat with model: ${modelName}`);
            
            chatSession = ai.chats.create({
                model: modelName,
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                    temperature: 0.7,
                },
                history: history
            });
        }

        const response = await chatSession.sendMessage({ message });
        return response.text || "Lo siento, no pude generar una respuesta.";

    } catch (error: any) {
        console.error("Error communicating with Gemini:", error);
        
        let errorMessage = "Lo siento, hubo un error al conectar con el asistente.";

        if (error.message) {
            if (error.message.includes("429") || error.message.includes("RESOURCE_EXHAUSTED") || error.message.includes("quota")) {
                errorMessage = "⚠️ Error de Cuota: Se ha excedido el límite gratuito. Intenta más tarde.";
            } else if (error.message.includes("404") || error.message.includes("NOT_FOUND")) {
                // This is the specific error the user is seeing.
                // It almost always means the API itself is not enabled for this project.
                errorMessage = "⚠️ Error de Configuración: El modelo no está disponible. \n\nSOLUCIÓN: Ve a Google Cloud Console > APIs & Services > Library y habilita la 'Generative Language API' para tu proyecto.";
            } else if (error.message.includes("400") || error.message.includes("INVALID_ARGUMENT") || error.message.includes("API key")) {
                errorMessage = "⚠️ Error de Llave: La API Key es inválida. Verifica que la hayas copiado correctamente sin espacios extra.";
            } else {
                errorMessage += ` (Detalle: ${error.message})`;
            }
        }

        return errorMessage;
    }
};