import { createRouter, createWebHistory } from "vue-router";
import AllMoviesView from "../views/AllMoviesView.vue";
import MovieView from "../views/MovieView.vue";
import AddMovieView from "../views/AddMovieView.vue";
import DeleteMovieView from "../views/DeleteMovieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AllMoviesView,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: MovieView,
    },
    {
      path: "/add",
      name: "add",
      component: AddMovieView,
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: DeleteMovieView,
    },
  ],
});

export default router;
