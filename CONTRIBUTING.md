# Contributing

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#general-information">General information</a>
    </li>
    <li>
      <a href="#adding-new-link-to-a-category">Adding new link to a category </a>
    </li>
    <li>
      <a href="#adding-new-category">Adding new category</a>
    </li>
  </ol>
</details>

## General information

For contributing with changes you must:

1. Fork Dev Links repository.
2. Make your changes and push them to the forked repository.
3. Create a Pull Request in Dev Links repository, expressing the changes you made. Your Pull Request will be reviewed for approval as soon as possible.

You can contribute giving suggestions and notifying about any bug you have
encountered.

The project has the following structure:

```
/
├── assets/            
│   └── icons/
|       ├── categories/   # all icons that appears next to category name
|       └── general/   # the rest of the icons used in the extension
|
├── src/
│   ├── components/   # All React components 
│   ├── context/   # react contexts
|   └── data/      # All static data about links and functions related to it
|       └── links/   # All links info seperated by category folders
|   ├── features/
|   └── tabs/
|
└── package.json
```

## Adding new link to a category

For adding a link to a specific category you have to create a file like `/src/data/links/{category}/{link-name}.ts`.
Where `category` is the existent category folder which your link belongs to, and `link-name` is a TypeScript
file with the name of your link in lowercase and each word being seperated by `-` character.

As example we will assume we are adding Google Fonts, that belongs to the fonts category. So, we have to create
the link file `/src/data/links/fonts/google-fonts.ts` for Google Font's link.
Inside that file you have to define and export an object representing the link.

```typescript
// Import the link type from the index.ts which is inside
// the font category folder. The type will vary
// depending on the category you are adding to
import type { FontsLink } from "./";


const GoogleFontDescription =
`
Make your website more beautiful, fast and open through great typography.
`;

// Create the link object using the link type of the category.
// Write the variable name using Pascal Case.
const GoogleFonts: FontsLink = {
    name: 'Google Fonts',
    category: 'Fonts',
    linkUrl: 'https://fonts.google.com/',
    description: GoogleFontDescription,
};


export default GoogleFonts;
```

A link object must have:
1. `name` written in the same way as their creators write it.
2. `category` its value will be enforced by the link type you imported.
3. `linkUrl` using the https protocol and with a slash at the end.
4. `description` give a short description of the link. You could mentions the features you could see in that link, but always try to keep it short. It should not be empty.

The link variable name must match the link name deleting whitespaces as in the sample code. If it is not possible for syntax issues, you can use underscore characters. For example a variable name for the link `5 Seconds Of Summer`
could be written as `_5SecondsOfSummer`.

Now you have to add your new link object to the category object it belongs to. You can do this in the
`/src/data/links/fonts/index.ts` file, which is placed inside the category folder.

```typescript
import type { Link, LinkCategory, LinkCategoryName } from "..";
import FontSpace from "./font-space";
// Import the link object you just created
import GoogleFonts from "./google-fonts";


type FontsCategoryName = Extract<LinkCategoryName, 'Fonts'>;


export type FontsLink = Omit<Link, 'category'> & {
    category: FontsCategoryName
};


const fontsCategoryLinks: Array<FontsLink> = [
    FontSpace,
    GoogleFonts, // Add your object in the array of links. Keep the alphabetical order
];


const fontsCategory: LinkCategory = {
    name: 'Fonts',
    links: fontsCategoryLinks
};


export default fontsCategory;
```


After doing all this, you can start the development server to see your new link being shown
in 🚀 Dev Links. If you don't know how to do this, see the [Getting started with development in README.md](/README.md).

## Adding new category

For adding a new category you have to add the category name in the
`LinkCategoryName` type defined in `/src/data/links/index.ts`.
This name will appear later, in the GUI, representing the category.
Let's use as example that you wish to add `Images` category.

```typescript
export type LinkCategoryName = 'Fonts' | 'Icons' | 'Images';
```

The name must be put in alphabetical order inside `LinkCategoryName`.

Now you must create a new category folder like `/src/data/links/images`.
If the name of your category has more than one word use `-` for seperating
the words.

Inside the folder you just created, add an `index.ts` file. This file
will be used for defining the category object for the new links,
and will export it as default. In this file you will add code similar
to this, but without the comments:

```typescript
import type { Link, LinkCategory, LinkCategoryName } from "..";


// Define the name type of the category
// extracting 'Images' from LinkCategoryName
type ImagesCategoryName = Extract<LinkCategoryName, 'Images'>;


// Define the type for the links that will be added
// to this new category
export type ImagesLink = Omit<Link, 'category'> & {
    category: ImagesCategoryName
};


// This array will contain all links that will be added
// later to this new category
const imagesCategoryLinks: Array<ImagesLink> = [];


// Create the category object
const imagesCategory: LinkCategory = {
    name: 'Images',
    links: imagesCategoryLinks
};

// And finally export as default the category object
export default imagesCategory;
```

Now that you have created a new category object you can import it
to the list of category objects in `/src/data/links/index.ts` like this:

```typescript
import fontsCategory from "./fonts";
import iconsCategory from "./icons";
// Import the category object you just created
import imagesCategory from "./images";

// You added the 'Images' category name some steps ago
export type LinkCategoryName = 'Fonts' | 'Icons' | 'Images';


export type LinkCategory = {
    name: LinkCategoryName;
    links: Array<Link>
};


export type Link = {
    name: string;
    category: LinkCategoryName;
    linkUrl: string;
    description: string;
};

// The objects must be in alphabetical order within the array
const linksByCategory: Array<LinkCategory> = [
    fontsCategory,
    iconsCategory,
    imagesCategory, // add your category object 
];

export default linksByCategory;
```

In the last part of this process you will have to add the icon that
represents your new category. For that you have to add the icon
in `.svg` format, this is for keeping Dev Links as lightweight
as possible. The file name of the icon should match the name
of the category folder you created.
You will add the icon as `/assets/icons/categories/images.svg`.

In the end you will have to add your icon in the `getIconForLinkCategory`
function in `/src/data/category-icons.ts`:

```typescript
import type { LinkCategoryName } from "./links";
import FontsCategoryIcon from "data-base64:~assets/icons/categories/fonts.svg";
import IconsCategoryIcon from "data-base64:~assets/icons/categories/icons.svg";
import FavoriteIcon from "data-base64:~assets/icons/categories/favorite.svg";
// Import your icon
import ImagesCategoryIcon from "data-base64:~assets/icons/categories/images.svg";


export const getIconForLinkCategory = (category: LinkCategoryName | 'Favorites') => {

    switch (category) {

        case 'Fonts':
            return FontsCategoryIcon;

        case 'Icons':
            return IconsCategoryIcon;

        // Add your category and icon in the switch-case
        case 'Images':
            return ImagesCategoryIcon;

        default:
            return FavoriteIcon;
    }

};
```

Now, your new category will appear in the GUI of 🚀 Dev Links .