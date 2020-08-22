<template>
    <div class="container">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1" id="logout">
                <div class="page-header">
                    <h3 class="reviews">Postez votre message</h3>
                    <div class="logout">
                        <button class="btn btn-default btn-circle text-uppercase" type="button"  @click= "deco" id="deco">
                            <span class="glyphicon glyphicon-off"></span>Se deconnecter                    
                        </button>                
                    </div>
                </div>
                <div class="comment-tabs">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="active"><a href="#comments-logout" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Message</h4></a></li>
                        <li><a href="#add-comment" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Ajouter un commentaire</h4></a></li>
                    </ul>            
                    <div class="tab-content">
                        <div class="tab-pane active" id="comments-logout">                
                            <ul class="media-list">
                                <li class="media">
                                    <div class="media-body" >
                                        <ul class="well well-lg" v-for="mess in msg" :key="mess">
                                            <h4 class="media-heading text-uppercase reviews">{{mess.username}}</h4>
                                            <ul class="media-date text-uppercase reviews list-inline">
                                                <li class="aaaa">{{mess.created_at}}</li>
                                            </ul>
                                            <p class="media-comment">{{mess.message}}</p>
                                            <a class="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span class="glyphicon glyphicon-share-alt"></span>Reply</a>
                                            <a class="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span class="glyphicon glyphicon-comment"></span>Comment</a>
                                        </ul>
                                    </div>
                                </li>       
                            </ul>              
                        </div>
                    </div>              
                </div>
            </div>              
    </div> 
    
     

    </div>
</template>

<script>

import axios from 'axios'

export default {
       name:'message',
    data() {

      return {
        data:JSON.parse(this.$session.get('user')),
        message:"",
        msg:"",
        date:""

      }
    },
    methods: {

      sendMessage : function(){
        let token = this.data.token
        let idUSERS = this.data.userId
        let userName = this.data.username
        if (this.message === ""){
          alert('Vous n\'avez rien écris vous ne pouvez pas envoyé un message vide !')
        } else{
           axios.post('http://localhost:3000/api/postmessage',
        {
          message: this.message,
          token: this.data.token,
          idUSERS : idUSERS,
          username: userName

        },{
          headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
              }
        })
        .then (() => { 
                    console.log('message envoyé')
                    this.message ==="";
                    alert('votre message a bien été envoyé !')
                    location.reload(true);

                    
       })
       .catch(() =>{
         console.log('le message n\'a pas été envoyé')
       }) 
        }
       
      },

      deco: function(){
            if(window.confirm('Voulez-vous vraiment vous déconnecter ?')){
              this.$session.remove('user');
              window.location.href = "http://localhost:8080/#/home";
            } 
      },

    },
    mounted (){ 
        axios.get('http://localhost:3000/api/getmessages')
        .then(response => {
          console.log(response.data)
          this.msg = response.data
        })
        .catch(error => console.log(error))
    }

}
</script>

<style lang="scss" scoped>

#reply{
    margin-right: 50%;
    position: relative;
    top: 30px;
}

.btn-circle{
    margin-right: 80%;
}

.row{
    margin-left: 100px;
    position: relative;
    bottom: 95px;
}

#login { display: none; }
.login,
.logout { 
    position: absolute; 
    top: -3px;
    right: 0;
}
.page-header { position: relative; }
.reviews {
    color: #555;    
    font-weight: bold;
    margin: 10px auto 20px;
    margin-left: 10px;
}
.notes {
    color: #999;
    font-size: 12px;
}
.media .media-object { max-width: 120px; }
.media-body { position: relative;
height: 10%;                                                      
 }

 .media{
     height: 50%;
 }
/*.media-date { 
    position: absolute; 
    right: 25px;
    top: 25px;
}*/
.media-date li { padding: 0; }
.media-date li:first-child:before { content: ''; }
.media-date li:before { 
    content: '.'; 
    margin-left: -2px; 
    margin-right: 2px;
}
.media-comment { margin-bottom: 20px; }
.media-replied { margin: 0 0 20px 50px; }
.media-replied .media-heading { padding-left: 6px; }


.tab-content {
    padding: 50px 15px;
    border: 1px solid #ddd;
    border-top: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    
}
.custom-input-file {
    overflow: hidden;
    position: relative;
    width: 120px;
    height: 120px;  
    background-size: 120px;
    border-radius: 120px;
}
input[type="file"]{
    z-index: 999;
    line-height: 0;
    font-size: 0;
    position: absolute;
    opacity: 0;
    filter: alpha(opacity = 0);-ms-filter: "alpha(opacity=0)";
    margin: 0;
    padding:0;
    left:0;
}

h3
,.btn{
color: #ddd!important;
}

</style>
