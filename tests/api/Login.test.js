import { test, expect } from '@playwright/test';

export const loginPayload = {
  operationName: "login",
  variables: {
    email: "qa@julesai.com",
    password: "Jay@2132001"
  },
  extensions: {
    persistedQuery: {
      version: 1,
      sha256Hash: "ab50d832c7fe27534f4a42b330d919766ad8406649899c4ee8a50a19ae103470"
    }
  }
};

export let authToken;

test('Successful login', async ({ request }) => {
 
  const response = await request.post('https://demo.api.julesai.com/graphql', {
    data: loginPayload
    
  });

  const resBody = await response.json();

  authToken = resBody.data.login.token;

  if (resBody.errors) {
    throw new Error('Login failed: ' + JSON.stringify(resBody.errors, null, 2));
  }

  expect(resBody.data.login.token).toBeTruthy();
});
