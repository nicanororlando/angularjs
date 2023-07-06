app.service("customersService", function customersService() {
  // var customers = [
  //   {
  //     id: 1,
  //     joined: "2000-12-02",
  //     name: "John",
  //     city: "Chandler",
  //     orderTotal: 9.9956,
  //     orders: [
  //       {
  //         id: 1,
  //         product: "Shoes",
  //         total: 9.9956,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     joined: "1965-01-25",
  //     name: "Zed",
  //     city: "Las Vegas",
  //     orderTotal: 19.99,
  //     orders: [
  //       {
  //         id: 2,
  //         product: "Baseball",
  //         total: 9.995,
  //       },
  //       {
  //         id: 3,
  //         product: "Bat",
  //         total: 9.995,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     joined: "1944-06-15",
  //     name: "Tina",
  //     city: "New York",
  //     orderTotal: 44.99,
  //     orders: [
  //       {
  //         id: 4,
  //         product: "Headphones",
  //         total: 44.99,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     joined: "1995-03-28",
  //     name: "Dave",
  //     city: "Seattle",
  //     orderTotal: 101.5,
  //     orders: [
  //       {
  //         id: 5,
  //         product: "Kindle",
  //         total: 101.5,
  //       },
  //     ],
  //   },
  // ];

  // this.getCustomers = function () {
  //   console.log(typeof customers);
  //   console.log(customers);
  //   return customers;
  // };

  this.getCustomers = async function () {
    const response = await fetch("app/data/customers.json");
    const json = await response.json();
    const customers = json.customers;

    return customers;
  };

  this.getCustomer = function (customerId) {
    for (var i = 0, len = customers.length; i < len; i++) {
      if (customers[i].id === parseInt(customerId)) {
        return customers[i];
      }
    }
    return {};
  };

  this.deleteCustomer = async function (customerId) {
    const response = await fetch("app/data/customers.json");
    const json = await response.json();
    const customers = json.customers;

    for (let [i, customer] of customers.entries()) {
      if (customer.id === customerId) {
        customers.splice(i, 1);
      }
    }
    return customers;
  };
});
