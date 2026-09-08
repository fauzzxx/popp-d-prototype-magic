# Popp'd Prototype Magic

Build a **frontend-only restaurant website prototype** for a Hyderabad food brand called **POPP'd**.

IMPORTANT:

* This is ONLY a visual/functional frontend prototype.
* Do NOT build a backend.
* Do NOT add authentication.
* Do NOT add a database.
* Do NOT add payment integration.
* Do NOT add admin panels.
* Do NOT over-engineer the project.
* Keep the implementation lightweight because this is being built using Lovable's free credits.
* Use dummy menu data and placeholder food imagery where necessary.
* The goal is to create a website that feels like a real, modern version of the POPP'd brand and can later be shown to the business owner as a prototype.

## BRAND

Brand name: **POPP'd**

Business: Burgers, hotdogs and more.

Known location:
**The Hive Drive-In, Road No. 05, Jubilee Hills, Hyderabad**

The brand's social presence has a playful, energetic food-first personality. Their messaging includes ideas such as:

* "Making your tastebuds pop with every bite!"
* "This is not your average burger place."
* "Accident? No. It's a BURGER emergency."

The website should capture that same playful, youthful, slightly cheeky personality.

Do NOT make it look like a generic corporate restaurant website.

## DESIGN DIRECTION

Create a visually striking modern food website inspired by the visual personality of POPP'd's Instagram presence.

Overall feeling:

* bold
* playful
* youthful
* energetic
* street-food / drive-in culture
* premium but not overly formal
* highly visual
* Instagram-friendly
* slightly quirky

Use a strong dark base with energetic accent colors and high-contrast typography.

Use large typography, oversized food photography, rounded cards, bold buttons, subtle grain/noise textures and playful graphic elements.

The design should feel like a modern food brand rather than a traditional restaurant website.

Avoid:

* boring corporate layouts
* excessive whitespace
* generic restaurant templates
* excessive gradients
* overly complicated animations
* unnecessary sections

## TECH STACK

Use:

* React
* Tailwind CSS
* Lucide icons or another lightweight icon library
* Component-based structure

Keep dependencies minimal.

Make the site fully responsive:

* desktop
* tablet
* mobile

Mobile design is especially important.

## NAVIGATION

Create a clean sticky navigation bar.

Left:
**POPP'd** logo/wordmark

Navigation:

* Home
* Menu
* About
* Visit Us

Right:
**Order Now** button

On mobile:

* hamburger menu
* compact POPP'd wordmark
* Order button

The navigation should become slightly more compact when scrolling.

## HERO SECTION

Create a very strong hero section.

Large headline:

**GET POPP'D.**

Supporting text:

**Burgers. Hotdogs. Loaded bites.
Made to make your tastebuds pop.**

Primary CTA:
**ORDER NOW**

Secondary CTA:
**SEE THE MENU**

Use a large, appetizing burger image as the main visual.

The food image should dominate the hero.

Add small playful floating labels around the food such as:

* SMASHED
* LOADED
* EXTRA CHEESY
* POPP'D

Use subtle floating/rotating animations, but keep them performant.

Add a small location indicator:
**Jubilee Hills, Hyderabad**

## HERO MICRO-INTERACTION

Add a small playful text element such as:

**WARNING: Serious burger cravings ahead.**

It can have a subtle animated entrance.

Do not make animations excessive.

## FEATURED MENU SECTION

Heading:

**THE POPP'D LINEUP**

Subheading:

**Things that deserve to be eaten with both hands.**

Create a horizontal or responsive grid of food cards.

Use dummy products such as:

1. **The POPP'd Smash**
   Double smashed chicken patty, cheese, signature sauce
   ₹249

2. **Cheese Burst Burger**
   Crispy chicken, molten cheese, house sauce
   ₹279

3. **Classic POPP Dog**
   Loaded hotdog with cheese and signature toppings
   ₹229

4. **Loaded POPP Fries**
   Crispy fries, cheese sauce and spicy toppings
   ₹199

5. **Fire Chicken Burger**
   Spicy crispy chicken, lettuce and fiery sauce
   ₹269

6. **Choco Crunch Shake**
   Chocolate shake with crunchy toppings
   ₹179

These are prototype/dummy menu items, so structure the code so they can easily be replaced later.

Each food card should include:

* food image
* item name
* short description
* price
* Add button

The cards should have subtle hover animations.

## CATEGORY FILTER

Above the menu, add simple category tabs:

**ALL**
**BURGERS**
**HOTDOGS**
**SIDES**
**DRINKS**

Make the filtering functional on the frontend using local dummy data.

No backend.

## "WHY POPP'D?" SECTION

Create a bold section explaining the personality of the brand.

Heading:

**NOT YOUR AVERAGE BURGER JOINT.**

Create 3 or 4 feature blocks:

**SMASHED**
Freshly smashed, crispy-edged goodness.

