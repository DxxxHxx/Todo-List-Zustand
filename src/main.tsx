import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

async function deferRender() {
  const { worker } = await import("./mocks/browsers");
  return worker.start();
}

const queryClient = new QueryClient();

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </>
  );
});
