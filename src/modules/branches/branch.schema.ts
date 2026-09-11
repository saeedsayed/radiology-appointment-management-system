import Z from "zod";
export const createBranchSchema = Z.object({
  name: Z.string("the branch name is required").min(3),
  address: Z.string("the branch address is required").min(3),
});
