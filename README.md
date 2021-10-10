<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://c.tenor.com/46CnZ6Y_rlYAAAAC/moss-it-crowd.gif" width="100%"></a></p>

## Steiner Skolan

New website for Steinerskolan, featuring a new design and fresh functionality. 

This project it built using WordPress, Gutenberg, and sass. Designed in Figma.

## Installation

**Prerequisites**

-   [UNIX based OS (mac, linux or WSL2 for windows)](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
-   Docker
-   npm

### Setting up project

```
git clone https://github.com/felixgren/wordpress-crew.git
cd wordpress-crew
npm install
cp .env.example .env
docker-compose up -d
```

### Creating blocks
```sh
## For this project we utilize blocks for everything everything except the header and footer.
# Creating a block
npx @wordpress/create-block my-new-block
# Listen for changes (compile sass)
npm start
```
