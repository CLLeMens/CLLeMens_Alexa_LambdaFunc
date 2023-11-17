import axios from 'axios';

const AlexaSkillId = ''; // Replace with your Skill ID

export const handler = async (event) => {
     console.log("Function started");
     console.log("Received event:", JSON.stringify(event, null, 2));
    // Check if the request comes from your Alexa Skill
    if (event.context.System.application.applicationId !== AlexaSkillId) {
        // If the Skill ID doesn't match, return an error response
        throw new Error("Invalid Skill ID");
    }

    let response;
    console.log("Event Request type = " + event.request.type);
    if (event.request.type === 'IntentRequest' && event.request.intent) {
        console.log("Event Request intent name = " + event.request.intent.name);
    }
    switch (event.request.type) {
        case 'LaunchRequest':
            // Handle LaunchRequest
            response = {
                version: '1.0',
                response: {
                    outputSpeech: {
                        type: 'PlainText',
                        text: 'Welcome to the CLLeMens Assistant! How can i help you?',
                    },
                    shouldEndSession: false,
                },
            };
            break;

        case 'IntentRequest':
    if (event.request.intent) {
        const intentName = event.request.intent.name;
        
        switch (intentName) {
            case 'QuestionIntent':
                // Handle QuestionIntent
                response = {
                    version: '1.0',
                    response: {
                        outputSpeech: {
                            type: 'PlainText',
                            text: 'This is a response to your question.',
                        },
                        shouldEndSession: true, // or false, depending on your intent
                    },
                };
                break;

            // handle other intents here

            default:
                // Default response for unrecognized intents
                response = {
                    version: '1.0',
                    response: {
                        outputSpeech: {
                            type: 'PlainText',
                            text: 'I didn’t understand that intent.',
                        },
                        shouldEndSession: true,
                    },
                };
                break;
        }
    } else {
        console.log("Intent object is missing in the IntentRequest");
        // Provide a response for missing intent object
        response = {
            version: '1.0',
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'There was a problem with the intent.',
                },
                shouldEndSession: true,
            },
        };
    }
    break;

        // Add other request types if needed
    }
    return response;
};