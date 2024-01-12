### Instructions to build and deploy project to github pages

1. npm install
2. ng build
   //This moves creates a production build within the docs folder
3. move /docs/browser/ folder contents to docs/ folder root (this is the root webserver directory)
4. copy and paste index.html and rename it to 404.html
   //This resolves angular page routing issues
