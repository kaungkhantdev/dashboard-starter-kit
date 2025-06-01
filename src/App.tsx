import { ThemeProvider } from "./components/common/ThemeProvider";
import MainLayout from "./layouts/MainLayout";
import { Routes } from "./router/routes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainLayout>
        <Routes />
      </MainLayout>
    </ThemeProvider>
  )
}
