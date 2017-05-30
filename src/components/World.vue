<template>
  <div class="world">
     <span v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">{{msg}}</span>
     <button id="xxx" class="abc" v-on:click="warn('Form cannot be submitted yet.', $event)">读取数据</button>
      <span id="spantest">111</span>
     <br/>
     <input id="username" v-model="msg" placeholder="edit me">
     
    <table :id="did" border="1">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>pic</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person,index) in people">
                        <td>({{index+1}}){{ person.title  }}</td>
                        <td>{{ person.pic  }}</td>
                        <td>{{ person.url  }}</td>
                    </tr>
                </tbody>
            </table> 


            <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
  </div>
  
</template>

<script>

export default {
    name: 'world',
    
    data () {
        return {
        did:"testid",
        msg: 'this is a world.',
        message : "Sheley is girl" ,
        activeColor: 'red',
        fontSize: 30,
        people: [
                {
                "pic": "20170318025753.jpg",
                "url": "http:\/\/www.100189.com\/_h5v2\/lease\/",
                "title": "勇:\u5c0f\u9cb8\u79df\u673a"
            }
                ]
        }
    },
    methods:{
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            this.ajax_render();
            console.log(event);
            if (event) event.preventDefault()
            //alert(message)
        },
        ajax_render:function(){
                  let that=this;
                  console.log("ajax Begin:");
                  console.log(this.people);
                  $.get("http://localhost:8080/static/fakedate/json1.json",(response)=>{                    
                    if(response.data && response.data.slide){                        
                            that.people=response.data.slide; 
                            that.people.concat(response.data.slide);                      
                            console.log("ajax End:"+that.people.length);
                    }
                  }); 
                
        }
      
    },
     beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
               console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
               console.log("%c%s", "color:red","message: " + this.message)  
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化
            //ajax请求数据

             //this.ajax_render();
             //console.log(this.people);  

        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);    
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化 

           $("#spantest").css({"padding":"30px","font-size":"200%"}).html("内空");
           //this.ajax_render();
         // $('[data-toggle="tooltip"]').tooltip()

        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);   
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el); 
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);    
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);  
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message)
        }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  content:"测试汉字";
  display: inline-block;
  margin: 0 10px;
}


</style>
