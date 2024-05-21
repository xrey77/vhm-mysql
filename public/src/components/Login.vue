<template>
    <div class="modal fade" id="staticLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticLogin" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-success">
              <h1 class="modal-title fs-5 text-white" id="staticBackdropLogin">Account Login</h1>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit="submitLogin">
                 <div class="mb-3">
                    <input type="text" required v-model="usrname" class="form-control" placeholder="enter your Username">
                 </div>
                 <div class="mb-3">
                    <input type="password" required v-model="passwd" class="form-control" placeholder="enter your Password">
                 </div>
                 <Button type="submit" class="btn btn-success text-white">login</Button>
              </form>
            </div>
            <div class="modal-footer">
                <div class="w-100 text-danger">{{message}}</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Login-Page',
    components: { 
    },
    data() {
        return {
            usrname: "",
            passwd: "",
            message: ""
        }
    },
    methods: {
        // eslint-disable-next-line      
        submitLogin: function(event: any) {
            event.preventDefault();
            this.message = "test message" 
            alert(this.usrname + "\n" + this.passwd)

        }
    }
})
</script>