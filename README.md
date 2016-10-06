# Cutme :barber::barber::barber:
## Your solution for your hair need
This is application for your hair problem, when you need to cut your hair, make an order and your personal hair assistant will come to your location.

This application is made by using 

This project is contributed by :
1. ariadiprana :construction_worker:
2. lilianti :ok_woman:
3. ryanandhaka :boy:
4. digachandra :bow:

# Architecture
Server & Client

## Data
| Model | Description
|------|----
| customers | this is to represent all customers for log in purposes
| orders | this is to represent each order inside the application
----------------------------------------------------

## Server

### Customers

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/customers|GET|return customer detail in JSON
|/api/customers|POST| add new customer
|/api/customers/:id|PUT|update customer
|/api/customers/:id|DEL|delete existing customer


### Orders

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/orders|GET|return all orders in JSON
|/api/orders|POST|add new orders
|/api/orders/:id|PUT|update orders
|/api/orders/:id|DEL|delete existing order

- - -

## Client
- home
- items
  - id
- customers
  - profile
- carts

-------------------------------

*This is a repository for displaying our learning result in phase 2 Hacktiv8*
