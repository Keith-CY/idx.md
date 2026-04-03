---
name: gurkerl
description: Gurkerl.at grocery shopping via MCP - search products, manage cart, orders, recipes, favorites.
homepage: https://www.gurkerl.at/seite/mcp-server
metadata:
  clawdbot:
    emoji: "🥒"
    requires:
      bins: ["curl", "jq"]
    env:
      - GURKERL_EMAIL
      - GURKERL_PASS
    tags:
      - grocery
      - shopping
      - austria
      - mcp
      - rohlik
      - delivery
---

# Gurkerl.at MCP Skill

Austrian grocery delivery service (part of Rohlik Group). Search products, manage your cart, view orders, browse recipes, and more.

> **Note:** This skill uses Gurkerl's official MCP server. The same approach works for other Rohlik Group brands (Rohlik.cz, Knuspr.de, Kifli.hu) — just change the MCP URL in the script.

## Setup

Set environment variables:
```bash
export GURKERL_EMAIL="your@email.com"
export GURKERL_PASS="your-password"
```

For persistent access, add to `~/.config/systemd/user/openclaw-gateway.service.d/gurkerl.conf`:
```ini
[Service]
Environment="GURKERL_EMAIL=your@email.com"
Environment="GURKERL_PASS=your-password"
```

## CLI Usage

```bash
# Search products (German keywords) — use batch_search_products with queries array
gurkerl batch_search_products '{"queries":[{"keyword":"Milch"}]}'
gurkerl batch_search_products '{"queries":[{"keyword":"Bio Eier","sort_type":"orderPriceAsc"}]}'

# Search multiple products at once (more efficient)
gurkerl batch_search_products '{"queries":[{"keyword":"Milch"},{"keyword":"Brot"},{"keyword":"Eier"}]}'

# Get cart
gurkerl get_cart

# Add to cart
gurkerl add_items_to_cart '{"items":[{"productId":1234567,"quantity":2}]}'

# View orders
gurkerl fetch_orders '{"limit":3}'
gurkerl fetch_orders '{"order_type":"upcoming"}'

# Search recipes
gurkerl search_recipes_by_vector_similarity '{"query":"vegetarisch schnell"}'
```

## Available Tools

### Products & Search
| Tool | Description |
|------|-------------|
| `batch_search_products` | Search by keyword(s). Takes `{"queries":[{"keyword":"..."}]}`. Each query can include `sort_type`, filters. Use German keywords. |
| `get_products_details_batch` | Get details for multiple product IDs |
| `get_products_composition_batch` | Nutritional info, allergens, ingredients for multiple products |

### Cart
| Tool | Description |
|------|-------------|
| `get_cart` | View current cart |
| `add_items_to_cart` | Add products: `{"items":[{"productId":123,"quantity":1}]}` |
| `update_cart_item` | Change quantity: `{"product_id":123,"quantity":3}` |
| `remove_cart_item` | Remove item: `{"product_id":123}` |
| `clear_cart` | Empty entire cart |

### Checkout
| Tool | Description |
|------|-------------|
| `get_checkout` | View checkout state |
| `get_timeslots_checkout` | Available delivery timeslots |
| `change_timeslot_checkout` | Select a delivery timeslot |
| `change_checkout_packaging` | Change packaging options |
| `update_payment_method_checkout` | Change payment method |
| `submit_checkout` | Submit the order |

### Orders
| Tool | Description |
|------|-------------|
| `fetch_orders` | Get order history. Params: `limit`, `order_type` (delivered/upcoming/both), `date_from`, `date_to` |
| `repeat_order` | Reorder: `{"order_id":12345678}` |
| `cancel_order` | Cancel upcoming order (two-step: first `customer_confirmed:false`, then `true`) |
| `get_alternative_timeslots` | Get available delivery times for existing order |
| `change_order_timeslot` | Change delivery slot for existing order |
| `remove_order_items` | Remove items from an upcoming order |

### Recipes
| Tool | Description |
|------|-------------|
| `search_recipes_by_vector_similarity` | Semantic recipe search |
| `get_recipe_detail` | Full recipe with ingredients mapped to products |
| `generate_recipe_with_ingredients_search` | AI-generated recipes with product matches |

### User & Favorites
| Tool | Description |
|------|-------------|
| `get_user_info` | Account profile |
| `get_user_credits` | Available credits/vouchers |
| `get_all_user_favorites` | All favorited products |
| `get_user_shopping_lists_preview` | List all shopping lists |
| `get_user_shopping_list_detail` | View list contents |
| `create_shopping_list` | Create new list |
| `add_products_to_shopping_list` | Add products to a list |
| `remove_products_from_shopping_list` | Remove products from a list |
| `delete_shopping_list` | Delete a shopping list |

### Customer Care
| Tool | Description |
|------|-------------|
| `submit_claim` | File warranty claim for missing/damaged items |
| `submit_credit_compensation` | Request credit compensation |
| `get_customer_support_contact_info` | Phone, email, WhatsApp |
| `get_user_reusable_bags_info` | Check bag deposit status |
| `adjust_user_reusable_bags` | Correct bag count |
| `credit_customer_returnables` | Credit returnable deposits |
| `get_customer_care_workflow_prompt` | Internal workflow guidance |

### Analytics & Other
| Tool | Description |
|------|-------------|
| `calculate_average_user_order` | Generate typical order from history |
| `analyze_spending` | Spending analysis and insights |
| `add_feedback` | Submit product/service feedback |
| `add_karma_rating` | Rate delivery/service |
| `get_faq_content` | FAQ for: general, xtra_general, xtra_price, baby_club, christmas |
| `get_url_content` | Fetch content from a URL |
| `email_support_on_user_behalf` | Send support email |
| `fetch_all_job_listings` | Career opportunities |

## Search Tips

- Use **German** keywords for Austrian Gurkerl: "Milch", "Brot", "Eier", "Käse"
- Batch multiple searches in one call for efficiency: `{"queries":[{"keyword":"A"},{"keyword":"B"}]}`
- Each query object supports: `keyword`, `sort_type`, filters
- Sort: `orderPriceAsc`, `orderPriceDesc`, `recommended` (default)
- Filters available: `news` (new products), `sales` (on sale)
- Include nutrition/allergens via `get_products_composition_batch` after getting product IDs

## Example Workflows

### Weekly Shopping
```bash
# Search multiple items at once
gurkerl batch_search_products '{"queries":[{"keyword":"Milch"},{"keyword":"Brot"},{"keyword":"Eier"}]}'

# Add to cart
gurkerl add_items_to_cart '{"items":[{"productId":MILK_ID,"quantity":2},{"productId":BREAD_ID,"quantity":1}]}'

# Review cart
gurkerl get_cart
```

### Reorder Last Order
```bash
gurkerl fetch_orders '{"limit":1}'  # Get order ID
gurkerl repeat_order '{"order_id":ORDER_ID}'
```

### Find Recipe & Add Ingredients
```bash
gurkerl search_recipes_by_vector_similarity '{"query":"schnelles Abendessen"}'
gurkerl get_recipe_detail '{"recipe_id":RECIPE_ID,"include_product_mapping":true}'
# Add matched products to cart
```

