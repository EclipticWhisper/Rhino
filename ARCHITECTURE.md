# Rhino_Daizo Application Architecture

## Overall System Architecture

```mermaid
graph TB
    subgraph Client["Frontend (React + Vite)"]
        Browser[Browser]
        Router[React Router]
        Redux[Redux Store]
        Components[React Components]
        Motion[Framer Motion]
    end
    
    subgraph Server["Backend (Express.js)"]
        API[Express API Server]
        Files[Static Files]
        Data[(JSON Data Files)]
    end
    
    Browser --> Router
    Router --> Components
    Components --> Redux
    Components --> Motion
    Components --> API
    API --> Data
    API --> Files
    
    style Client fill:#1f1a09
    style Server fill:#2c1810
```

## Application Routes Structure

```mermaid
graph LR
    Root["/"] --> Home[HomePage]
    Root --> Meals["/meals"]
    Root --> MealDetail["/meals/:id"]
    Root --> Menu["/menu"]
    Root --> Locations["/locations"]
    Root --> Loyalty["/loyalty"]
    Root --> About["/about"]
    Root --> Contact["/contact"]
    Root --> Jobs["/restaurant-jobs"]
    Root --> Story["/our-story"]
    Root --> Error404[404 Page]
    
    Home --> HeroSection
    Home --> MealsComp[Meals Component]
    Home --> AboutComp[About Component]
    Home --> ContactComp[Contact Component]
    
    style Root fill:#ffc404
    style Home fill:#ffab04
```

## Component Hierarchy

```mermaid
graph TD
    App[Root Layout] --> Header
    App --> Outlet[Page Content]
    App --> Footer
    App --> Cart[Cart Modal]
    App --> Checkout[Checkout Modal]
    
    Header --> Logo
    Header --> NavLinks
    Header --> CartButton
    Header --> Hamburger
    
    Outlet --> HomePage
    Outlet --> MealsPage
    Outlet --> MenuPage
    Outlet --> LocationsPage
    Outlet --> LoyaltyPage
    Outlet --> AboutPage
    Outlet --> ContactPage
    Outlet --> JobsPage
    Outlet --> StoryPage
    
    HomePage --> HeroSection
    HomePage --> MealsSection
    HomePage --> AboutSection
    HomePage --> ContactSection
    
    MealsSection --> MealItem1[MealItem]
    MealsSection --> MealItem2[MealItem]
    MealsSection --> MealItemN[MealItem...]
    
    MealItem1 --> MealDetail[Click → /meals/:id]
    
    style App fill:#ffc404
    style Header fill:#ffab04
    style Outlet fill:#1f1a09
```

## Data Flow Architecture

```mermaid
sequenceDiagram
    participant User
    participant Component
    participant Redux Store
    participant API
    participant Backend
    participant JSON Files
    
    User->>Component: Interact (click/input)
    
    alt Fetch Data
        Component->>API: useHttp Hook (GET)
        API->>Backend: HTTP Request
        Backend->>JSON Files: Read Data
        JSON Files-->>Backend: Return Data
        Backend-->>API: JSON Response
        API-->>Component: Update State
        Component-->>User: Render UI
    end
    
    alt Add to Cart
        Component->>Redux Store: dispatch(addItem)
        Redux Store->>Redux Store: Update Cart State
        Redux Store-->>Component: New State
        Component-->>User: Update Cart UI
    end
    
    alt Submit Form
        User->>Component: Fill Form
        Component->>API: POST Request
        API->>Backend: HTTP POST
        Backend->>JSON Files: Write Data
        JSON Files-->>Backend: Success
        Backend-->>API: Response
        API-->>Component: Success Message
        Component-->>User: Show Feedback
    end
```

## State Management (Redux)

```mermaid
graph TB
    subgraph Redux Store
        CartState[Cart State]
        ProgressState[Progress State]
    end
    
    subgraph Cart Actions
        AddItem[addItem]
        RemoveItem[removeItem]
        ClearCart[clearCart]
    end
    
    subgraph Progress Actions
        ShowCart[showCart]
        ShowCheckout[showCheckout]
        HideModal[hideModal]
    end
    
    Components --> CartActions
    Components --> ProgressActions
    
    CartActions --> CartState
    ProgressActions --> ProgressState
    
    CartState --> Components
    ProgressState --> Components
    
    CartState --> |Items Array| MealItem
    CartState --> |Quantity| CartDisplay
    ProgressState --> |'cart'/'checkout'/null| ModalRender
    
    style CartState fill:#ffc404
    style ProgressState fill:#ffab04
```

## API Endpoints

```mermaid
graph LR
    subgraph Backend API
        GET1[GET /meals]
        GET2[GET /meals/:id]
        POST1[POST /orders]
        POST2[POST /contact]
    end
    
    subgraph Data Files
        MealsJSON[available-meals.json]
        OrdersJSON[orders.json]
        ContactJSON[contact.json]
    end
    
    GET1 --> MealsJSON
    GET2 --> MealsJSON
    POST1 --> OrdersJSON
    POST2 --> ContactJSON
    
    style Backend fill:#2c1810
```

## Animation Flow (Framer Motion)

```mermaid
graph TD
    Viewport[Scroll into Viewport] --> Observer[IntersectionObserver]
    Observer --> Trigger[Trigger Animation]
    
    Trigger --> Variants[Motion Variants]
    
    Variants --> FadeUp[fadeUp]
    Variants --> FadeUpSlow[fadeUpSlow]
    Variants --> ScaleIn[scaleIn]
    Variants --> Stagger[stagger]
    
    FadeUp --> Component1[Hero]
    FadeUpSlow --> Component2[Section Headers]
    ScaleIn --> Component3[Cards]
    Stagger --> Component4[Lists]
    
    Component1 --> Render[Animate & Render]
    Component2 --> Render
    Component3 --> Render
    Component4 --> Render
    
    style Variants fill:#ffc404
```