**LOADED**
Because normal toppings are boring.

**POPP'D**
Big flavours. Big cravings. Zero regrets.

**DRIVE-IN VIBES**
Good food, good people, good energy.

Use playful icons and food imagery.

## BRAND STORY SECTION

Create a visually interesting split layout.

Heading:

**WE LIKE OUR FOOD LOUD.**

Text:

POPP'd is all about big flavours, messy bites and food worth talking about.

From burgers and hotdogs to loaded sides and shakes, everything is made to bring a little more excitement to your next meal.

Keep this section concise.

Add a button:

**OUR STORY**

The button can simply scroll to the section or open a small frontend modal. No backend.

## FOOD IMAGE BREAK / MARQUEE

Create a full-width visual section with a scrolling marquee.

Example text:

**BURGERS • HOTDOGS • LOADED FRIES • SHAKES • BIG BITES • BIG FLAVOUR •**

The marquee should continuously move horizontally.

Keep it smooth and lightweight.

## INSTAGRAM-STYLE SECTION

Create a section called:

**POPP'D ON THE 'GRAM**

Show 6 square image cards in an Instagram-style grid.

Use placeholder/dummy food images.

Each card can have a subtle hover effect.

Add CTA:

**FOLLOW @poppd.ind**

For the prototype, this can link to the Instagram profile.

Do not attempt to scrape Instagram.

## LOCATION SECTION

Create a strong location section.

Heading:

**COME GET POPP'D.**

Show:

**The Hive Drive-In**
Road No. 05, Jubilee Hills
Hyderabad, Telangana

Add buttons:

**GET DIRECTIONS**
**CALL US**

For the prototype, use placeholder links where actual links are unavailable.

Include a stylized map placeholder/card rather than implementing a real map API.

## FOOTER

Create a bold dark footer.

Include:

POPP'd

**Burgers. Hotdogs. More.**

Navigation:

* Home
* Menu
* About
* Visit Us

Social:

* Instagram

Location:
The Hive Drive-In
Road No. 05, Jubilee Hills
Hyderabad

Add:

**© 2026 POPP'd**

## ORDER EXPERIENCE

Since this is frontend-only, create a simple visual ordering interaction.

When the user clicks **Add** on a menu item:

* update a cart counter in the navbar
* show a small toast such as "Added to your POPP'd order!"
* allow opening a simple cart drawer

The cart drawer should show:

* item
* quantity
* price
* subtotal
* "Continue to Order" button

The final button should NOT process a real order.

Instead, show a small prototype message:

**Ordering integration coming soon.**

This is only to demonstrate the UX to the client.

Store cart state locally in React state/localStorage only if simple to implement.

## VISUAL DETAILS

Use:

* bold display typography for headings
* clean readable body typography
* large food photography
* rounded corners
* subtle shadows
* high contrast
* playful stickers/badges
* subtle grain texture
* slight rotation on selected cards/images
* smooth hover states
* tasteful entrance animations

Typography hierarchy should be strong.

Example:

GET
**POPP'D.**

The word POPP'D should be the visual focal point.

## ANIMATIONS

Use lightweight animations only:

* fade/slide on scroll
* image scale on hover
* button hover
* marquee
* floating badges
* cart drawer slide-in
* menu filtering transitions

Do NOT use heavy 3D/WebGL effects.

Do NOT add unnecessary animation libraries unless required.

## IMAGES

Use high-quality food imagery suitable for a burger brand.

Prioritize:

* close-up burgers
* smashed burgers
* crispy chicken burgers
* loaded fries
* hotdogs
* milkshakes

If external image URLs are used, structure them clearly so they can easily be replaced later with the restaurant's actual photography.

Do NOT claim placeholder imagery is official POPP'd photography.

## IMPORTANT BRAND RULE

The website should feel **inspired by the personality and visual energy of POPP'd**, but do not invent official brand claims, menu items, prices, reviews, awards, or business information beyond what has been provided.

Clearly treat menu items/prices as prototype content.

## UX

The primary conversion journey should be:

Landing page → See Menu → Browse categories → Add item → Cart → Prototype ordering message

Secondary journey:

Landing page → Visit Us → Location

Make CTA buttons obvious.

## PERFORMANCE

Keep the implementation lightweight.

Avoid:

* unnecessary packages
* complex backend logic
* authentication
* database
* API integrations
* payment systems
* CMS
* complex state management

This is a polished **frontend prototype**, not a production ordering system.

## FINAL QUALITY BAR

The finished website should look good enough that I can open it in front of the POPP'd business owner and say:

"This is what your website could look like."

It should feel:
**bold + delicious + youthful + playful + premium + Hyderabad food culture.**

Do not make it look like a generic AI-generated restaurant template.

Prioritize visual impact and a memorable first impression.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d8c17dc7-58f4-4a3e-abf4-1ea6acdcc00b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
