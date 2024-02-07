import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json'
import { request } from 'http';


test.beforeEach(async ({ page }) =>{
  // await page.route ('https://conduit-api.bondaracademy.com/api/tags', async route => {
    
  //   await route.fulfill({
  //     body : JSON.stringify(tags)
  //   })
  // })

  // await page.route ('*/**/api/articles?limit=10&offset=0', async route => {
  //     const response = await route.fetch()
  //     const responseBody = await response.json()
  //     responseBody.articles[0].title = "This is injected title"
  //     responseBody.articles[0].description = "my own generated description"

  //     await route.fulfill({ body: JSON.stringify(responseBody)})

  // })
  // await page.goto('https://conduit.bondaracademy.com/');
  

  await page.goto ('https://conduit.bondaracademy.com/');
  await page.getByText('Sign in').click()
  await page.getByRole('textbox', {name: "Email"}).fill('testpsubbarao@test.com')
  await page.getByRole('textbox', {name: "Password"}).fill('letmein1')
  await page.getByRole('button').click
  
   
})

test('has title', async ({page}) => {
  // await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  // await expect(page.locator('app-article-list h1').first()).toContainText('This is failure usecase title');
  // await expect(page.locator('app-article-list h1').first()).toContainText('This is injected title');
  // await expect(page.locator('app-article-list p').first()).toContainText('my own generated description');

  await page.waitForTimeout(4000);
})

test('adddeletearticle', async ({page, request }) => {
  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login' , {
    data: {
      "user":{"email":"testpsubbarao@test.com","password":"letmein1"}
    }
  })

  const responseBody = await response.json()
  const accessToken = responseBody.user.token 


  await request.post('https://conduit-api.bondaracademy.com/api/articles/'), {
    data:  {
      "article":{"title":"New Article","description":"New Article thru api","body":"New Article thru api","tagList":["apinewarticle"]}
    },
  
  headers: {
    Authorization: `Token ${accessToken}`
  } 
  }

  await page.waitForTimeout(4000);
})