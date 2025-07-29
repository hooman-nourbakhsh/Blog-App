# Next.js Blog Platform

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/> <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=tanstack&logoColor=white" alt="TanStack Query"/> <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>

<br>

A full-featured, modern blog platform built with Next.js, featuring a complete admin dashboard for content management, user authentication, and a dynamic, server-rendered frontend. This project showcases advanced concepts in modern web development, including Server Components, Server Actions, and a robust client-side data management layer.

---

## ✨ Key Features

- **Complete Admin Dashboard**: A secure, feature-rich dashboard for managing posts.
- **Full CRUD for Posts**: Create, Read, Update, and Delete posts with a rich text editor and image uploads.
- **Advanced Authentication**: Secure user authentication and session management with JWT (via cookies) and automatic token refresh.
- **Route Protection**: Middleware-based protection for admin and user-specific routes.
- **Nested Commenting System**: A hierarchical comment section allowing users to reply to each other.
- **Dynamic Content**:
  - **SSG for Posts**: Blog posts are statically generated for maximum performance.
  - **Server-Side Filtering**: Filter posts by category and search queries.
  - **Related Posts**: A section to display related articles, encouraging user engagement.
- **Client-Side Data Management**: Robust handling of client-side state and mutations with **TanStack Query**.
- **Responsive Design**: Fully responsive UI for both the public-facing blog and the admin dashboard.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15+ (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**:
  - **Client-Side**: [TanStack Query (React Query)](https://tanstack.com/query/latest) for server state.
  - **Global**: React Context API for authentication state.
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Yup](https://github.com/jquense/yup) for validation.
- **HTTP Client**: [Axios](https://axios-http.com/) with interceptors for token management.
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hooman-nourbakhsh/Blog-App.git
    cd Blog-App
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. You can use `.env.example` as a template.

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:3000`.

## 📄 License

This project is licensed under the Apache License 2.0.

You are free to use, modify, and distribute this software, but you must provide proper attribution to the original authors. For more details, see the [`Apache License`](./LICENSE) file.

---

## Made with 💖 by Hooman
