
<!-- PROJECT LOGO -->
<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; align-content:center; justify-items:center; width:100%; background-color:#F1ECEC; border-radius: 15px; padding:2rem;">
    <img src="assets/icons/general/brand.svg" alt="Logo" style="height:50px;">
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-with-development">Getting started with development</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#starting-dev-server">Starting dev server</a></li>
        <li><a href="#loading-the-extension-in-chrome">Loading the Extension in Chrome</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About the project

Since I started using social networks, I have been following people of programming world that share excellent resources and tools. I always said 'Wow, what a useful tool! I will use it in my next project'. But, I always forgot the name of the tools I wanted to use, I did not save the information about it. Finally, when I had the need of some tool for an specific task, I started struggling online to find a tool that would fulfill my requirements, and lost a lot of time. I didn't find that needed resource sometimes.

For that reason I created **Dev Links**. A browser extension for:

- 🔍 Easily find the tools you need.
- ⭐ Leave the need of remember links and names of tools.
- 🚀 Staying focus and increase your productivity.

### Built with

- [![Plasmo][Plasmo-framework]][Plasmo-url]
- [![React][React.js]][React-url]
- [![Tailwind][Tailwindcss]][Tailwindcss-url]

## Getting started with development

### Prerequisites

- Node.js 16.14.x or later
- macOS, Windows, or Linux

### Installation

First of all you have to install all dependencies of the project. You can do this as following:

```
yarn install
# OR
npm install
# OR
pnpm install
```

### Starting dev server

Execute one of the following commands to start the development server.
This will watch for file changes and regenerate a bundle of the extension in
build/chrome-mv3-dev, and automatically reload the extension in your browser.

```
yarn dev
# OR
npm run dev
# OR
pnpm dev
```

### Loading the Extension in Chrome

Open Chrome and write chrome://extensions on the search bar, and press enter.
This will show you the extension page of your Chrome browser.
Then, switch on the *Developer mode*.

