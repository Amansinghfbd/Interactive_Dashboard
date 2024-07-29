import React from "react";
import Link from "next/link";
import "@/styles/globals.css";

interface LayoutProps {
  children: React.ReactNode;
  theme: string;
}

const Layout: React.FC<LayoutProps> = ({ children, theme }) => {
  return (
    <div className={`layout ${theme}`}>
      <nav className={`navbar ${theme}`}>
        <ul>
          <li>
            <Link href="/dashboard" legacyBehavior>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/settings" legacyBehavior>
              <a>Settings</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        .navbar {
          padding: 20px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .navbar.light {
          background-color: #eee;
        }
        .navbar.dark {
          background-color: #333;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }
        .navbar li {
          margin-right: 20px;
        }
        .navbar a {
          color: inherit;
          text-decoration: none;
          font-size: 18px;
          margin-right: 5px;
        }
        .navbar a:hover {
          text-decoration: underline;
          color: blue;
        }
        main {
          padding: 0px;
        }
        .layout.light {
          background-color: #fff;
          color: #000;
        }
        .layout.dark {
          background-color: #333;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Layout;
