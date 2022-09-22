<script setup></script>

<template>
  <header class="header">
    <nav class="nav-router">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add movie</RouterLink>
      <RouterLink to="/delete/:id">Delete movie</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
.nav-router {
  display: flex;
  justify-content: space-around;
}

.header {
  background-color: #f5f5f5;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
