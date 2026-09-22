import mongoose from "mongoose";
import Branches from "./branch.model.js";

export const addReservationToBranchService = async ({
  branchId,
  reservationId,
}: {
  branchId: mongoose.Types.ObjectId;
  reservationId: mongoose.Types.ObjectId;
}) => {
  if (!mongoose.isValidObjectId(branchId)) {
    throw new Error("The branch ID is invalid");
  }

  if (!mongoose.isValidObjectId(reservationId)) {
    throw new Error("The reservation ID is invalid");
  }

  const updatedBranch = await Branches.findByIdAndUpdate(
    branchId,
    {
      $addToSet: {
        reservations: reservationId,
      },
    },
    {
      new: true,
      runValidators: true,
    },
  ).populate("reservations");

  if (!updatedBranch) {
    throw new Error("Branch not found");
  }

  return updatedBranch;
};