## User Journey Flow

```mermaid
graph TD
    Start[User Visits Site] --> Landing[Homepage]
    
    Landing --> Browse[Browse Meals]
    Landing --> ViewMenu[View Menu Page]
    Landing --> CheckLocations[Check Locations]
    Landing --> JoinLoyalty[Loyalty Program]
    
    Browse --> ViewMeal[Click Meal]
    ViewMeal --> MealDetail[Meal Detail Page]
    MealDetail --> AddCart[Add to Cart]
    
    AddCart --> ContinueShopping[Continue Shopping]
    AddCart --> OpenCart[Open Cart]
    
    OpenCart --> ReviewCart[Review Items]
    ReviewCart --> Checkout[Proceed to Checkout]
    
    Checkout --> FillForm[Fill Customer Info]
    FillForm --> SubmitOrder[Submit Order]
    SubmitOrder --> Confirmation[Order Confirmed]
    
    ViewMenu --> Filter[Filter by Category]
    Filter --> SelectItem[Select Item]
    
    CheckLocations --> FindStore[Find Nearest Store]
    FindStore --> ViewHours[Check Hours]
    
    JoinLoyalty --> SignUp[Sign Up]
    SignUp --> EarnPoints[Earn Points]
    
    style Start fill:#ffc404
    style Confirmation fill:#a7e39f
```

## Technology Stack

```mermaid
graph TB
    subgraph Frontend
        React[React 19]
        ReactRouter[React Router v7]
        ReduxToolkit[Redux Toolkit]
        FramerMotion[Framer Motion]
        Vite[Vite Build Tool]
    end
    
    subgraph Backend
        Express[Express.js]
        BodyParser[Body Parser]
        NodeFS[Node FS Module]
    end
    
    subgraph Styling
        CSS[CSS Modules]
        CustomCSS[Custom Styles]
        GoogleFonts[Google Fonts]
    end
    
    subgraph Tools
        Git[Git Version Control]
        NPM[NPM Package Manager]
        ESLint[ESLint]
    end
    
    React --> Vite
    React --> ReactRouter
    React --> ReduxToolkit
    React --> FramerMotion
    React --> CSS
    
    Express --> BodyParser
    Express --> NodeFS
    
    style React fill:#ffc404
    style Express fill:#ffab04
```

## File Structure Overview

```
Rhino_Daizo App/
├── backend/
│   ├── app.js              → Express server
│   ├── package.json        → Backend dependencies
│   ├── data/               → JSON data storage
│   │   ├── available-meals.json
│   │   ├── orders.json
│   │   └── contact.json
│   └── public/             → Static assets
│       └── images/
│
├── src/
│   ├── main.jsx            → App entry point
│   ├── Root.jsx            → Root layout
│   ├── components/         → React components
│   │   ├── Header.jsx
│   │   ├── Footer/
│   │   ├── Meals.jsx
│   │   ├── MealItem.jsx
│   │   ├── MenuDetail.jsx
│   │   ├── Locations.jsx
│   │   ├── Loyalty.jsx
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── OurStory/
│   │   ├── Restaurant-jobs/
│   │   ├── UI/             → Reusable UI components
│   │   └── css/            → Component styles
│   │
│   ├── pages/              → Page components
│   │   ├── HomePage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── LocationsPage.jsx
│   │   └── ...
│   │
│   ├── routes/
│   │   └── routes.jsx      → Route definitions
│   │
│   ├── Store/              → Redux store
│   │   ├── CartRedux.js    → Cart slice
│   │   └── Progress.js     → Progress slice
│   │
│   ├── Hooks/
│   │   └── useHttp.js      → Custom fetch hook
│   │
│   ├── Utils/
│   │   ├── CurrencyFormatter.js
│   │   └── motionVariants.js
│   │
│   └── styles/             → Global styles
│       ├── globals.css
│       ├── base.css
│       └── ...
│
├── package.json            → Frontend dependencies
├── vite.config.js          → Vite configuration
└── index.html              → HTML entry
```

---

## Key Features

### 1. **Dynamic Meal System**
- Fetches meals from backend API
- Individual meal detail pages
- Add to cart functionality
- Real-time cart updates

### 2. **Smooth Animations**
- Scroll-triggered animations via Framer Motion
- Fade, scale, and stagger effects
- Viewport-aware loading
- Respects reduced-motion preferences

### 3. **State Management**
- Redux Toolkit for global state
- Cart state management
- Modal/progress state
- Persistent across navigation

### 4. **Responsive Design**
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Adaptive typography

### 5. **Form Handling**
- Contact form submission
- Job application form
- Checkout process
- Form validation

### 6. **Multiple Pages**
- Home (Hero + Meals + About + Contact)
- Menu with category filters
- Locations with store info
- Loyalty rewards program
- About page with flip cards
- Contact page with form
- Jobs application page
- Our Story timeline

---

## Development Workflow

```mermaid
graph LR
    Development[Development] --> Git[Git Commit]
    Git --> Push[Push to Origin]
    Push --> Deploy[Deploy to Production]
    
    Development --> LocalTest[Test Locally]
    LocalTest --> Frontend[Frontend: npm run dev]
    LocalTest --> Backend[Backend: npm start]
    
    Frontend --> Port5173[Port 5173/5174]
    Backend --> Port3000[Port 3000]
    
    Port5173 --> Browser[Browser Testing]
    Port3000 --> API_Test[API Testing]
    
    style Development fill:#ffc404
```

---

**Created:** January 4, 2026  
**Version:** 1.0.0
