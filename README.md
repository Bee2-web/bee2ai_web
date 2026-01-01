# Bee2 AI - Retail Forecasting & Planning

Bee2 AI is a next-generation demand forecasting and inventory planning platform designed for modern retailers. It leverages advanced AI to predict consumer demand, optimize stock levels, and maximize profitability across the entire supply chain.

## 🚀 Features

-   **Demand Forecasting:** SKU/Store level predictions using AI that analyzes thousands of variables including seasonality and local events.
-   **End-to-End Inventory Planning:** Unified platform for balancing stock from factory to shelf, reducing stock-outs and spoilage.
-   **Pricing & Promotion:** Dynamic pricing optimization and promotion impact analysis to maximize ROI.
-   **Seasonal Planning:** Specialized tools for managing seasonal inventory, markdowns, and clearance strategies.
-   **Multi-Language Support:** Fully internationalized (i18n) supporting **English**, **Turkish**, and **Arabic** (including RTL layout).
-   **Modern UI/UX:** Built with a focus on aesthetics, featuring smooth animations, responsive design, and intuitive data visualization.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Lottie](https://lottiefiles.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

-   Node.js 18.17 or later
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/forecasting-web.git
    cd forecasting-web
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `.next/` directory.

To start the production server:

```bash
npm start
```

## 🌍 Internationalization (i18n)

The application supports multiple locales. Routes are automatically prefixed:
-   `/en` - English (Default)
-   `/tr` - Turkish
-   `/ar` - Arabic

Translations are managed in the `messages/` directory:
-   `en.json`
-   `tr.json`
-   `ar.json`

## 🤝 Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
