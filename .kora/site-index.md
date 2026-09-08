# Site index · format 1
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Prime Power Devices | Power Transistor Manufacturer in Hyderabad
purpose: The landing page — what the company makes, the two headline package types, why they are used, and customer testimonials.
sections:
- hero "High-Power TO-3 Transistors" — the tagline and the Explore Products call to action
- "Our Products" — the two headline package types: TO-3, TO-220
- "Rugged Metal-Can Power Transistors" — what the TO-3, TO-3P and TO-220 packages are each suited to, across defense, telecom, switching, amplifiers, power management, power supplies, regulators and audio amplifiers
- "Rugged & Reliable" and the three points beside it — Superior Heat Dissipation, High Power Handling, Easy Integration
- "Prime Power Devices" — the precision-for-every-package-type block
- `#testimonials` "Trusted by Industrial Buyers" — buyer testimonials, with its heading in `#testimonials-heading`
- "Frequently Asked Questions" — the FAQ accordion
also: Only the testimonials block carries an id. Every other section on this page is located by its heading text.
also: The package names TO-3, TO-3P and TO-220 appear on this page, on devices.html and in the navigation. A change to how a package is named has to be made in all of them.

## about.html → /about
title: About Prime Power Devices | Hyderabad Power Semiconductor Manufacturer
purpose: The company's history, its subcontracting relationship, its markets, and a profile of its founder.
sections:
- "About Prime Power Devices" — the company's founding, its work as a subcontractor to Bharat Electronics Ltd, and the markets it serves: telecommunications, broadcasting, public address systems, industrial electronics, defense
- "About Narotham Reddy" — the founder's profile and career
also: This page carries no ids at all, so every change here is located by its heading or its wording.

## devices.html → /devices
title: TO-3, TO-3P & TO-220 Power Transistors | Prime Power Devices
purpose: The product catalogue — every transistor offered, grouped by package.
sections:
- "Our Devices" — the page heading
- `#to3` "TO-3 Transistor Package" — what the TO-3 package is for, then 12 part numbers, each with a short description: MJ15024, MJ15025, MJ2955, 2N6052, 2N5039, 2SA1943, PO55, BUW42A, MJ10023, 2N5038
- "TO-3P Transistor Package" — the TO-3P package section
- `#to220` "TO-220 Transistor Package" — the TO-220 package section
also: Two of the TO-3 part numbers are written with spaces inside them, as "2N 3773 B5" and "2N3055 HV4", while every other part number is written without spaces. A search for the unspaced form will not find them.
also: The TO-3P section has no id, unlike the TO-3 and TO-220 sections either side of it, so it cannot be linked to and is located only by its heading.

## contact.html → /contact
title: Contact Prime Power Devices | Request a Power Transistor Quote
purpose: The contact page — the enquiry form, the factory address, the business hours, and the distributor network.
sections:
- "Contact Us" — the page hero
- "Contact Us With Query" — the enquiry block introducing the form
- `#contact-form` — the enquiry form
- `#contact-name` — the form's name input
- `#contact-phone` — the form's mobile number input
- `#contact-email` — the form's email input
- `#contact-query` — the form's query input
- `#contact-recaptcha` — the form's captcha slot
- `#contact-submit-btn` — the form's submit button
- `#contact-form-message` — where the form's success or error message is written
- "Our Address" — the factory address and the contact numbers
- "Business Hours" — the weekday and Sunday hours
- "Authorized Distributors" — the distributor network by city: M/S EASTERN ELECTRONICS, M/S S R ELECTRONICS, M/S BHAGAWATI INTERNATIONAL, M/S AKSHAY ELECTRONICS, M/S SIRI RAM & SONS
also: Each distributor entry carries its own address and phone number, so a change to distributor details is five separate edits on this page and none of them is shared with the company's own address above.

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
