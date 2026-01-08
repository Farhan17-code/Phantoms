
# Phantom Wears - Vercel & API Setup Guide

## 🔑 How to get your FREE Gemini API Key

1.  **Visit Google AI Studio**: Go to [aistudio.google.com](https://aistudio.google.com/).
2.  **Sign In**: Use any standard Google/Gmail account.
3.  **Create Key**: 
    *   On the left sidebar, click the **"Get API key"** (🔑 icon).
    *   Click the blue button: **"Create API key in new project"**.
4.  **Copy the Key**: A long string of letters and numbers will appear. Copy this code.

---

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub
Ensure all your files (including `package.json` and `index.tsx`) are pushed to your GitHub repository.

### Step 2: Import to Vercel
1.  Login to [Vercel.com](https://vercel.com).
2.  Click **"Add New"** > **"Project"**.
3.  Select your `phantom-wears` repository.

### Step 3: Add the API Key (The Most Important Part)
Before you click "Deploy", look for the **Environment Variables** section:
1.  **Key**: Type `API_KEY` (must be exactly this).
2.  **Value**: Paste the key you copied from Google AI Studio.
3.  Click **Add**.

### Step 4: Deploy
Click **Deploy**. Once it finishes (about 1-2 minutes), your site will be live!

---

## 🛠 Troubleshooting the "Black Screen"
If you see a black screen on your live URL:
1.  Check the **Vercel Build Logs**. If the build failed, it's usually because a file is missing.
2.  Ensure you have **NOT** deleted `package.json`. Vercel needs this file to know how to build the site.
3.  Ensure your `index.html` script tag points to `/index.tsx`.

## Local Development
If you want to test the AI on your own computer:
1. Create a file named `.env` in the root folder.
2. Inside `.env`, add: `VITE_API_KEY=your_key_here`
3. Run `npm run dev`.
# phantom
