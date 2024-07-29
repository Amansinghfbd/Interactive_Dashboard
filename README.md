# Interactive Dashboard Application

## Overview

This project is an interactive dashboard application built using Next.js, React.js, TypeScript, HTML5, and CSS3. The application allows users to view various widgets including Line Charts, Bar Charts, and Data Tables, and customize their display through settings. It features dynamic component loading to avoid SSR issues and a theme-based layout for a personalized experience.

## Features

- **Dynamic Components**: Line Chart, Bar Chart, and Data Table components are dynamically imported to prevent server-side rendering issues.
- **Theme Support**: Users can toggle between light and dark themes.
- **Widget Customization**: Users can choose which widgets to display on the dashboard.
- **Responsive Design**: The application is designed to be responsive and adjusts to various screen sizes.

## Project Structure

- **`pages/`**: Contains the main pages of the application.
  - `dashboard.tsx`: The main dashboard page displaying the widgets.
  - `settings.tsx`: The settings page for customizing dashboard preferences.

- **`components/`**: Contains reusable components.
  - `Layout.tsx`: Provides the layout with theme-based navigation.
  - `BarChartComponent.tsx`: Displays a bar chart using Recharts.
  - `DataTableComponent.tsx`: Displays a data table with sample data.
  - `LineChartComponent.tsx`: Displays a line chart using Recharts.

- **`styles/`**: Contains global and component-specific styles.
  - `globals.css`: Global styles applied throughout the application.

## Setup

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Amansinghfbd/Interactive_Dashboard.git

2. Navigate to the project directory:

    ```bash
    cd your-repository

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install

### Running the Application

- To start the development server and run the application locally, use:

    ```bash
    npm run dev
    # or
    yarn dev

- Open your browser and navigate to http://localhost:3000 to view the application.

## Contact
For any questions or feedback, you can reach out to amansinghfbd100@gmail.com.