import {expect, test} from '@playwright/test';
import {ApiResponse, StrategyItem} from "./marketplace_api_interfaces";
import axios from 'axios';

const apiUrl = "https://backend.rivo.xyz/marketplace"

async function checkLinks(links: string[], strategyName: string, strategyAddress: string) {
    const displayName = strategyName || 'N/A';
    const displayAddress = strategyAddress || 'N/A';
    for (const link of links) {
        try {
            const axiosResponse = await axios.get(link, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 OPR/116.0.0.0',
                    'Accept': 'application/json, text/plain, */*',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Cache-Control': 'no-cache, private',
                    'Referer': 'https://www.google.com/',
                }
            });
            expect(axiosResponse.status).toBe(200);
            console.log(`Status ${axiosResponse.status} | Name: ${displayName} | Address: ${displayAddress}`);
        } catch (error) {
            console.error(`Error Link: ${link} | Name: ${displayName} | Address: ${displayAddress}: ${error}`);
            expect(true).toBe(false);
        }
    }
}

test('Test Website links', async ({ request }) => {
    const response = await request.get(apiUrl);
    expect(response.ok()).toBeTruthy();
    const data: ApiResponse = await response.json();

    for (const item of data as StrategyItem[]) {
        if (item.title.links && item.title.links.websites) {
            const websiteLinks = item.title.links.websites;
            const strategyName = item.title.name;
            const strategyAddress = item.title.address;

            await checkLinks(websiteLinks, strategyName, strategyAddress);
        }
    }
});

test('Test Twitter links', async ({ request }) => {
    const response = await request.get(apiUrl);
    expect(response.ok()).toBeTruthy();
    const data: ApiResponse = await response.json();
    const links: string[] = [];
    for (const item of data as StrategyItem[]) {
        if (item.title.links && item.title.links.twitter) {
            links.push(...item.title.links.twitter);
            const strategyName = item.title.name;
            const strategyAddress = item.title.address;
            await checkLinks(links, strategyName, strategyAddress);
            links.length = 0;
        }
    }
});

test('Test Discord links', async ({ request }) => {
    const response = await request.get(apiUrl);
    expect(response.ok()).toBeTruthy();
    const data: ApiResponse = await response.json();
    const links: string[] = [];
    for (const item of data as StrategyItem[]) {
        if (item.title.links && item.title.links.discord) {
            links.push(...item.title.links.discord);
            const strategyName = item.title.name;
            const strategyAddress = item.title.address;
            await checkLinks(links, strategyName, strategyAddress);
            links.length = 0;
        }
    }
});

test('Test Audit links', async ({ request }) => {
    const response = await request.get(apiUrl);
    expect(response.ok()).toBeTruthy();
    const data: ApiResponse = await response.json();
    const links: string[] = [];
    for (const item of data as StrategyItem[]) {
        if (item.risksAndAudits && item.risksAndAudits.audit) {
            const auditLink = item.risksAndAudits.audit.match(/\[.*?\]\((.*?)\)/)?.[1];
            if (auditLink) {
                links.push(auditLink);
                const strategyName = item.title.name;
                const strategyAddress = item.title.address;
                await checkLinks(links, strategyName, strategyAddress);
                links.length = 0;
            }
        }
    }
});