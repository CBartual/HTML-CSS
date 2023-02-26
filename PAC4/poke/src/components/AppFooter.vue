<script>
  export default {
    name: "AppFooter",
    data() {
      return {
        year: new Date().getFullYear(),
      };
    },
  };
</script>

<template>
    <footer>
      <p>Copyright &copy; {{ year }} </p>
    </footer>
  </template>  

  <style scoped>
    footer {
        border-top: 1px solid #ccc;
      text-align: center;
      
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    </style>