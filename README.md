# Componentizing the Application

RocketSeat's React trail challenge.

Application where the main objective is to refactor a page to list movies according to genre.

The application is already fully functional but most of its code is directly in the `App.tsx` file. To resolve this in the best way, it is necessary to divide the application into **at least** two main parts: sidebar and the main content that has the header and the movie listing.

- The application has only one main feature, which is the movie listing;
- In the sidebar it is possible to select which category of movies should be listed;
- The first category in the list (which is "Action") should already start as checked;
- The application's header only has the name of the selected category, which must change dynamically.
