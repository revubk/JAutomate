import { test, expect } from 'playwright/test';


test('Login - 401 Auth error', async ({ request }) => {
 
  const response = await request.post('https://demo.api.haroldwaste.com/graphql', {
    data:  {
      query: `
      mutation {
      login(email: "qa@julesai.com", password: "QaJULES202!") {
        token
      }
    }
  `
    }
    
  });
  //expect(response.status()).toBe(401);
  const body = await response.text();
  expect(body).toContain('WRONG_CREDENTIALS');
  
});

test('Login - 400 bad request error', async ({ request }) => {
 
  const response = await request.post('https://demo.api.haroldwaste.com/graphql', {
    data: {
      query: `
    mutation {
      login(password: "QaJULES2023!") {
        token
      }
    }
  `
  
    }
    
    
  });

  expect(response.status()).toBe(400);
  
});
