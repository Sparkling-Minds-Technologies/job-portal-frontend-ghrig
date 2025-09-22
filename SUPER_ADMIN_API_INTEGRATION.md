# Super Admin API Integration

This document outlines the integration of Super Admin APIs into the job portal application.

## ✅ Completed Integration

### 1. Updated Authentication API

- **File**: `src/api/superAdmin/auth.js`
- **Updated**: Login endpoint to use `/super-admin/login`
- **Status**: ✅ Complete

### 2. Sector Specialization Management

- **API File**: `src/api/superAdmin/sectorSpecialization.js`
- **Hook File**: `src/hooks/superAdmin/useSectorSpecialization.js`
- **Example Component**: `src/components/super-admin-view/examples/SectorSpecializationExample.jsx`

**Available Functions**:

- `createSectorSpecialization(data)` - Create new sector specialization
- `getSectorSpecializations()` - Get all sector specializations
- `updateSectorSpecialization(id, data)` - Update sector specialization
- `toggleSectorSpecializationStatus(id)` - Toggle status
- `deleteSectorSpecialization(id)` - Delete sector specialization

**React Query Hooks**:

- `useSectorSpecializations()` - Get all specializations
- `useCreateSectorSpecialization()` - Create new specialization
- `useUpdateSectorSpecialization()` - Update specialization
- `useToggleSectorSpecializationStatus()` - Toggle status
- `useDeleteSectorSpecialization()` - Delete specialization

### 3. Skill Management

- **API File**: `src/api/superAdmin/skill.js`
- **Hook File**: `src/hooks/superAdmin/useSkill.js`
- **Example Component**: `src/components/super-admin-view/examples/SkillManagementExample.jsx`

**Available Functions**:

- `createSkill(data)` - Create new skill
- `getSkills()` - Get all skills
- `getSkillById(id)` - Get specific skill
- `updateSkill(id, data)` - Update skill
- `deleteSkill(id)` - Delete skill
- `toggleSkillStatus(id)` - Toggle skill status

**React Query Hooks**:

- `useSkills()` - Get all skills
- `useSkillById(id)` - Get specific skill
- `useCreateSkill()` - Create new skill
- `useUpdateSkill()` - Update skill
- `useDeleteSkill()` - Delete skill
- `useToggleSkillStatus()` - Toggle skill status

## 🔧 API Endpoints Structure

### Authentication

```
POST /api/v1/super-admin/login
```

### Sector Specialization

```
POST /api/v1/super-admin/sector-specialization
GET /api/v1/super-admin/sector-specialization
PUT /api/v1/super-admin/sector-specialization/:id
PUT /api/v1/super-admin/sector-specialization/status/:id
DELETE /api/v1/super-admin/sector-specialization/:id
```

### Skills

```
POST /api/v1/super-admin/skill/create
GET /api/v1/super-admin/skill/list
GET /api/v1/super-admin/skill/:id
PUT /api/v1/super-admin/skill/:id
DELETE /api/v1/super-admin/skill/:id
PATCH /api/v1/super-admin/skill/:id/toggle-status
```

## 🚀 How to Use

### 1. Import the Hooks

```javascript
import {
  useSectorSpecializations,
  useCreateSectorSpecialization,
  useUpdateSectorSpecialization,
  useDeleteSectorSpecialization,
  useToggleSectorSpecializationStatus,
} from "../hooks/superAdmin/useSectorSpecialization";

import {
  useSkills,
  useSkillById,
  useCreateSkill,
  useUpdateSkill,
  useDeleteSkill,
  useToggleSkillStatus,
} from "../hooks/superAdmin/useSkill";
```

### 2. Use in Components

```javascript
const MyComponent = () => {
  // Get all sector specializations
  const { data: specializations, isLoading } = useSectorSpecializations();

  // Create new specialization
  const createMutation = useCreateSectorSpecialization();

  const handleCreate = (data) => {
    createMutation.mutate(data);
  };

  return (
    // Your component JSX
  );
};
```

### 3. Features Included

- ✅ Automatic loading states
- ✅ Error handling with toast notifications
- ✅ Success notifications
- ✅ Query invalidation for real-time updates
- ✅ Optimistic updates
- ✅ Request cancellation support

## 📁 File Structure

```
src/
├── api/superAdmin/
│   ├── auth.js (updated)
│   ├── sectorSpecialization.js (new)
│   └── skill.js (new)
├── hooks/superAdmin/
│   ├── useSectorSpecialization.js (new)
│   └── useSkill.js (new)
└── components/super-admin-view/examples/
    ├── SectorSpecializationExample.jsx (new)
    └── SkillManagementExample.jsx (new)
```

## 🔐 Authentication

All APIs (except login) require Super Admin authentication:

- JWT token automatically attached via axios interceptors
- Token obtained from `/super-admin/login` endpoint
- User must have `role: 'super-admin'`

## 🎯 Next Steps

1. **Integrate into existing pages**: Use the example components as reference to integrate these APIs into your existing Super Admin pages
2. **Customize UI**: Modify the example components to match your design system
3. **Add validation**: Implement form validation as needed
4. **Add pagination**: If your APIs support pagination, update the hooks accordingly
5. **Add filtering/searching**: Enhance the components with search and filter capabilities

## 📝 Notes

- All hooks follow the existing patterns in your codebase
- Error handling is consistent with your current implementation
- Toast notifications are used for user feedback
- React Query is used for state management and caching
- The examples include full CRUD operations with proper loading states
