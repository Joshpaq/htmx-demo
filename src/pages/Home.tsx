import { Layout } from "./Layout";
import { Form, FormField } from "../components/Form";

import { form } from "../services/form";

function Home() {
  return (
    <Layout>
      <header></header>
      <div class="container">
        <div class="flex h-full w-full justify-center items-center">
          <div class="rounded-xl border shadow m-6 p-6">
            <Form>
              {form.map(({ id, label }) => (
                <FormField id={id} label={label}></FormField>
              ))}
            </Form>
          </div>
          <div
            class="flex w-full justify-center items-center"
            hx-target="#items"
          >
            <button class="border" hx-get="/items" hx-swap="innerHTML">
              Click Me
            </button>
            <div id="items"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { Home };
