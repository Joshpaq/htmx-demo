import render from "preact-render-to-string";

import { FormField } from "../components/Form";

import { z } from "zod";

const form = [
  {
    id: "first",
    label: "First Name",
    schema: z.string().min(5, {
      message: "First Name must be longer than 5 characters",
    }),
  },
  {
    id: "last",
    label: "Last Name",
    schema: z.string().min(5, {
      message: "Last Name must be longer than 5 characters",
    }),
  },
  {
    id: "email",
    label: "Email",
    schema: z.string().email(),
  },
];

function validate(id, value) {
  const fieldDefinition = form.find((field) => field.id === id);
  const validationResult = fieldDefinition.schema.safeParse(value);
  const errors =
    validationResult.success === false
      ? validationResult.error.errors.map((error) => error.message)
      : [];

  const html = render(
    FormField({
      id,
      label: fieldDefinition.label,
      value,
      errors,
    })
  );

  return html;
}

export { form, validate };
