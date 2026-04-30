// This file contains utility functions for analytics tracking.

export const trackEvent = (event: string, data: Record<string, any>) => {
    console.log(`Event tracked: ${event}`, data);
};

export const trackPageView = (page: string) => {
    console.log(`Page viewed: ${page}`);
};