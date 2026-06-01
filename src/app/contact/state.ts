/**
 * Shape + initial value for the contact form's action state. Lives in
 * its own (non-"use server") module so the constant can be safely
 * imported by client components — Next.js requires that every export
 * in a "use server" file be an async function, and stuffing a plain
 * object alongside the action breaks the server-action registry with
 * a generic E352 "couldn't load" error in production.
 */
export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};
