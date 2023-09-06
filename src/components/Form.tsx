import { mergeClasses } from "../utils";

function Form({ children }) {
  return <form hx-post="/form">{children}</form>;
}

function FormField({ id, label, value = "", errors = [] }) {
  return (
    <div class="pb-2" hx-target="this" hx-swap="outerHTML">
      <label
        class={mergeClasses("pr-2", errors.length && "text-red-400")}
        for={id}
      >
        {label}:
      </label>
      <input
        aria-invalid={errors.length ? "true" : "false"}
        class={mergeClasses("border w-full", errors.length && "text-red-400")}
        id={id}
        name={id}
        value={value}
        hx-post={`/form/validate/${id}`}
        hx-trigger="keyup delay:200ms changed"
      ></input>
      {Boolean(errors.length) && (
        <div>
          <ul>
            {errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export { Form, FormField };
