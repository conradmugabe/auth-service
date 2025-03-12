import express from "express";
import { MockProxy, mock } from "vitest-mock-extended";

import { Router } from "../../../src/server/http/interface";
import { combineRouters } from "../../../src/server/http/utils";

describe("HTTP Utils", () => {
  describe("combineRouters", () => {
    let mockRouter1: MockProxy<Router>;
    let mockRouter2: MockProxy<Router>;

    let mockExpressRouter: express.Router;
    let mockUse: ReturnType<typeof vi.fn>;

    beforeEach(() => {
      mockRouter1 = mock<Router>();
      mockRouter2 = mock<Router>();

      // Mock express Router and its use method
      mockUse = vi.fn();
      mockExpressRouter = { use: mockUse } as unknown as express.Router;
      vi.spyOn(express, "Router").mockReturnValue(mockExpressRouter);

      return () => {
        vi.restoreAllMocks();
      };
    });

    it("should combine multiple routers correctly", () => {
      const result = combineRouters([mockRouter1, mockRouter2]);

      // Verify express.Router was called
      expect(express.Router).toHaveBeenCalledTimes(1);

      // Verify router.use was called for each router
      expect(mockUse).toHaveBeenCalledTimes(2);
      expect(mockUse).toHaveBeenNthCalledWith(1, mockRouter1.getRouter());
      expect(mockUse).toHaveBeenNthCalledWith(2, mockRouter2.getRouter());

      // Verify the result is the combined router
      expect(result).toBe(mockExpressRouter);
    });

    it("should return an empty router when given an empty array", () => {
      const result = combineRouters([]);

      // Verify express.Router was called
      expect(express.Router).toHaveBeenCalledTimes(1);

      // Verify router.use was not called
      expect(mockUse).not.toHaveBeenCalled();

      // Verify the result is the empty router
      expect(result).toBe(mockExpressRouter);
    });

    it("should work with a single router", () => {
      const result = combineRouters([mockRouter1]);

      // Verify express.Router was called
      expect(express.Router).toHaveBeenCalledTimes(1);

      // Verify router.use was called once with the correct router
      expect(mockUse).toHaveBeenCalledTimes(1);
      expect(mockUse).toHaveBeenCalledWith(mockRouter1.getRouter());

      // Verify the result is the combined router
      expect(result).toBe(mockExpressRouter);
    });
  });
});
