import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig ({
    base: "/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about/index.html"),
                alumni: resolve(__dirname, "alumni/index.html"),
                events: resolve(__dirname, "events/index.html"),
                officers: resolve(__dirname, "officers/index.html"),
                officers_2021_22: resolve(__dirname, "officers/oldOfficers2021-22.html"),
                officers_2019_20: resolve(__dirname, "officers/oldOfficers2019-20.html"),
                officers_2018_19: resolve(__dirname, "officers/oldOfficers2018-19.html"),
                sponsors: resolve(__dirname, "sponsors/index.html"),
                year_in_review: resolve(__dirname, "year-in-review/index.html"),
                data_analytics: resolve(__dirname, "data-analytics/index.html"),
                about_css: resolve(__dirname, "css/about.css"),
                darkTheme_css: resolve(__dirname, "css/darkTheme.css"),
                lightTheme_css: resolve(__dirname, "css/lightTheme.css"),
                officers_css: resolve(__dirname, "css/officers.css"),
                style_css: resolve(__dirname, "css/style.css")
            }
        }
    },
    resolve: {
        extensions: ['.js']
    },
});