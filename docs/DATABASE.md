# Database Schema & Data Models

The platform uses MongoDB 7.0+ with Mongoose. Every document includes standard audit fields:
- `_id`: ObjectId
- `createdAt`: Date
- `updatedAt`: Date
- `createdBy`: String
- `updatedBy`: String
- `status`: Enum (`active`, `inactive`, `archived`, `deleted`)
- `version`: Number

## Collections (35+)
1. Admin & Users: `admins`, `visitors`, `subscribers`
2. Portfolio CMS: `projects`, `blogs`, `categories`, `tags`, `skills`, `subjects`, `programminglanguages`, `frameworks`, `tools`
3. Career & Experience: `internships`, `workexperiences`, `researchpapers`, `publications`, `patents`
4. Achievements & Credentials: `certificates`, `awards`, `competitions`, `scholarships`, `positions`, `volunteerings`, `extracurriculars`
5. Documents & Media: `resumes`, `resumeversions`, `documents`, `medias`
6. Engagement & Analytics: `notifications`, `emailhistories`, `comments`, `likes`, `analytics`, `searchhistories`, `chathistories`
7. AI & Settings: `knowledgedocuments`, `aimetadatas`, `logmetadatas`, `systemsettings`, `applicationsettings`
