import mongoose from "mongoose";
import z from "zod";

const objectIdSchema = (errMes?: string) =>
  z.string(errMes).refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: errMes,
  });

export const createReservationSchema = z.object({
  date: z.string().datetime("the date must be a valid date"),
  notes: z.string().optional(),
  branch: objectIdSchema("the branch id is required and must be a valid"),
  radiologies: z.array(
    objectIdSchema("the radiology id is required and must be a valid"),
    "the radiologies list is required",
  ),
  fromPartner: objectIdSchema("the partner id is required and must be a valid"),
  clientName: z.string("client name is required"),
  clientAge: z.number("the client age is required and must be a number"),
  clientPhone: z.string("the client phone is required"),
});
