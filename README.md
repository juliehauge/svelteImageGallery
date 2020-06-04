# Svelte Image Gallery
A simple image gallery web-application, displaying a grid of images through data from the <a href='https://firebase.google.com/'>Firebase</a> database.
It uses the <a href='https://svelte.dev/docs'>Svelte</a> framework to build a web-application.

## Set up
```html
npm i
npm run dev

```

## Project Structure
This is a four page web-application, where each page is imported in app/App.svelte
- gets its data from a <a href='https://firebase.google.com/'>Firebase</a> database
- uses an <a href='https://svelte.dev/docs#each'>each</a> block to display each image in the database in a grid
- uses an <a href='https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ro'>add</a> method to add new data to the database
- uses an <a href='https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data'>update</a> method to update the data in the database
- uses an <a href='https://svelte.dev/docs#if'>if</a> block to display the images where the data is updated
- uses <a href='https://firebase.google.com/docs/storage'>Firebase Storage</a> to upload images to the database
- uses <a href='https://www.mapbox.com/maps/'>Mapbox</a> to display a map
- adds <a href='https://docs.mapbox.com/help/tutorials/markers/'>markers</a> to the map on upload
- adds <a href='https://docs.mapbox.com/mapbox-gl-js/example/popup/'>popups</a> for each marker, which connects with the database

