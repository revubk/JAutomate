import { test, expect } from '@playwright/test';

const loginPayload = {
  query: `
    mutation {
      login(email: "qa@julesai.com", password: "QaJULES2023!") {
        token
      }
    }
  `
};



test('Successful login', async ({ request }) => {
 
  const response = await request.post('https://demo.api.haroldwaste.com/graphql', {
  
    data: loginPayload
  });
  const body = await response.json();

  expect(body.data.login.token).toBeTruthy();


});
