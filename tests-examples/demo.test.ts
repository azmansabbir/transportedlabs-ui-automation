
import { test, expect, type Page } from '@playwright/test';

test.describe('New Todo', () => {

        test('should allow me to add todo items', async ({ page }) => {

                

                await page.goto('https://github.com/login');
                await page.locator('input[name="login"]').fill('sabbir.of@gmail.com');
                await page.locator('input[name="password"]').fill('@34');
                await page.locator('text=Sign in').click();
                // Save signed-in state to 'storageState.json'.

                // Save signed-in state to 'storageState.json'.
                await page.context().storageState({ path: 'ghstorageState.json' });
                
        })


})