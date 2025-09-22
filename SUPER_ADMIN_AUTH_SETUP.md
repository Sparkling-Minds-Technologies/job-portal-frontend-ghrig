# Super Admin Authentication Setup

This document outlines the Super Admin authentication system with login functionality.

## ✅ Completed Implementation

### 1. Authentication APIs

- **Login Endpoint**: `POST /api/v1/super-admin/login`
- **File**: `src/api/superAdmin/auth.js`

### 2. Authentication Hooks

- **Login Hook**: `useLogin()` - Handles login with remember me functionality
- **File**: `src/hooks/superAdmin/useAuth.js`

### 3. Pages and Components

- **Login Page**: `src/pages/super-admin-view/log-in.jsx`
- **Login Component**: `src/components/super-admin-view/log-in/index.jsx`

### 4. Routes

- **Login Route**: `/super-admin/log-in`
- **Dashboard Route**: `/super-admin/dashboard` (protected)

### 5. Form Configuration

- **Login Fields**: `LoginFields` in `src/config/index.js`

## 🔧 API Integration Details

### Login Request Format

```javascript
{
  "email": "admin@example.com",
  "password": "password123",
  "rememberme": true // optional
}
```

### Response Format

```javascript
{
  "data": {
    "message": "Login successful",
    "data": {
      "token": "jwt_token_here",
      "user": {
        "id": "user_id",
        "email": "admin@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "role": "super-admin"
      }
    }
  }
}
```

## 🚀 Features Implemented

### Login Features

- ✅ Email and password validation
- ✅ Remember me functionality
- ✅ Automatic token storage (localStorage/sessionStorage)
- ✅ Toast notifications for success/error
- ✅ Automatic redirect to dashboard on success
- ✅ Form validation with Zod schema
- ✅ Loading states during authentication

### Security Features

- ✅ JWT token authentication
- ✅ Automatic token attachment to API requests
- ✅ Role-based access control (super-admin role)
- ✅ Password validation (minimum 6 characters)
- ✅ Email format validation

## 📱 User Interface

### Login Page

- Professional Super Admin branding
- Clean form layout with validation
- Remember me checkbox
- Forgot password link (placeholder)
- Loading states with spinner
- Responsive design

## 🔄 Authentication Flow

### Login Flow

1. User enters email and password
2. Form validation occurs
3. API call to `/api/v1/super-admin/login`
4. On success:
   - Token stored in localStorage/sessionStorage
   - User data stored in Zustand store
   - Toast notification shown
   - Redirect to `/super-admin/dashboard`
5. On error:
   - Error toast notification shown
   - Form remains for retry

## 🛡️ Security Considerations

- All API endpoints (except login) require authentication
- JWT tokens are automatically attached to requests
- Role validation ensures only super-admin users can access protected routes
- Passwords are validated on both client and server side
- Form validation prevents invalid data submission

## 📁 File Structure

```
src/
├── api/superAdmin/
│   └── auth.js (login API)
├── hooks/superAdmin/
│   └── useAuth.js (login hook)
├── pages/super-admin-view/
│   └── log-in.jsx (login page)
├── components/super-admin-view/
│   └── log-in/index.jsx (login component)
├── config/
│   └── index.js (form field configurations)
└── App.jsx (routing configuration)
```

## 🎯 Usage Instructions

### For Developers

1. **Login**: Navigate to `/super-admin/log-in`
2. **Protected Routes**: All routes under `/super-admin/*` require authentication

### For Users

1. **Existing Users**: Use login form with email and password
2. **Remember Me**: Check the checkbox to stay logged in longer

## 🔧 Customization Options

### Styling

- Colors and branding can be updated in component files
- Form layouts can be modified in the config file
- Responsive breakpoints can be adjusted

### Validation

- Password requirements can be updated in the Zod schema
- Email validation rules can be modified
- Additional fields can be added to registration

### Navigation

- Redirect URLs can be changed in the auth hooks
- Additional routes can be added to the protected area
- Menu items can be updated in the layout component

## 🐛 Troubleshooting

### Common Issues

1. **Token not stored**: Check localStorage/sessionStorage permissions
2. **API errors**: Verify endpoint URLs and server connectivity
3. **Form validation**: Check Zod schema configuration
4. **Redirects not working**: Verify route configuration in App.jsx

### Debug Steps

1. Check browser console for JavaScript errors
2. Verify API responses in Network tab
3. Check Zustand store state in Redux DevTools
4. Validate form data before submission

## 📝 Notes

- The system uses Zustand for state management
- React Query is used for API calls and caching
- Toast notifications provide user feedback
- All forms include proper loading states
- The design is consistent with the existing application theme
