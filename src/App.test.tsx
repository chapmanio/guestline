import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { App } from "./App";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

describe("App", () => {
  const renderIt = () =>
    render(
      <MemoryRouter initialEntries={["/"]}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>,
    );

  it("renders default hotels and navigates", async () => {
    const user = userEvent.setup();

    renderIt();

    expect(
      screen.getByRole("heading", { name: /hotels/i }),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.queryByRole("figure", { hidden: true }),
      ).not.toBeInTheDocument();
    });

    expect(
      screen.getByRole("link", { name: /fake hotel 1/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /fake hotel 2/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /fake hotel 1/i }));

    expect(
      screen.getByRole("heading", { name: /fake hotel 1/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/fake room 1/i)).toBeInTheDocument();
    expect(screen.getByText(/fake room 2/i)).toBeInTheDocument();
  });

  it("filters shown hotels", async () => {
    const user = userEvent.setup();

    renderIt();

    await waitFor(() => {
      expect(
        screen.queryByRole("figure", { hidden: true }),
      ).not.toBeInTheDocument();
    });

    expect(
      screen.getByRole("link", { name: /fake hotel 1/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /fake hotel 2/i }),
    ).toBeInTheDocument();

    const starRatingRadios = screen.getAllByRole("radio", {
      name: /and over/i,
    });

    expect(starRatingRadios).toHaveLength(5);

    // 4 stars
    await user.click(starRatingRadios[3]);

    await waitFor(() => {
      expect(
        screen.queryByRole("figure", { hidden: true }),
      ).not.toBeInTheDocument();
    });

    expect(
      screen.queryByRole("link", { name: /fake hotel 1/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /fake hotel 2/i }),
    ).toBeInTheDocument();
  });
});