![Alt text](https://docs.plasmo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper_mode.76f090f7.png&w=750&q=75)

After that, click on the button "Load Unpacked" and navigate to the project's
build/chrome-mv3-dev directory.

To see the Dev Links popup, click on the puzzle piece icon on the Chrome toolbar,
and click on Dev Links extension.
You can pin the extension to the Chrome toolbar for easy access by clicking the pin button.

![Alt text](https://docs.plasmo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopup_example.30e17ec9.png&w=1200&q=75)

You can learn more about Plasmo framework [here](http://plasmo.com/).

## Contributing

If you wish to contribute, you can read the guide in [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

This project is under [MIT LICENSE](/LICENSE).

## Contact

You can find my contact info [here](https://r0land013.github.io/).

## Acknowledgments

I wanted to thank to [Javier Alejandro González Casellas](https://github.com/JalexCode) and
[Manuel Ernesto Garcia](https://github.com/manuelernestog) for the help.

## Support

If you found this project useful you can support me [buying me a coffee☕](https://www.buymeacoffee.com/rolandorio).

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss]: https://img.shields.io/badge/Tailwind-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwindcss-url]: https://tailwindcss.com/
[Plasmo-framework]: https://img.shields.io/badge/Plasmo-20232A?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjM0IgogICBoZWlnaHQ9IjQ0IgogICB2aWV3Qm94PSIwIDAgMzQgNDQiCiAgIGNsYXNzPSJ3LTYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIHNvZGlwb2RpOmRvY25hbWU9InBsYXNtby5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4yICgwYTAwY2Y1MzM5LCAyMDIyLTAyLTA0KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxMCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIxMi44NTY0ODciCiAgICAgaW5rc2NhcGU6Y3g9IjEzLjk2MTgyMyIKICAgICBpbmtzY2FwZTpjeT0iMjMuODQwMTA1IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDA5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIzNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzgiIC8+CiAgPHBhdGgKICAgICBkPSJNMTYuODY2NyAzNS4wODEyQzE5LjI5NjcgMzUuMDgxMiAyMS4zNTEzIDM3LjE2ODQgMjAuMTc4MiAzOS4yOTY1QzIwLjAzODkgMzkuNTQ5MyAxOS44ODY2IDM5Ljc5NjIgMTkuNzIxOCA0MC4wMzYyQzE4LjcxNDYgNDEuNTAzIDE3LjI4MjkgNDIuNjQ2MSAxNS42MDc5IDQzLjMyMTJDMTMuOTMzIDQzLjk5NjIgMTIuMDg5OCA0NC4xNzI4IDEwLjMxMTcgNDMuODI4N0M4LjUzMzUzIDQzLjQ4NDYgNi45MDAxOSA0Mi42MzUxIDUuNjE4MiA0MS4zODc4QzQuMzM2MjIgNDAuMTQwNSAzLjQ2MzE4IDM4LjU1MTMgMy4xMDk0OCAzNi44MjExQzIuNzU1NzkgMzUuMDkxIDIuOTM3MzIgMzMuMjk3NyAzLjYzMTEyIDMxLjY2OEM0LjMyNDkyIDMwLjAzODMgNS40OTk4NCAyOC42NDU0IDcuMDA3MjkgMjcuNjY1M0M3LjI4MjkgMjcuNDg2MiA3LjU2NzM2IDI3LjMyMjMgNy44NTkzIDI3LjE3NEMxMC4wMjYxIDI2LjA3MzkgMTIuMSAyOC4xMzIyIDEyLjEgMzAuNTYyMlYzMC42ODEyQzEyLjEgMzMuMTExMiAxNC4wNyAzNS4wODEyIDE2LjUgMzUuMDgxMkgxNi44NjY3WiIKICAgICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgICAgaWQ9InBhdGgyIgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CiAgPHBhdGgKICAgICBkPSJNMjQuNTY2NiAxOC42NzAyQzI0LjU2NjYgMTYuMjQwMSAyNi42NDA1IDE0LjE4MTkgMjguODA3MyAxNS4yODJDMjkuMDk5MiAxNS40MzAyIDI5LjM4MzcgMTUuNTk0MSAyOS42NTkzIDE1Ljc3MzNDMzEuMTY2NyAxNi43NTMzIDMyLjM0MTcgMTguMTQ2MyAzMy4wMzU1IDE5Ljc3NkMzMy43MjkzIDIxLjQwNTcgMzMuOTEwOCAyMy4xOTkgMzMuNTU3MSAyNC45MjkxQzMzLjIwMzQgMjYuNjU5MiAzMi4zMzA0IDI4LjI0ODQgMzEuMDQ4NCAyOS40OTU3QzI5Ljc2NjQgMzAuNzQzMSAyOC4xMzMxIDMxLjU5MjUgMjYuMzU0OSAzMS45MzY3QzI0LjU3NjcgMzIuMjgwOCAyMi43MzM2IDMyLjEwNDIgMjEuMDU4NiAzMS40MjkxQzE5LjM4MzYgMzAuNzU0MSAxNy45NTIgMjkuNjEwOSAxNi45NDQ4IDI4LjE0NDJDMTYuNzc5OSAyNy45MDQyIDE2LjYyNzcgMjcuNjU3MyAxNi40ODgzIDI3LjQwNDVDMTUuMzE1MyAyNS4yNzYzIDE3LjM2OTggMjMuMTg5MSAxOS43OTk5IDIzLjE4OTFMMjAuMTY2NiAyMy4xODkxQzIyLjU5NjYgMjMuMTg5MSAyNC41NjY2IDIxLjIxOTIgMjQuNTY2NiAxOC43ODkxTDI0LjU2NjYgMTguNjcwMloiCiAgICAgZmlsbD0iY3VycmVudENvbG9yIgogICAgIGlkPSJwYXRoNCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgogIDxwYXRoCiAgICAgZD0iTTEyLjIyMjQgMTkuMzgzOEMxMi4yMjI0IDIxLjgxMzggMTAuMTkzNiAyMy44NTYzIDcuOTEyMDggMjMuMDE5OEM3LjA0MzkzIDIyLjcwMTQgNi4yMTE0NCAyMi4yODYzIDUuNDMyMDUgMjEuNzc5NkMzLjQyMjEyIDIwLjQ3MjkgMS44NTU1NyAxOC42MTU3IDAuOTMwNDk0IDE2LjQ0MjdDMC4wMDU0MjM4NiAxNC4yNjk4IC0wLjIzNjYxNyAxMS44Nzg3IDAuMjM0OTc5IDkuNTcxOUMwLjcwNjU3NyA3LjI2NTEgMS44NzA2MyA1LjE0NjE3IDMuNTc5OTQgMy40ODMwNUM1LjI4OTI1IDEuODE5OTQgNy40NjcwNCAwLjY4NzM1IDkuODM3OTIgMC4yMjg0OTlDMTIuMjA4OCAtMC4yMzAzNTMgMTQuNjY2MyAwLjAwNTE0NjgyIDE2Ljg5OTYgMC45MDUyMTZDMTkuMTMyOSAxLjgwNTI5IDIxLjA0MTggMy4zMjk1IDIyLjM4NDggNS4yODUxMUMyMi44ODQ2IDYuMDEzMDMgMjMuMjk3OCA2Ljc4ODU0IDIzLjYxOTUgNy41OTY2NkMyNC41MTgzIDkuODU0MzkgMjIuNDc0NiAxMS44OTE5IDIwLjA0NDYgMTEuODkxOUwxNi42MjI0IDExLjg5MTlDMTQuMTkyMyAxMS44OTE5IDEyLjIyMjQgMTMuODYxOCAxMi4yMjI0IDE2LjI5MTlMMTIuMjIyNCAxOS4zODM4WiIKICAgICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgICAgaWQ9InBhdGg2IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cjwvc3ZnPgo=&logoColor=61DAFB
[Plasmo-url]: https://plasmo.com/
