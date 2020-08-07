<template>
<div class="Home">
    <h1>Groupomania</h1>
    <div class="img">
        <img src="../assets/reseau3.jpg" alt="Photo de la page d'accueil">
    </div>
      
</div>
    
</template>

<script>

export default {
    name: 'Accueil',
}

</script>


<style lang="scss" scoped>
h1{
    position: relative;
    bottom: 60px;
    color: #FFF;
    display: inline;
    @media screen and (max-width: 1024px){
        font-size: 1.9em;
        bottom: 50px;
    }
}

img{
    width: 700px;
    @media screen and (max-width: 1024px){
        width: 300px;
    }
}
    
</style>
