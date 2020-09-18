import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from "../api/fetchColors"

jest.mock('../api/fetchColors')

const colorData = [
   {color: "redpink", code: '', id: 4},
  {color: "lilac", code: '', id: 5},
  {color: "softpink", code: '', id: 6},
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(colorData)

  render(<BubblePage/>)

   screen.getByText(/bubbles/i)
});
