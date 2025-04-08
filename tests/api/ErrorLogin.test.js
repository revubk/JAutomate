import { test, expect } from 'playwright/test';


test('Login - 401 Auth error', async ({ request }) => {
 
  const response = await request.post('https://demo.api.julesai.com/graphql', {
    data: {
      operationName: "login",
      variables: {
        email: "wrong@user.com",
        password: "Jay"
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: "ab50d832c7fe27534f4a42b330d919766ad8406649899c4ee8a50a19ae103470"
        }
      }
    }
    
    
  });
  //expect(response.status()).toBe(401);
  const body = await response.text();
  expect(body).toContain('WRONG_CREDENTIALS');
  
});

test('Login - 400 bad request error', async ({ request }) => {
 
  const response = await request.post('https://demo.api.julesai.com/graphql', {
    data: {
      operationName: "login",
      variables: {
        email: "qa@julesai.com",
        password: "Jay@2132000"
      },
  
    }
    
    
  });

  expect(response.status()).toBe(400);
  
});
