# Contributing

## Adding links to Dev Links

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

### Adding new link to a category

For adding a link to a specific category you have to create a file like `/src/data/links/{category}/{link-name}.ts`. Where `category` is the existent category which your link belongs to, and `link-name` is a TypeScript file with the name of your link in lowercase and and each word being seperated by `-` character.

Inside the file you just created you have to define and export an object representing the link. For example I created a link file `/src/data/links/fonts/google-fonts.ts` for Google Font's link.

```
import type { FontsLinkType } from "./";


const GoogleFontDescription =
`
Make your website more beautiful, fast and open through great typography.
`;


const GoogleFont: FontsLinkType = {
    name: 'Google Fonts',
    category: 'Fonts',
    linkUrl: 'https://fonts.google.com/',
    description: GoogleFontDescription,
};


export default GoogleFont;
```

A link object must have:
1. `name`, written in the same way as their creators write it.
2. `category`.
3. `linkUrl`, using the https protocol.
4. `description`

The link variable name must match the link name deleting whitespaces as in the sample code. If it is not possible for syntax issues, you can use underscore characters.

Note how the object GoogleFont is of type FontsLinkType. This type is imported from `/src/data/links/fonts/index.ts`. In
this file the object representing the link category `Fonts` is exported. This is a sample content of that file:

```
import type { Link, LinkCategory, LinkCategoryName } from "..";
import FontSpace from "./font-space";
import GoogleFont from "./google-fonts";


type FontsCategoryType = Extract<LinkCategoryName, 'Fonts'>;


export type FontsLinkType = Omit<Link, 'category'> & {
    category: FontsCategoryType
};


const fontsCategoryLinks: Array<FontsLinkType> = [
    FontSpace,
    GoogleFont,
];


const fontsCategory: LinkCategory = {
    name: 'Fonts',
    links: fontsCategoryLinks
};


export default fontsCategory;
```

As you can see, the object fontsCategory is of type LinkCategory and is exported as default.
Inside that object, the links attribute carries all the links that belong to that category.
The links in the array must be in alphabetical order. The code shows that the `GoogleFonts`
object is being imported from the file we just created and it is being used inside the links
attribute of fontsCategory.

After doing all this, you can start the development server to see your new link being shown
in Dev Links. If you don't know how to do this, see the [Getting started with development in README.md](https://github.com/R0land013/dev-links/blob/main/README.md).

