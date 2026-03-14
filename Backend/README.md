# PrepForge Backend

A Node.js/Express.js backend API for the Full Gen AI application, providing authentication, AI services, and data management.

## Features

- User authentication with JWT tokens
- Password hashing with bcrypt
- MongoDB database integration
- **AI service integration using Google GenAI SDK**
- CORS support for frontend communication
- Cookie-based session management
- **ATS-friendly resume PDF generation**

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **CORS**: Enabled for cross-origin requests

## Project Structure

```
Backend/
├── server.js              # Application entry point
├── package.json           # Dependencies and scripts
├── src/
│   ├── app.js            # Express app configuration
│   ├── config/
│   │   └── database.js   # MongoDB connection
│   ├── controllers/
│   │   └── auth.controller.js  # Authentication logic
│   ├── middlewares/
│   │   └── auth.middleware.js  # Authentication middleware
│   ├── models/
│   │   ├── user.model.js       # User data model
│   │   ├── blacklist.model.js  # Token blacklist model
│   │   └── interviewReport.model.js  # Interview report model
│   ├── routes/
│   │   └── auth.routes.js      # Authentication routes
│   └── services/
│       └── ai.service.js       # AI service integration
```

## Installation

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

## Usage

### Development

Start the development server with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

#### Interview Reports
- `POST /api/interview/` - Generate interview report
- `GET /api/interview/report/:interviewId` - Get interview report by ID
- `GET /api/interview/` - Get all interview reports for user
- `POST /api/interview/resume/pdf/:interviewReportId` - Generate and download ATS-friendly resume PDF

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token signing
- `PORT`: Server port (default: 3000)

## Dependencies

### Production
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `jsonwebtoken`: JWT implementation
- `bcryptjs`: Password hashing
- `cookie-parser`: Cookie parsing
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management
- `@google/genai`: Google GenAI SDK for AI features
- `multer`: File upload handling
- `pdf-parse`: PDF processing
- `zod`: Validation library
- `zod-to-json-schema`: Convert Zod schemas to JSON Schema

## Development Dependencies

- `nodemon`: Auto-restart during development

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

### Fetching the Latest Code

To ensure you have the complete and latest copy of the project, clone or pull the repository from the GitHub remote:

```bash
# clone the entire repository (contains both Backend and Frontend)
git clone https://github.com/HarshVardhan264/Full-gen-ai.git

# or, if you already have the repo, update it:
cd Full-gen-ai
git pull origin main
```

This will download the **Backend** and **Frontend** directories along with all files.
