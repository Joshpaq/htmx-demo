import { faker } from "@faker-js/faker";

function Items() {
  const count = Math.floor(Math.random() * 10) + 1;
  const fake = [];
  for (let i = 0; i < count; i++) {
    fake.push({
      first: faker.person.firstName(),
      last: faker.person.lastName(),
      favoriteSnake: faker.animal.snake(),
    });
  }

  return (
    <ul>
      {fake.map((item) => (
        <li class="border rounded">
          <div>First: {item.first}</div>
          <div>Last: {item.last}</div>
          <div>Favorite Snake: {item.favoriteSnake}</div>
        </li>
      ))}
    </ul>
  );
}

export { Items };
