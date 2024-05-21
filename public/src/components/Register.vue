<template>
    <div class="modal fade" id="staticRegister" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticRegister" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-danger">
              <h1 class="modal-title fs-5 text-white" id="staticBackdropRegister">Registration</h1>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row"> 
                        <div class="col">
                            <div class="mb-3">
                                <input type="text" required class="form-control" id="fname" placeholder="enter your Firstname">
                             </div>         
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <input type="text" required class="form-control" id="lname" placeholder="enter your Lastname">
                             </div>         
                        </div>
                    </div>

                    <div class="row"> 
                        <div class="col">
                            <div class="mb-3">
                                <input type="text" required class="form-control" id="emailadd" placeholder="enter your Email Address">
                             </div>         
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <input type="text" required class="form-control" id="mobileno" placeholder="enter your Mobile No.">
                             </div>         
                        </div>
                    </div>

                    <div class="row"> 
                        <div class="col">
                            <div class="mb-3">
                                <input type="text" required class="form-control" id="usrname" placeholder="enter your Username">
                             </div>         
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <input type="password" required class="form-control" id="passwd" placeholder="enter your Password">
                             </div>         
                        </div>
                    </div>





                    <Button type="submit" class="btn btn-danger">register</Button>
                 </form>                 
            </div>
            <div class="modal-footer">
                <div class="w-100 text-danger">message</div>
            </div>
          </div>
        </div>
      </div>      
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Register-Page'
})
</script>