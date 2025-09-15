# User Dashboard App

A modern, responsive React application for managing user profiles with advanced search capabilities and intuitive navigation.

## 🚀 Features

- **Interactive Dashboard**: Browse users in a beautiful card-based layout
- **Advanced Search**: Real-time search and filtering by user name
- **User Details**: Comprehensive user profile pages with full information
- **Create Users**: Add new users with a comprehensive form
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Global State**: React Context API for efficient state management
- **Type Safety**: Full TypeScript implementation

## 🛠 Tech Stack

- **React 18** - Latest React with functional components and hooks
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing
- **React Context API** - Global state management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JSONPlaceholder API** - Fake REST API for user data
- **Vite** - Fast development server and build tool

## 📋 Requirements Fulfilled

### ✅ Dashboard Page
- [x] Fetch and display users from API (JSONPlaceholder)
- [x] Show user name, email, phone, and company in card layout
- [x] Basic search/filter by name functionality
- [x] "Create New User" form (client-side only)
- [x] React Context for global user state management

### ✅ User Details Page
- [x] React Router implementation for navigation
- [x] Full user details including address and geo-location
- [x] Clean, organized information display

### ✅ Responsive Design
- [x] Mobile-friendly design using Tailwind CSS
- [x] Responsive grid layouts
- [x] Optimized for all screen sizes

### ✅ Code Quality
- [x] Functional components with React hooks
- [x] Clean, modular code structure
- [x] TypeScript for type safety
- [x] Proper component organization

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-dashboard-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── UserCard.tsx    # User card component
│   ├── UserForm.tsx    # Create user form
│   └── SearchBar.tsx   # Search functionality
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard page
│   └── UserDetails.tsx # User details page
├── context/            # Global state management
│   └── UserContext.tsx # User context provider
├── types/              # TypeScript type definitions
│   └── User.ts         # User type interface
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Beautiful gradient overlays and buttons
- **Smooth Animations**: Hover effects and micro-interactions
- **Card-based Layout**: Clean, organized information display
- **Responsive Grid**: Adaptive layouts for different screen sizes
- **Icon Integration**: Consistent iconography using Lucide React
- **Loading States**: User-friendly loading and error states

## 📱 Screenshots

### Dashboard View
- Clean, modern interface with user cards
- Search functionality with real-time filtering
- Create new user button prominently displayed

### User Details View
- Comprehensive user information display
- Contact information section
- Address details with coordinates
- Company information panel

### Mobile Responsive
- Optimized layouts for mobile devices
- Touch-friendly interface elements
- Collapsible navigation

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🔧 Key Implementation Details

### State Management
- Uses React Context API with useReducer for complex state logic
- Global user state accessible throughout the application
- Optimistic updates for better user experience

### API Integration
- Fetches real user data from JSONPlaceholder API
- Error handling for network requests
- Loading states during data fetching

### Routing
- React Router DOM for client-side navigation
- Protected routes and error handling
- Clean URLs with user IDs

### Form Handling
- Controlled components for form inputs
- Form validation and error states
- Optimistic UI updates

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

Build the project using `npm run build` and deploy the `dist` folder.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS