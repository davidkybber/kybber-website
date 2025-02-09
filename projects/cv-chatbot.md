---
title: "CV Chatbot"
metatitle: "Blog post on building a CV chatbot"
metadescription: "Post on how I built a CV chatbot, which technologies I used and how it works."
layout: layouts/post.njk
date: Last Modified
eleventyNavigation:
  key: CV Chatbot
  parent: Projects
intro: How I built a CV chatbot, which technologies I used and how it works.
image: /images/ai-project.png
---

# Building a Modern CV Chatbot with GPT-4, Angular, and Azure Functions

In this blog post, I'll walk you through how I built an interactive CV chatbot that allows users to have natural conversations about my professional experience. The project combines modern web technologies with AI to create an engaging way to explore my career information.

## Tech Stack Overview

- **Frontend**: Angular 19.0.1
- **Backend**: Azure Functions with TypeScript
- **AI Model**: OpenAI GPT-4
- **Infrastructure**: Terraform for IaC
- **Deployment**: Azure Cloud

## Project Architecture

The application follows a modern, serverless architecture:

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│   Angular  │ --> │   Azure    │ --> │   OpenAI   │
│  Frontend  │     │ Functions  │     │   GPT-4    │
└────────────┘     └────────────┘     └────────────┘
```

## How It Works

### 1. CV Data Organization

The CV information is organized into separate text files in the `backend/cv-chatbot-backend/cv-files/` directory:

- `experience.txt`: Work history
- `skills.txt`: Technical and soft skills
- `projects.txt`: Notable projects
- `domains.txt`: Areas of expertise
- `linkedinData.txt`: Professional profile information

This modular approach makes it easy to update different aspects of the CV independently.

### 2. Frontend Implementation

The frontend is built with Angular and features a modern chat interface. The core functionality is implemented in a chat service that communicates with the backend:

```typescript
@Injectable({
  providedIn: "root",
})
export class ChatService {
  private apiUrl = "https://func-cv-chatbot.azurewebsites.net/api/cv-chatbot-backend";

  constructor(private http: HttpClient) {}

  sendMessage(query: string): Observable<any> {
    return this.http.post(this.apiUrl, { query });
  }
}
```

### 3. Backend Magic

The Azure Function backend serves as a bridge between the frontend and GPT-4. It:

1. Loads CV data from text files
2. Constructs a context-aware prompt
3. Communicates with OpenAI's API
4. Returns AI-generated responses

Key features of the backend:

- Automatic CV text loading from multiple possible paths
- Error handling and logging
- CORS support for secure communication
- Environment-based configuration

### 4. The AI Layer

The system uses a carefully crafted prompt to ensure GPT-4 stays in character and provides relevant information:

```typescript
const prompt = `
  You are an AI assistant representing David's professional career. Your role is to:
  - Only answer questions directly related to David's professional experience
  - Maintain a consistently positive and professional tone
  - Decline to answer personal questions
  - Never make assumptions about information not in the CV
  ...
`;
```

### 5. Infrastructure as Code

The entire infrastructure is managed through Terraform, making it easy to:

- Deploy consistently across environments
- Version control infrastructure changes
- Maintain infrastructure documentation as code
- Scale resources as needed

## Security Considerations

The project implements several security best practices:

- HTTPS for all communications
- API key management through Azure Key Vault
- CORS protection
- Input validation
- Regular dependency updates

## Deployment Process

The application is deployed using a combination of:

1. Azure Functions for the backend
2. Azure Static Web Apps for the frontend
3. GitHub Actions for CI/CD
4. Terraform for infrastructure provisioning

## Lessons Learned

1. **Prompt Engineering is Crucial**: The quality of AI responses heavily depends on well-crafted prompts that provide clear context and boundaries.

2. **Modular CV Data**: Separating CV information into different files makes maintenance easier and allows for more focused updates.

3. **Serverless Architecture**: Azure Functions proved perfect for this use case, offering scalability and cost-effectiveness for sporadic usage patterns.

4. **Infrastructure as Code**: Using Terraform from the start made infrastructure management and documentation much simpler.

## Future Improvements

Some potential enhancements for the future:

- Add conversation memory for more context-aware responses
- Implement user feedback mechanism
- Add support for multiple CV versions
- Enhance response caching for better performance
- Add analytics to track common questions

## Conclusion

Building this CV chatbot has been an exciting journey combining modern web development with AI capabilities. The end result is an interactive way for people to explore my professional background, demonstrating both technical capabilities and practical application of AI in a real-world scenario.

Feel free to check out the [live demo](https://ambitious-tree-0ccbf791e.4.azurestaticapps.net) or explore the [source code](https://github.com/davidkybber/kybber-website) to learn more!
