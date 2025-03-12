
// Old test, might be needed

// import { test, expect } from '@playwright/test';
// import { ApiResponse, StrategyItem } from './marketplace_api_interfaces';
// import axios from 'axios';
//
// const apiUrl = "https://backend.rivo.xyz/marketplace"
//
// async function checkLinks(links: string[]) {
//     for (const link of links) {
//         try {
//             const axiosResponse = await axios.get(link, {
//                 headers: {
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 OPR/116.0.0.0',
//                     'Accept': 'application/json, text/plain, */*',
//                     'Accept-Language': 'en-US,en;q=0.9',
//                     'Cache-Control': 'no-cache, private',
//                     'Referer': 'https://www.google.com/',
//                 }
//             });
//             expect(axiosResponse.status).toBe(200);
//             console.log(`Status ${axiosResponse.status} ${link}`);
//         } catch (error) {
//             console.error(`Error ${link}: ${error}`);
//             expect(true).toBe(false);
//         }
//     }
// }
//
//
//
// test('Проверка ссылок websites', async ({ request }) => {
//     const response = await request.get(apiUrl);
//     expect(response.ok()).toBeTruthy();
//     const data: ApiResponse = await response.json();
//     const links: string[] = [];
//     for (const item of data as StrategyItem[]) {
//         if (item.title.links && item.title.links.websites) {
//             links.push(...item.title.links.websites);
//         }
//     }
//     await checkLinks(links);
// });
//
// test('Проверка Twitter ссылок', async ({ request }) => {
//     const response = await request.get(apiUrl);
//     expect(response.ok()).toBeTruthy();
//     const data: ApiResponse = await response.json();
//     const links: string[] = [];
//     for (const item of data as StrategyItem[]) {
//         if (item.title.links && item.title.links.twitter) {
//             links.push(...item.title.links.twitter);
//         }
//     }
//     await checkLinks(links);
// });
//
// test('Проверка Дискорд ссылок', async ({ request }) => {
//     const response = await request.get(apiUrl);
//     expect(response.ok()).toBeTruthy();
//     const data: ApiResponse = await response.json();
//     const links: string[] = [];
//     for (const item of data as StrategyItem[]) {
//         if (item.title.links && item.title.links.discord) {
//             links.push(...item.title.links.discord);
//         }
//     }
//     await checkLinks(links);
// })
//
// test('Проверка ссылок аудитов', async ({ request }) => {
//     const response = await request.get(apiUrl);
//     expect(response.ok()).toBeTruthy();
//     const data: ApiResponse = await response.json();
//     const links: string[] = [];
//     for (const item of data as StrategyItem[]) {
//         if (item.risksAndAudits && item.risksAndAudits.audit) {
//             const auditLink = item.risksAndAudits.audit.match(/\[.*?\]\((.*?)\)/)?.[1];
//             if (auditLink) {
//                 links.push(auditLink);
//             }
//         }
//     }
//     await checkLinks(links);
// });