import { test, expect } from '@playwright/test';

test('Update booking', async ({ request }) => {

  const auth = await request.post('https://restful-booker.herokuapp.com/auth', {

    data: { username: 'admin', password: 'password123' }

  });
  const token = (await auth.json()).token;
  const response = await request.put(`https://restful-booker.herokuapp.com/booking/1`, {
    headers: {
      'Cookie': `token=${token}`
    },
    data: {
      "firstname": "Updated",
      "lastname": "Name",
      "totalprice": 300,
      "depositpaid": false,
      "bookingdates": {
        "checkin": "2024-02-01",
        "checkout": "2024-02-10"
      },
      "additionalneeds": "Lunch"
    }
  });

  expect(response.status()).toBe(200);
});

