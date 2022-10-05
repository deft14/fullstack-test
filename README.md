nTn Technology Fullstack DEVELOPER Test

Requirement

- Use React or Angular
- Unit Test Coverage

Create Web application that allows to Backoffice team to Create and Visualize List of Products.

- Visualize List of Products
- Search Product by Name – Client Side
- Create Product

**1.0. Visualize List of Products - Page**

Create Page to Visualize List of Products that allows to paginate client-side

[GET] https://603c67f9f4333a0017b6786c.mockapi.io/api/v1/Products

Payload Example:

```
[
  {
    "id": "1",
    "createdAt": "2021-03-01T01:54:31.470Z",
    "name": "Unbranded Cotton Sausages",
    "img": "http://lorempixel.com/640/480/food",
    "description": "description 1",
    "price": "931.38",
    "company": "Corwin and Sons"
  },
  {
    "id": "2",
    "createdAt": "2021-02-28T19:48:33.751Z",
    "name": "Ergonomic Plastic Mouse",
    "img": "http://lorempixel.com/640/480/transport",
    "description": "description 2",
    "price": "856.19",
    "company": "Stracke - Johnston"
  }]
```

**1.1. Search Product by Name**

Create search box to support Fulltext search, everything has to be managed client side.

By given Product name the application should show list of relevant products.

- Can be used any JS library that facilitate the outcome.

**1.2. Create Product**

Within the Product List page add a button to allow the user to Create a new product.

- The product creation can be managed using a simple Modal or new dedicate page.

[POST] https://603c67f9f4333a0017b6786c.mockapi.io/api/v1/Products

```
Payload example:
{
    "createdAt": "2021-03-01T01:54:31.470Z",
    "name": "Unbranded Cotton Sausages",
    "img": "http://lorempixel.com/640/480/food",
    "description": "description 1",
    "price": "931.38",
    "company": "Corwin and Sons"
  }
```
