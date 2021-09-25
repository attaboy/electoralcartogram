# Electoral Cartogram of Canada

Created by [Luke Andrews](https://github/attaboy) under an [MIT License](https://github.com/attaboy/electoralcartogram/blob/master/LICENSE). Copyright &copy; 2019 Luke Andrews.

This site interactively shows federal election results for Canada from 2015 to 2021 in a [cartogram](https://en.wikipedia.org/wiki/Cartogram) which emphasizes population distribution by presenting every electoral district as the same shape and size. You can see it published at [electoralcartogram.ca](https://electoralcartogram.ca).

The original map was drawn by hand using [Affinity Designer](https://affinity.serif.com/en-us/designer/), and then converted to SVG format. The site was coded in [Typescript](https://www.typescriptlang.org) with the [Next.js](https://nextjs.org) framework.

Election results for [recent](https://enr.elections.ca/National.aspx?lang=e) and [past elections](https://elections.ca/content.aspx?section=ele&dir=pas&document=index&lang=e) were copied from [Elections Canada](https://elections.ca) under their terms and conditions for non-commercial reproduction of data. Other data for party changes was sourced from Wikipedia entries for the [42nd](https://en.wikipedia.org/wiki/42nd_Canadian_Parliament) and [43rd Parliament](https://en.wikipedia.org/wiki/43rd_Canadian_Parliament).

## Development

This package uses NPM for dependencies.

To install dependencies: `npm install`

To run the development server: `npm run dev`

To export the site to static HTML (in the `out` directory): `npm run export`
