# FinEase: Your Smart Personal Finance Manager

 **Project Overview**

FinEase is a robust, full-stack personal finance management web application designed to help users take control of their financial journey. It provides a clean, responsive platform for tracking income, expenses, and managing financial goals through secure authentication, comprehensive transaction logging (CRUD), and dynamic data visualization. This application is built with **React** and uses modern principles of data fetching and responsive design.

---

 **Live Demo**

- Client Site URL: [https://serene-palmier-8ec1d1.netlify.app/]  
- Server Site URL: [https://assignment-10-server-kappa-one.vercel.app/]  

---

 **Key Features**

- **Secure & Seamless Authentication:**  
  Email/password and Google login/registration using Firebase, with strong password validation (uppercase, lowercase, min 6 characters) and session persistence on route reload.

- **Complete CRUD Transaction Management:**  
  Private routes allowing users to Create, Read, Update, and Delete financial records (Income/Expense) stored in **MongoDB**.

- **Dynamic Financial Reporting & Visualization:**  
  Visualize financial health with charts (Pie Charts for categories, Bar Charts for monthly totals) using **Recharts**.

- **Advanced Transaction Sorting:**  
  Sort transaction history by Date and Amount, with sorting handled on the server side for efficiency.

- **User-Centric Design & Theming:**  
  Fully responsive design with **Tailwind CSS** and **DaisyUI**, including a Light/Dark Mode toggle.

- **Protected Routes & Custom Notifications:**  
  Core features accessible only to logged-in users. Uses **SweetAlert2** and **React Hot Toast** for all success and error messages (no default browser alerts).

---

 **Technologies Used**

**Client-Side (Frontend):**  
- Framework: React (Vite)  
- Styling: Tailwind CSS, DaisyUI  
- Data Visualization: Recharts  
- Authentication: Firebase Client SDK  
- Routing & State: React Router v6  
- Notifications: SweetAlert2, React Hot Toast  

**Server-Side (Backend):**  
- Framework: Node.js, Express.js  
- Database: MongoDB  
- Authentication Middleware: Firebase Admin SDK (verifies tokens on protected routes)  

---

 **User Interface Structure**

- **Header:** Navigation bar with Home, Add Transaction, My Transactions, Reports, Login/Signup buttons (conditional). Displays user photo and dropdown when logged in.  
- **Main Section:** Displays content dynamically based on routes.  
- **Footer:** Logo, website name, contact details, terms & conditions, social media links (with new X logo).  
- **404 Page:** Custom Not Found page for invalid routes.  

---

 **Page & Route Details**

| Route | Description | Protected |
|-------|------------|-----------|
| `/` | Home page (banner, overview, tips) | No |
| `/add-transaction` | Add a new transaction (Income/Expense) | Yes |
| `/my-transactions` | View all transactions of logged-in user | Yes |
| `/transaction/:id` | View single transaction details | Yes |
| `/transaction/update/:id` | Update transaction | Yes |
| `/login` | Login page (Email/Password + Google) | No |
| `/register` | Registration page (Email/Password + Google) | No |
| `/reports` | Financial reports and charts | Yes |
| `/profile` | User profile management | Yes |
| `*` | 404 Not Found page | No |

---

 **Installation & Setup**

1. Clone the repository:

```bash
git clone https://github.com/mdabdulaziz6236/assignment-10-client