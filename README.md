## GitHub Repository: VT-Sase.github.io

Link to Test Website: <a href="https://vt-sase.github.io/" target="_blank">https://vt-sase.github.io/</a> \
Link to Actual VT SASE Website: <a href="https://sase-vt.org/" target="_blank">https://sase-vt.org/</a>

## Getting Started with Vite and Node Package Manager (npm)

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