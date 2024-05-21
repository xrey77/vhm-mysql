<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <router-link class="navbar-brand" to="/"><img class="logo" src="images/logo.png" /></router-link>                
            <!-- <a class="navbar-brand" href="#">QATAR FOUNDATION</a> -->
            
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> -->

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link active" to="about">About Us</router-link>                
                  <!-- <a class="nav-link active" aria-current="page" href="#">About Us</a> -->
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Activities
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link class="dropdown-item" to="/#">HipHop for Kids</router-link>                
                  </li>
                    <li>
                      <router-link class="dropdown-item" to="/#">HipHop for Adults</router-link>                
                  </li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                      <router-link class="dropdown-item" to="/#">Modern Jazz</router-link>                
                  </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" to="/location">Locate Us</router-link>                
                </li>
              </ul>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link class="nav-link active" to="/#" data-bs-toggle="modal" data-bs-target="#staticLogin">Login</router-link>                
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" to="/#" data-bs-toggle="modal" data-bs-target="#staticRegister">Register</router-link>                
                </li>
            </ul>
            </div>



          </div>
      </nav>
      <router-view />
      <Register/>
      <Login/>


            <!-- DRAWER MENU -->
            <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">DRAWER MENU OPTION</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">

                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                  </li>
                  <hr/>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <hr/>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <hr/>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>  
                  <hr/>

                  <div class="dropdown mt-3">
                    <div class="dropdown-toggle m-left" data-bs-toggle="dropdown">
                      Dropdown button
                    </div>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>                    
                </ul>
              </div>

              <div class="offcanvas-footer">
                test
              </div>
            
            </div>
  
    </div>
  </template>
  <script lang="ts">
      import { defineComponent } from 'vue';
      import Login from '@/components/Login.vue';
      import Register from '@/components/Register.vue';

      export default defineComponent({
          name: 'Header-Page',
          components: {
            Login,
            Register
          }
      })
  </script>

<style scoped>
 .logo {
    width: 50px;
    height: 50px;
 }
 .offcanvas {  
    width: 50%!important;
 }
 .m-left {
  margin-left: 15px;
 }
 .offcanvas-footer {
    position: absolute;
    margin-bottom: 0px;
 }
 </style>