import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

import DashboardLayout from "../pages/DashboardLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("FIRST TEST SUITE", () => {
  test("BY DEFAULT SIDEBAR IS OPEN", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DashboardLayout />
      </QueryClientProvider>
    );
    const element = screen.getByText("Mapify");
    expect(element).toBeVisible();
  });
});
