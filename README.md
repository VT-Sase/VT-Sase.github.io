## GitHub Repository: VT-Sase.github.io

Link to Test Website: <a href="https://vt-sase.github.io/" target="_blank">https://vt-sase.github.io/</a> \
Link to Actual VT SASE Website: <a href="https://sase-vt.org/" target="_blank">https://sase-vt.org/</a>

## >> Getting Started << DO THIS FIRST!

```shell
# GitHub
# HTTPS
git clone https://github.com/VT-Sase/VT-Sase.github.io.git
# SSH (Recommended)
git clone git@github.com:VT-Sase/VT-Sase.github.io.git
```

```shell
# Create a frontend terminal
cd VT-Sase.github.io/
npm install
sh run_frontend.sh
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Getting Started with Vite and Node Package Manager (npm)

This project was created with [Vite](https://github.com/facebook/create-react-app) and uses packages from [npm](https://www.npmjs.com/). \
If you do not have `npm` installed on your operating system, see this section about [installation](https://nodejs.org/en/download) for more information.

## Available Scripts for Development

In the project directory, you can run:

## `npm ci`

When initially cloning the repository, allows you to get cleanly get all of the current `npm` installation packages associated with this version of the repository. \
This is ESSENTIAL before trying to run this project locally for development purposes.

## `npm install`
Installs dependencies of a local module as listed in that directory level's `package-lock.json` file.

## `npm install <package-name>`

Useful for installing a new package associated with `npm`. \
To make sure you are installing the right package, read more about the documentation of the package on https://www.npmjs.com/.

## `npm run dev`

Starts the development server to see live modifications to the website as you perform codebase changes locally. \
Listed in the `package.json` file, this `npm run` command aliases to `vite`. \
Other Aliases: `vite dev`, `vite serve`. \
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.


## `npm run build`

Builds the app for production to the `dist` folder.\
Correctly bundles the specified files and directories of this GitHub repositry, specified in the `vite.config.js` file, into production mode and optimizes the build for the best performance by bundling our assets: using this tool to crawl, process and concatenate our source modules into files that can run in the browser. \
Your app should now be ready to be deployed! \
Highly recommended to fix any red error messaging before pushing up any local changes to the GitHub Repository.

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

## `npm run preview`

Locally preview the production build before shipping it to be visible on the browser. \
Open [http://localhost:4173/](http://localhost:4173/) to view it in the browser.

## Deploying/Grabbing Changes Remotely to/from GitHub (Basic Commands to Know)

For a reference on how to use any of these `git` commands or other more advanced ones as well, see this [page](https://git-scm.com/doc) written by Git for more information.

## `git add <file(s) and/or directory(ies)>`

Adds any changed file contents from the current working directory needed be to be pushed to the remote branch, updating the index using the current content found in the working tree, to prepare the content staged for the next commit.

The "index" holds a snapshot of the content of the working tree, and it is this snapshot that is taken as the contents of the next commit. Thus after making any changes to the working tree, and before running the commit command, you must use the `add` command to add any new or modified files to the index.

### Optional Suggested Flags:

<ul>
    <li> ".": All files in the current directory.
    <li> "-A" or "--all": All files in the current directory and nested subdirectory / subdirectories.
</ul>

## `git commit -m <commit-message>`

Creates a new commit containing the current contents of the index and the given log message describing the changes. 

Convention used in 2022-2023 for Commit Message: "`<Date of Change>`: Added/Modified `<Feature>` in `<Directory>` `<File Name>` File". \
Better practice in the future may be to use the conventions specified by practicing software engineers. \
See the section about [commenting conventions](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) by FreeCodeCamp for suggestions on how to improve your commit mesages.

## `git push origin <remote-branch>`

Updates remote references along with associated objects, while sending objects necessary to complete the given references. \
Could just do `git push` if you have set the upstream branch properly. 

---

## `git fetch origin <remote-branch>`

Downloads objects and references from another repository. \
Could just do `git fetch` if you have set the upstream branch properly. 

## `git pull origin <remote-branch>`

Fetches from and integrates code changes from remote branches with another repository or your current local branch. \
Could just do `git pull` if you have set the upstream branch properly. 

---

## `git branch`

Lists, creates, or deletes branches on the locally or remotely.

### Optional Suggested Flags:

<ul>
    <li> "-a" or "--all": Lists both remote-tracking branches and local branches. 
    <li> "-c" or "--copy": Copies a branch, together with its configurations and reflog.
    <li> "-m" or "--move": Moves/renames a branch, together with its configurations and reflog.
    <li> "-d" or "--delete": Deletes a branch. The branch must be fully merged in its upstream branch, or in HEAD if no upstream was set with "--track" or "--set-upstream-to".
    <li> "-l" or "--list": List ONLY local branches.
</ul>

## `git checkout <branch-name>`

Switches branches or can be used to restore working tree files.

### Optional Suggested Flags:

<ul>
    <li> "-b new-branch": Create a new branch named "new-branch", start it at "start-point", and check the resulting branch out.
</ul>

### <b>Other Commands to Consider Looking Into (If Interested): `git stash`, `git restore`, `git log`.</b>

Once more, for a reference on how to use any of these `git` commands or other more advanced ones as well, see this [page](https://git-scm.com/doc) written by Git for more information.

## File Structure of the GitHub Repository

### `index.html` (Outside Level)

Home `index.html` Page of the SASE Website, serves as the main access point. Contains the carousel of slideshow images.

### About, Alumni, Data-Analytics, Events, Officers, Sponsors, Year-in-Review Directories

Contains the respective `index.html` pages for each of those static pages on the SASE Website as well as the older nested `HTML` pages (Officer folder).

### CSS Directory

Contains all of the `CSS` stylesheets, providing all of the styling pages used on the SASE Website.

### JS Directory

Contains all of the `JS` scripts, providing all of the dynamic content and rendering functionality for the SASE Website.

### `Assets` Directory

Includes all of the (static) images that are used on all of the pages of the SASE Website. It is organized into sub-directories by academic year and type of image: original (unoptimized), compressed (after running the original images through one/more of the image compression website(s)), and compressed-smaller (uses cropping tools on your local machine) that stores even further file-size-reduced images. \
Highly recommend to only use the compressed-smaller images to keep the fully utilize and keep the Vite build as fast as possible!!! \
[Message for Current and Future/Incoming Webmasters...] Please see the Webmaster Instruction Document in your SASE Officer Drive Directory for more information on suggested practices on how to follow this convention with the `Assets` Directory! Of course, you can organize the `Assets` Directory your own way if you are the current Webmaster, but these are merely recommendations on one way on how to optimize the SASE Website which have been proven to work!

### `vite.config.js`

Important file to specify which directories (as well as associated specific files) to include in the `vite` build for production. \
See the section about [deployment](https://vitejs.dev/guide/build.html) for more information on how to create or modify this file appropriately for future use.

### `.gitignore` File

Elaborates which files or directories locally are not included when interacting with the remote repositories to avoid version conflicts on different operating system machines within the same academic school year or also between different school years. \
As of right now, there 

### `CNAME` File

File necessary for specifying the URL integrated with our GoDaddy Web Domain and its associated configuraiton settings. See this [page](https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b) for more information on understanding how our GoDaddy Website Domain was integrated with GitHub Pages and/or fix any issues with syncing between GoDaddy and GitHub Pages in the future.

### `package.json` and `package-lock.json`

Contains all of the NPM installed packages for this GitHub Repository. Please refer to the `Available Scripts for Development` Section above to see how it is used toward this SASE website's development.

### `main.yml` (in "`/.github/workflows`" Directory)

Specifies the basic CI/CD on GitHub whenever code changes are added to the index, committed with a log message, and pushed to the remote branch. Enables `npm` and `vite` commands be run to render the appropriate, optimized artifacts/assets onto our public SASE website domain. See the GitHub Action [documentation](https://docs.github.com/en/actions) page for more information on how GitHub handles deploying code from local to remote repositories generally work as well as the Vite [deployment](https://vitejs.dev/guide/static-deploy.html) page for more information on how our SASE website is running Vite on our GitHub repository when deployed. \
For future Webmasters, we may need to consider placing protections on the branches to avoid committing and pushing code that will break the SASE website when rendered on Internet browsers.

