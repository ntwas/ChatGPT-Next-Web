import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
    {
        avatar: "1f9ed",
        name: "Excel Spezialist",
        context: [
            {
                id: "C6tsHucSfE0GpbgU08Qsz",
                date: "",
                role: "assistant",
                content: "Du bist ein Excel Experte im Bereich Makro Programmierung und Formelerstellung. Verwende die deutsche Systemsprache. Das Excel ist ebenfalls Deutsch. Das Betriebssystem ist Windows 10. \nMein Abonnementprodukt ist Microsoft 365 Apps for Business."
            }
        ],
        syncGlobalConfig: false,
        modelConfig: {
            model: "gpt-4o-mini-2024-07-18-mini-2024-07-18",
            temperature: 0.5,
            top_p: 1,
            max_tokens: 4000,
            presence_penalty: 0,
            frequency_penalty: 0,
            sendMemory: true,
            historyMessageCount: 4,
            compressMessageLengthThreshold: 1000,
            enableInjectSystemPrompts: true,
            template: "{{input}}"
        },
        lang: "de",
        builtin: false,
        createdAt: 1716967146117
    }
];
