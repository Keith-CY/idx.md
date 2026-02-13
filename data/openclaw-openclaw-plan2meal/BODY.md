---
name: plan2meal
description: Manage recipes and grocery lists from your Plan2Meal React Native app. Add recipes from URLs, search, view, and manage your grocery lists.
---

# Plan2Meal Skill

A ClawdHub skill for managing recipes and grocery lists via Plan2Meal, a React Native recipe app.

**Data routing disclosure**
- By default, this skill sends authentication and recipe/grocery API traffic to:
  `https://gallant-bass-875.convex.cloud`
- You can override `CONVEX_URL` to use your own/self-hosted backend.

## Features

- **Recipe Management**: Add recipes from URLs, search, view, and delete your recipes
- **Grocery Lists**: Create and manage shopping lists with recipes
- **Multi-Provider Auth**: Login with GitHub, Google, or Apple
- **Recipe Extraction**: Automatically fetch recipe metadata from URLs
- **Telegram Formatting**: Pretty-printed output for Telegram

## Setup

1. Install via ClawdHub:
   ```bash
   clawdhub install plan2meal
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. Environment variables:
   - `CONVEX_URL` (optional): backend URL for Plan2Meal API calls.
     - Default: `https://gallant-bass-875.convex.cloud`
     - Override this if you want to use your own/self-hosted backend.
   - `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` (or `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`)
   - `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` (or `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`)
   - `AUTH_APPLE_ID` / `AUTH_APPLE_SECRET` (or `APPLE_CLIENT_ID` / `APPLE_CLIENT_SECRET`)
   - `GITHUB_CALLBACK_URL`, `GOOGLE_CALLBACK_URL`, `APPLE_CALLBACK_URL`
   - `CLAWDBOT_URL`: Your ClawdBot URL (for OAuth callback)

## Commands

### Authentication

| Command | Description |
|---------|-------------|
| `plan2meal login` | Show login options (GitHub, Google, Apple) |
| `plan2meal logout` | Logout and clear session |

### Recipe Commands

| Command | Description |
|---------|-------------|
| `plan2meal add <url>` | Fetch recipe metadata from URL and create recipe |
| `plan2meal list` | List your recent recipes |
| `plan2meal search <term>` | Search your recipes |
| `plan2meal show <id>` | Show detailed recipe information |
| `plan2meal delete <id>` | Delete a recipe |

### Grocery List Commands

| Command | Description |
|---------|-------------|
| `plan2meal lists` | List all your grocery lists |
| `plan2meal list-show <id>` | Show grocery list with items |
| `plan2meal list-create <name>` | Create a new grocery list |
| `plan2meal list-add <listId> <recipeId>` | Add recipe to grocery list |

### Help

| Command | Description |
|---------|-------------|
| `plan2meal help` | Show all available commands |

## Usage Examples

### First Login

```
plan2meal login
```

Shows login options for GitHub, Google, and Apple. Click the link to authenticate.

### Adding a Recipe

```
plan2meal add https://www.allrecipes.com/recipe/12345/pasta
```

Output:
```
✅ Recipe added successfully!

📖 Classic Pasta
🔗 Source: allrecipes.com
⚡ Method: native-fetch-json (no credits used)
⏰ Scraped at: 3:45 PM

🥘 Ingredients (4)
• 1 lb pasta
• 2 cups marinara sauce
• 1/2 cup parmesan
```

### Searching Recipes

```
plan2meal search pasta
```

### Creating a Grocery List

```
plan2meal list-create Weekly Shopping
```

## Authentication

First-time users need to authenticate. Choose:
- **GitHub** - Requires GitHub OAuth app
- **Google** - Requires Google OAuth client
- **Apple** - Requires Apple Developer account

Authentication is OAuth-only via provider login links.

## Recipe Limits

The free tier allows up to **5 recipes**. You'll receive a warning when approaching this limit.

## License

MIT
