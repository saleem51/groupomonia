<template>
    <footer class="page-footer font-small special-color-dark pt-4">
        <div class="container">
            <div id="foot" class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://groupomania.com/">Groupomania</a>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'footbottom',
}
</script>

<style lang="scss" scoped>

footer{
    background-color: #742ea3;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;

}

a{
    color: #FFF;
   
}

a:hover{
    color: #FFF;
}

#foot{
    position: relative;
    bottom: 10px;
    color: #FFF;
}


</style>
